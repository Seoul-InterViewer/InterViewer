"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  id: string;
  content: React.ReactNode;
}

export default function Portal({ id, content }: IPortalProps) {
  const [portalContent, setPortalContent] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalContent = document.getElementById(id);
    setPortalContent(portalContent);
  }, [id]);
  if (!portalContent) return null;

  return createPortal(content, portalContent);
}
