"use client";

import { useState } from "react";
import { faq } from "@/lib/data";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq">
      {faq.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.q}
            </button>
            <div className="faq-panel">
              <div className="faq-panel__inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
