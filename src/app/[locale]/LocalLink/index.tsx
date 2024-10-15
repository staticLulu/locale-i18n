import { locales } from "@/config";
import { Link } from "@/navigation";
import { ReactNode } from "react";


type Props = {
  locale: (typeof locales)[number];
  className?: string;
  children: ReactNode;
};

export const LocalLink = ({ locale, className, children }: Props) => {
  return (
    <Link href='/' locale={locale} className={className}>
      {children}
    </Link>
  );
};
