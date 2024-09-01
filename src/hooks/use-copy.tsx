import { useState } from "react";

export default function useCopy(delay: number = 1500) {
  const [copied, _setCopied] = useState(false);

  const setCopied = (codes: string) => {
    navigator.clipboard.writeText(codes);
    _setCopied(true);
    setTimeout(() => _setCopied(false), delay);
  };

  return [copied, setCopied] as const;
}
