// FlipCard.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontTitle: string;
  frontText: string;
  backTitle: string;
  backText: string;
}

export const FlipCard = ({ frontTitle, frontText, backTitle, backText }: FlipCardProps) => {
  return (
    <div className="w-full sm:w-1/2 px-4 mb-8 group perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl border p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-3">{frontTitle}</h3>
          <p className="text-muted-foreground leading-relaxed">{frontText}</p>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl border p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-3">{backTitle}</h3>
          <p className="text-muted-foreground leading-relaxed">{backText}</p>
        </div>
      </div>
    </div>
  );
};
