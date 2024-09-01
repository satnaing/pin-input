import { Button } from "./button";

interface Props {
  children: React.ReactNode;
  href: string;
  title: string;
}

const SocialButton = ({ title, children, href }: Props) => {
  return (
    <Button variant="ghost" size="icon" className="hover:rotate-6" asChild>
      <a href={href}>
        {children}
        <span className="sr-only">{title}</span>
      </a>
    </Button>
  );
};

export { SocialButton };
