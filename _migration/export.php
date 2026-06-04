<?php
/**
 * WP → Astro blog export.
 * Run remotely:  wp eval-file /dev/stdin > /tmp/dcblog/data.json
 * Emits a single JSON document with posts (raw content + metadata),
 * pages (about/contact), authors, categories, and a media manifest.
 * No transformation here — fidelity first; transformation happens in Astro build.
 */

$upload = wp_upload_dir();
$basedir = $upload['basedir']; // e.g. /.../wp-content/uploads
$media = array();              // upload-relative paths to copy

function rel_upload_path($url_or_path, $basedir, $baseurl) {
    // Accept absolute server path, site URL, or Jetpack CDN (i0/i1/i2.wp.com/<host>/...) URL.
    if (strpos($url_or_path, $basedir) === 0) {
        return ltrim(substr($url_or_path, strlen($basedir)), '/');
    }
    // strip query string
    $u = preg_replace('/\?.*$/', '', $url_or_path);
    // everything after /wp-content/uploads/
    if (preg_match('#/wp-content/uploads/(.+)$#', $u, $m)) {
        return $m[1];
    }
    return null;
}

$out = array(
    'exported_at' => date('c'),
    'site' => array(
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'home_url' => home_url('/'),
    ),
    'posts' => array(),
    'pages' => array(),
    'authors' => array(),
    'categories' => array(),
);

$baseurl = $upload['baseurl'];

// ---- Posts (all published) ----
$posts = get_posts(array('post_type' => 'post', 'post_status' => 'publish', 'numberposts' => -1, 'orderby' => 'date', 'order' => 'DESC'));
foreach ($posts as $p) {
    $thumb_id = get_post_thumbnail_id($p->ID);
    $img = $thumb_id ? wp_get_attachment_image_src($thumb_id, 'full') : null;
    $file = $thumb_id ? get_attached_file($thumb_id) : null;
    $featured_rel = null;
    if ($file) {
        $featured_rel = rel_upload_path($file, $basedir, $baseurl);
        if ($featured_rel) $media[$featured_rel] = true;
    }
    // scan content for inline uploads references
    if (preg_match_all('#https?://[^\s"\')]+/wp-content/uploads/[^\s"\')]+#', $p->post_content, $mm)) {
        foreach ($mm[0] as $u) {
            $r = rel_upload_path($u, $basedir, $baseurl);
            if ($r) $media[$r] = true;
        }
    }
    $out['posts'][] = array(
        'id' => $p->ID,
        'slug' => $p->post_name,
        'title' => html_entity_decode(get_the_title($p), ENT_QUOTES, 'UTF-8'),
        'date' => get_the_date('c', $p),
        'modified' => get_the_modified_date('c', $p),
        'author_id' => (int)$p->post_author,
        'author_login' => get_the_author_meta('user_login', $p->post_author),
        'author_name' => get_the_author_meta('display_name', $p->post_author),
        'excerpt' => $p->post_excerpt,
        'meta_description' => get_post_meta($p->ID, '_desktopcommander_meta_description', true),
        'categories' => wp_get_post_terms($p->ID, 'category', array('fields' => 'slugs')),
        'category_names' => wp_get_post_terms($p->ID, 'category', array('fields' => 'names')),
        'tags' => wp_get_post_terms($p->ID, 'post_tag', array('fields' => 'slugs')),
        'featured_image_url' => $img ? $img[0] : '',
        'featured_image_rel' => $featured_rel,
        'featured_image_w' => $img ? (int)$img[1] : 0,
        'featured_image_h' => $img ? (int)$img[2] : 0,
        'content' => $p->post_content,
    );
}

// ---- Pages: about (141), contact (160) ----
foreach (array(141, 160) as $pid) {
    $p = get_post($pid);
    if (!$p) continue;
    $out['pages'][] = array(
        'id' => $p->ID,
        'slug' => $p->post_name,
        'title' => html_entity_decode(get_the_title($p), ENT_QUOTES, 'UTF-8'),
        'date' => get_the_date('c', $p),
        'modified' => get_the_modified_date('c', $p),
        'meta_description' => get_post_meta($p->ID, '_desktopcommander_meta_description', true),
        'template' => get_page_template_slug($p->ID),
        'content' => $p->post_content,
    );
}

// ---- Authors (all users) ----
foreach (get_users() as $u) {
    $out['authors'][] = array(
        'id' => (int)$u->ID,
        'login' => $u->user_login,
        'display_name' => $u->display_name,
        'bio' => get_the_author_meta('description', $u->ID),
        'avatar_url' => get_avatar_url($u->ID, array('size' => 400)),
        'linkedin' => get_the_author_meta('linkedin', $u->ID),
        'x_url' => get_the_author_meta('x_url', $u->ID),
        'github' => get_the_author_meta('github', $u->ID),
        'post_count' => count_user_posts($u->ID, 'post', true),
    );
}

// ---- Categories ----
foreach (get_terms(array('taxonomy' => 'category', 'hide_empty' => false)) as $t) {
    $out['categories'][] = array(
        'term_id' => (int)$t->term_id,
        'name' => $t->name,
        'slug' => $t->slug,
        'description' => $t->description,
        'count' => (int)$t->count,
    );
}

$out['media'] = array_keys($media);

// Side-channel files for the bash media-copy step (avoids parsing JSON in shell).
@mkdir('/tmp/dcblog', 0777, true);
file_put_contents('/tmp/dcblog/media-files.txt', implode("\n", array_keys($media)) . "\n");
file_put_contents('/tmp/dcblog/basedir.txt', $basedir . "\n");

echo json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
