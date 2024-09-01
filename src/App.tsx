import {
  IconCaretDown,
  IconCheck,
  IconCopy,
  IconGitFork,
  IconStar,
} from "@tabler/icons-react";
import { Button } from "./components/ui/button";
import ThemeSwitch from "./components/theme-switch";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { pinInputCodes } from "./assets/pin-input-codes";
import { cn } from "./lib/utils";
import useCopy from "./hooks/use-copy";
import { PinInputForm } from "./components/pin-input-form";

export default function App() {
  const [copied, setCopied] = useCopy();
  return (
    <main className="max-w-3xl mx-auto pt-20 pb-20">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-center">Pin Input</h1>
        <p className="text-muted-foreground text-center text-lg leading-tight">
          A modular, style-agnostic PinInput component for React, <br />
          ready to use with just a copy-paste—no extra libraries needed.
        </p>
      </div>
      <div className="space-x-4 mt-4 text-center">
        <Button variant="outline" leftSection={<IconGitFork size={20} />}>
          Fork
        </Button>
        <Button leftSection={<IconStar size={18} />}>GitHub</Button>
        <ThemeSwitch />
      </div>

      <section className="grid grid-cols-12 grid-rows-6 gap-4 mt-8">
        {/* Pin Input */}
        <div className="bg-card p-4 rounded-md shadow-sm col-span-7 row-span-4 space-y-2">
          <h2 className="font-medium text-lg mb-1">
            Two-factor Authentication
          </h2>
          <p className="text-muted-foreground">
            Please enter the authentication code. <br />
            We have sent the authentication code to your email.
          </p>
          <PinInputForm />
        </div>

        {/* Get Started */}
        <div className="bg-card p-4 rounded-md shadow-sm col-span-5 row-span-3">
          <h2 className="font-medium text-lg mb-1">Get Started</h2>
          <ol className="list-decimal pl-4 text-muted-foreground">
            <li>Install shadcn/ui incl. the Input component.</li>
            <li>Copy & paste pin-input.tsx</li>
            <li>Define your config and pass required props</li>
          </ol>
        </div>

        {/* Features */}
        <div className="bg-card p-4 rounded-md shadow-sm col-span-5 row-span-3">
          <h2 className="font-medium text-lg mb-1">Features</h2>
          <ul className="list-disc pl-4 text-muted-foreground">
            <li>No additional library</li>
            <li>Listens to keydown events</li>
            <li>Supports arrow navigation</li>
            <li>Formats date values</li>
            <li>Optimizes mobile keyboard</li>
          </ul>
        </div>

        {/* Note */}
        <div className="bg-card p-4 rounded-md shadow-sm col-span-7 row-span-2">
          <h2 className="font-medium text-lg mb-1">Note</h2>
          <p className="text-sm text-muted-foreground">
            You don't need to install component library or any CSS library.
            However, you can make use of it for the best version available.
          </p>
        </div>

        {/* Snippets */}
        <div className="bg-card p-4 rounded-md shadow-sm col-span-12 row-span-2">
          <h2 className="font-medium text-lg mb-2">Snippets</h2>
          <Collapsible defaultOpen>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between mb-2 group"
              >
                <span>pin-input.tsx</span>
                <IconCaretDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="relative">
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-3 right-3 size-8"
                  onClick={() => setCopied(pinInputCodes)}
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
                    <code>{pinInputCodes}</code>
                  </pre>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    </main>
  );
}
