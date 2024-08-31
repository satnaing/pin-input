import { IconGitFork, IconStar } from "@tabler/icons-react";
import { Button } from "./components/ui/button";
import ThemeSwitch from "./components/theme-switch";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto pt-20">
      <div className="space-y-1">
        <h1 className="font-bold text-2xl text-center">Pin Input</h1>
        <p className="text-muted-foreground text-center text-lg leading-tight">
          A modular, style-agnostic PinInput component, ready to use <br /> with
          just a copy-paste—no extra libraries needed.
        </p>
      </div>
      <div className="space-x-4 mt-4 text-center">
        <Button variant="outline" leftSection={<IconGitFork size={20} />}>
          Fork
        </Button>
        <Button leftSection={<IconStar size={18} />}>GitHub</Button>
        <ThemeSwitch />
      </div>
    </main>
  );
}
