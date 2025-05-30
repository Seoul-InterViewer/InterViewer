"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export function useRouterModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    router.back();
    setIsOpen(false);
  }, [router]);

  return { isOpen, open, close };
}
