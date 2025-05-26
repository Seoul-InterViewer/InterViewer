"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IPortalProps } from "./modal.type";

export default function Portal({ id, content }: IPortalProps) {
  const [portalContent, setPortalContent] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalContent = document.getElementById(id);
    setPortalContent(portalContent);
  }, [id]);
  if (!portalContent) return null;

  return createPortal(content, portalContent);
}
