'use client';

import { locales } from "@/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getPathnameWithoutLocale(pathname: string, locale: string) {
    return pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
}

export default function LanguageSwitcher() {
    const pathname = usePathname();

    return <div>{
        locales.map((locale) => (
            <Link key={locale} href={`${getPathnameWithoutLocale(pathname, locale)}`} className="px-2 py-1 rounded text-sm">
                {locale.toUpperCase()}
            </Link>
        ))
    }</div>;
}