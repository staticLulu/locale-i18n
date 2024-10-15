"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LocalLink } from "./LocalLink";
import { locales } from "@/config";
import Link from "next/link";

type LocaleItem = "en" | "km";

export const Header = () => {
  const [selected, setSelected] = useState<LocaleItem | undefined>(undefined);
  const pathname = usePathname();

  const localePath = pathname.split("/")[1] as LocaleItem;

  const handleChangeLocale = (item: LocaleItem) => {
    setSelected(item); // Update the selected locale
  };

  useEffect(() => {
    // Set selected locale based on the current path
    if (locales.includes(localePath)) {
      setSelected(localePath);
    }
  }, [localePath]);

  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto p-6">
      <Link href={"/"} rel="preload" className="text-2xl lg:text-4xl font-bold">Tech Shop</Link>

      <ul className="flex items-center">
        {locales.map((locale, i) => (
          <button
            key={i}
            onClick={() => handleChangeLocale(locale as LocaleItem)}
            className={`border-l border-t border-b last:border-r p-2 transition-colors ${
              selected === locale ? "bg-[#79AC78] text-white" : "bg-white text-black"
            }`}
          >
            <LocalLink
              locale={locale}
              className="flex items-center gap-2"
            >
              <Image
                src={`/${locale}.png`}
                alt={`${locale} flag`}
                height={30}
                width={30}
                className="w-[30px] h-auto"
                unoptimized
              />
              <h4 className="uppercase text-sm">{locale}</h4>
            </LocalLink>
          </button>
        ))}
      </ul>
    </div>
  );
};
