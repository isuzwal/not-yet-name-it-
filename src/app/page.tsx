"use client";

import { Navbara } from "@/components/ui/navbara-view";
import { Section } from "@/components/ui/section-view";

import { useEffect, useState } from "react";

export default function Home() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`w-full fixed z-50 p-2 bg-white  ${
          showShadow ? " shadow" : " "
        } `}
      >
        <Navbara />
      </div>
      <Section>Hello</Section>
    </div>
  );
}
