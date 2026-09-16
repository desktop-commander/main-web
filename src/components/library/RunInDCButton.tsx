import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy, Zap } from 'lucide-react';
import { usePostHog } from '@/components/PostHogProvider';

/**
 * Prompt CTA: copy the prompt, nothing else.
 *
 * This used to branch into app download options for visitors without the
 * desktop app. With the site built around MCP in ChatGPT and Claude, the
 * prompt is useful wherever the visitor already chats, so the CTA is one
 * copy button.
 */

interface RunInDCButtonProps {
  promptTitle: string;
  prompt: string;
  onCopySuccess?: () => void;
}

export function RunInDCButton({ promptTitle, prompt, onCopySuccess }: RunInDCButtonProps) {
  const [copied, setCopied] = useState(false);
  const posthog = usePostHog();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);

      posthog.capture('prompt_library_prompt_copied', {
        prompt_title: promptTitle,
        copy_method: 'run_button',
      });

      onCopySuccess?.();
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground">Ready to run this prompt?</p>
            <p className="text-sm text-muted-foreground">
              Paste it into ChatGPT, Claude, or any AI client connected to your machine.
            </p>
          </div>
        </div>
        <Button
          size="lg"
          onClick={handleCopy}
          className="min-w-[180px] dc-button-primary transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-5 w-5 mr-2" />
              Copy prompt
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default RunInDCButton;
