# WP → Astro Export Manifest

Exported: 2026-06-04T12:25:47+00:00  |  Site: Desktop Commander Blog

**28 posts · 2 pages · 8 authors · 10 categories · 88 media refs (80 on disk, 8 CDN-only)**

Raw bundle (`wp-export/`) is git-ignored; reproduce via `_migration/export.php`.

## Posts (chronological)

| # | slug | author | categories | meta desc | featured |
|---|------|--------|-----------|-----------|----------|
| 1 | how-to-set-up-local-development-environment-with-ease | sidraarif | how-to | excerpt | yes |
| 2 | what-is-an-mcp-server-and-how-it-works-in-plain-english | karlina | mcp | excerpt | yes |
| 3 | best-mcp-servers | karlina | mcp | custom | yes |
| 4 | how-to-read-and-process-csv-files-in-python-complete-guide | sidraarif | deep-dives,how-to,use-cases | excerpt | yes |
| 5 | ai-code-review-with-desktop-commander-a-practical-guide | rk7f8a7274b9330 | deep-dives,use-cases | custom | yes |
| 6 | markdown-best-practices-technical-documentation | romanmakarenko | deep-dives,how-to,tutorials,use-cases | custom | yes |
| 7 | automate-docker-workflows-with-ai | eduardruzga | deep-dives,how-to,tutorials | custom | yes |
| 8 | convert-heic-to-jpg-locally-with-desktop-commander | rafaelpinheiro | how-to,tutorials | custom | yes |
| 9 | build-a-personal-ai-knowledge-base-with-local-files | rafaelpinheiro | how-to,tutorials,use-cases | custom | yes |
| 10 | markdown-file-the-complete-reference-guide-for-2026-with-cheatsheet | rafaelpinheiro | knowledge-base,markdown | custom | yes |
| 11 | create-and-manage-your-obsidian-knowledge-base-with-ai | rafaelpinheiro | how-to,knowledge-base,markdown | custom | yes |
| 12 | claude-mcp-how-to-use-mcp-with-claude-ai | rafaelpinheiro | how-to,mcp | custom | yes |
| 13 | supabase-mcp-how-to-connect-ai-to-your-database | rafaelpinheiro | mcp,uncategorized | custom | yes |
| 14 | markdown-tables-complete-syntax-guide | rafaelpinheiro | markdown,tutorials | custom | yes |
| 15 | i-can-tell-when-youre-using-ai-in-my-interviews-heres-how | eduardruzga | insights | custom | yes |
| 16 | how-to-use-tags-in-obsidian-markdown | rafaelpinheiro | how-to | custom | yes |
| 17 | obsidian-markdown-cheatsheet-every-syntax-you-actually-need | rafaelpinheiro | how-to,markdown,tutorials | custom | yes |
| 18 | best-mcp-servers-for-knowledge-bases-in-2026 | rafaelpinheiro | deep-dives,knowledge-base,mcp | custom | yes |
| 19 | markdown-to-pdf | rafaelpinheiro | how-to,markdown,tutorials | custom | yes |
| 20 | desktop-commander-vs-cowork | rk7f8a7274b9330 | insights,use-cases | custom | yes |
| 21 | knowledge-management-system | rafaelpinheiro | uncategorized | custom | yes |
| 22 | best-obsidian-plugins | karlina | deep-dives,use-cases | custom | yes |
| 23 | ai-knowledge-management-system | rafaelpinheiro | insights,knowledge-base | custom | yes |
| 24 | personal-management-system | rafaelpinheiro | knowledge-base,use-cases | custom | yes |
| 25 | notion-mcp-server | rafaelpinheiro | mcp,tutorials | custom | yes |
| 26 | obsidian-find-replace-vault | rafaelpinheiro | how-to,knowledge-base | custom | yes |
| 27 | obsidian-bulk-rename-files | rafaelpinheiro | how-to,tutorials,uncategorized | custom | yes |
| 28 | zettelkasten-obsidian | karlina | deep-dives,how-to,knowledge-base,use-cases | custom | yes |

## Authors

| login | display | posts | socials |
|-------|---------|-------|---------|
| ds | ds | 0 | — |
| eduardruzga | Eduard Ruzga | 2 | LinkedIn X GitHub |
| er | er | 0 | — |
| karlina | Karlina Sara Rozkalne | 4 | LinkedIn |
| rafaelpinheiro | Rafael Pinheiro | 17 | LinkedIn |
| rk7f8a7274b9330 | Ricards Krizanovskis | 2 | LinkedIn |
| romanmakarenko | Roman Makarenko | 1 | — |
| sidraarif | Sidra Arif | 2 | — |

## Categories

| slug | name | count |
|------|------|-------|
| how-to | How-to | 14 |
| tutorials | Tutorials | 9 |
| use-cases | Use Cases | 8 |
| deep-dives | Deep Dives | 7 |
| knowledge-base | Knowledge base | 7 |
| mcp | MCP | 6 |
| markdown | Markdown | 5 |
| insights | Insights | 3 |
| uncategorized | Uncategorized | 3 |
| product-updates | Product Updates | 0 |

## Known gaps

- **3 posts use auto/excerpt meta description** (no custom field): replicate WP fallback exactly — custom→excerpt→strip_tags(strip_shortcodes(content)) truncated 157+"…".
- **8 inline images are CDN-only** (not on WP disk), in posts: what-is-an-mcp-server…, how-to-set-up-local-development…, i-can-tell-when-youre-using-ai…. Need to source these separately.