import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconDeviceLaptop,
  IconGitFork,
  IconHeart,
  IconStar,
} from "@tabler/icons-react";
import { pinInputShadcn, pinInputRaw } from "@/assets/snippets";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import ThemeSwitch from "@/components/theme-switch";
import { PinInputForm } from "@/components/pin-input-form";
import SnippetAccordionItem from "@/components/snippet-accordion-item";
import { SocialButton } from "./components/ui/social-button";

export default function App() {
  return (
    <>
      <main className="max-w-3xl mx-auto pt-20 pb-10">
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
            <ol className="list-decimal pl-4 font-light">
              <li>Install shadcn/ui incl. the Input component.</li>
              <li>Copy & paste pin-input.tsx</li>
              <li>Define your config and pass required props</li>
            </ol>
          </div>

          {/* Features */}
          <div className="bg-card p-4 rounded-md shadow-sm col-span-5 row-span-3">
            <h2 className="font-medium text-lg mb-1">Features</h2>
            <ul className="list-disc pl-4 font-light">
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
          <div className="bg-card p-4 rounded-md shadow-sm col-span-12">
            <h2 className="font-medium text-lg">Snippets</h2>
            <div className="mt-2 divide-y">
              <Accordion type="single" collapsible defaultValue="pin-input-1">
                <SnippetAccordionItem
                  id="pin-input-1"
                  title="pin-input.tsx"
                  titleDesc="with ShadcnUI installed"
                  snippet={pinInputShadcn}
                />
                <SnippetAccordionItem
                  id="pin-input-2"
                  title="pin-input.tsx"
                  titleDesc="without Tailwind or ShadcnUI"
                  snippet={pinInputRaw}
                />
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto flex flex-col justify-center items-center py-2">
        <span>
          Crafted with <IconHeart className="inline-block size-5" /> by Sat
          Naing.
        </span>
        <div className="space-x-2 mt-1">
          <SocialButton
            title="Sat Naing on GitHub"
            href="https://github.com/satnaing"
          >
            <IconBrandGithub />
          </SocialButton>
          <SocialButton
            title="Sat Naing's Portfolio Website"
            href="https://satnaing.dev"
          >
            <IconDeviceLaptop />
          </SocialButton>
          <SocialButton
            title="Sat Naing on X (aka Twitter)"
            href="https://x.com/satnaingdev"
          >
            <IconBrandX />
          </SocialButton>
          <SocialButton
            title="Sat Naing on LinkedIn"
            href="https://www.linkedin.com/in/satnaing/"
          >
            <IconBrandLinkedin />
          </SocialButton>
        </div>
      </footer>
    </>
  );
}
