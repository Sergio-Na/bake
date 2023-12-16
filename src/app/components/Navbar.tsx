"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/cake_logo.png";
import toggle from "../../../public/cake_hamburger_menu_toggle.svg"
import xToggle from "../../../public/x_toggle.svg"
import { useState } from "react";

const links = [
    { name: "About us", href: "/about-us" },
    { name: "Our Cakes", href: "/our-cakes" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [hamburgerToggle, setHamburgerToggle] = useState(false);

    return (
        <header className="mb-8  bg-special">
            <div className="flex items-center justify-between mx-auto px-6 py-3 sm:px-6 sm:py-4 md:px-4 md:py-2 lg:max-w-5xl xl:max-w-7xl">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            className="h-12 w-auto sm:h-24"
                            priority
                            objectFit="contain"
                        />
                        <h1 className="text-xl md:text-3xl font-bold ml-3">
                            <span className="text-primary">Cakes</span>
                        </h1>
                    </Link>

                </div>

                <nav className="hidden md:flex gap-8 lg:gap-12">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-md md:text-lg font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-md md:text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setHamburgerToggle(true)}>
                        <Image
                            src={toggle}
                            alt="hamburger toggle" />
                    </button>
                </div>
                {/* Mobile Navigation */}
                <div className={`${hamburgerToggle ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} fixed inset-0 z-50 bg-white md:hidden transition-transform duration-200 ease-in-out`}>
                    {/* Close Button */}
                    <div className="flex justify-end pt-9 pr-7">
                        <button onClick={() => setHamburgerToggle(false)}>
                            <Image
                                src={xToggle}
                                alt="close menu"
                                width={17}
                                height={17} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        {links.map((link, idx) => (
                            <div key={idx} className="mb-4">
                                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" onClick={() => setHamburgerToggle(false)}>
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
