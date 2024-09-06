import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconDeviceLaptop,
  IconGitFork,
  IconHeart,
  IconStar,
} from "@tabler/icons-react";
import {
  pinInputShadcn,
  pinInputRaw,
  controlledPinInput,
  uncontrolledPinInput,
  reactHookFormPinInput,
} from "@/assets/snippets";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import ThemeSwitch from "@/components/theme-switch";
import { PinInputForm } from "@/components/pin-input-form";
import SnippetAccordionItem from "@/components/snippet-accordion-item";
import { SocialButton } from "./components/ui/social-button";

export default function App() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 pt-16 sm:pt-20 pb-10">
        <div className="space-y-1">
          <h1 className="font-bold text-xl md:text-2xl text-center">
            Pin Input
          </h1>
          <p className="text-muted-foreground text-center text-base md:text-lg leading-tight">
            A modular, style-agnostic PinInput component for React,{" "}
            <br className="hidden sm:block" />
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

        <section className="flex flex-col sm:grid grid-cols-12 grid-rows-6 gap-4 mt-8">
          {/* Pin Input */}
          <div className="bg-card p-4 rounded-md shadow-sm col-span-8 md:col-span-7 row-span-3 md:row-span-4 space-y-2 sm:space-y-1 md:space-y-2">
            <h2 className="font-medium text-lg md:mb-1">
              Two-factor Authentication
            </h2>
            <p className="text-muted-foreground leading-tight md:leading-normal">
              Please enter the authentication code. <br />
              We have sent the authentication code to your email.
            </p>
            <PinInputForm />
          </div>

          {/* Get Started */}
          <div className="bg-card p-4 rounded-md shadow-sm col-span-6 md:col-span-5 row-span-3">
            <h2 className="font-medium text-lg mb-1">Get Started</h2>
            <ol className="list-decimal pl-4 font-light">
              <li>
                <strong>Copy & paste</strong>{" "}
                <code className="inline-code">pin-input.tsx</code> into your
                project.
              </li>
              <li>
                <strong>Use the component</strong> as needed, referring to the
                usage section for guidance.
              </li>
            </ol>
          </div>

          {/* Features */}
          <div className="bg-card p-4 rounded-md shadow-sm col-span-6 md:col-span-5 row-span-3">
            <h2 className="font-medium text-lg mb-1">Features</h2>
            <ul className="list-disc pl-4 font-light">
              <li>No additional library required.</li>
              <li>Supports both controlled and uncontrolled components.</li>
              <li>Compatible with form libraries.</li>
              <li>Simple & Accessible</li>
            </ul>
          </div>

          {/* Note */}
          <div className="bg-card p-4 rounded-md shadow-sm col-start-9 sm:row-start-1 md:col-start-1 col-span-4 md:col-span-7 row-span-3 md:row-span-2">
            <h2 className="font-medium text-lg mb-1">Note</h2>
            <p className="text-sm text-muted-foreground">
              You don't need to install a component or CSS library, but you can
              use one to enhance and customize the component.
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

          {/* Usage */}
          <div className="bg-card p-4 rounded-md shadow-sm col-span-12">
            <h2 className="font-medium text-lg">Usage</h2>
            <div className="mt-2 divide-y">
              <Accordion type="single" collapsible>
                <SnippetAccordionItem
                  id="usage-1"
                  title="Controlled PinInput"
                  snippet={controlledPinInput}
                />
                <SnippetAccordionItem
                  id="usage-2"
                  title="Uncontrolled PinInput"
                  snippet={uncontrolledPinInput}
                />
                <SnippetAccordionItem
                  id="usage-3"
                  title="Form Library"
                  titleDesc="React Hook Form with Zod"
                  snippet={reactHookFormPinInput}
                />
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto px-4 flex flex-col justify-center items-center py-2">
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
