import { IconCheck, IconCopy } from "@tabler/icons-react";
import useCopy from "@/hooks/use-copy";
import { Button } from "./ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  titleDesc?: string;
  snippet: string;
}

export default function SnippetAccordionItem({
  id,
  title,
  titleDesc = "",
  snippet,
}: Props) {
  const [copied, setCopied] = useCopy();
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-base py-2 group hover:no-underline">
        <div>
          <span className="group-hover:underline underline-offset-4">
            {title}
          </span>
          {titleDesc && (
            <span className="ml-1 text-muted-foreground font-normal text-sm no-underline">
              ({titleDesc})
            </span>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="relative">
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 size-8"
          onClick={() => setCopied(snippet)}
        >
          <IconCheck
            size={16}
            className={cn(
              "transition-all",
              copied
                ? "opacity-100 translate-x-2"
                : "opacity-0 translate-x-full"
            )}
          />
          <IconCopy
            size={16}
            className={cn(
              "transition-all",
              copied
                ? "opacity-0 translate-x-full"
                : "opacity-100 -translate-x-2"
            )}
          />
        </Button>
        <div className="bg-slate-900 font-light text-slate-300 p-2 rounded w-full overflow-x-auto h-96 overflow-y-auto text-xs">
          <pre>
            <code>{snippet}</code>
          </pre>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
