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
        <header className="mb-8 border-b bg-special">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">

                        <Image
                            src={logo}
                            alt="logo"
                            className="h-24 w-auto"
                            priority
                            objectFit="cover"
                            objectPosition="center"
                        />

                    </Link>
                    <h1 className="text-xl md:text-4xl font-bold ml-3">
                        <span className="text-primary">Cakes</span>
                    </h1>
                </div>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-lg font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="md:hidden hover:opacity-50">
                    <button onClick={() => setHamburgerToggle(true)}>
                        <Image
                            src={toggle}
                            alt="hamburger toggle" />
                    </button>
                </div>
                {/* Mobile Navigation */}
                <div className={`${hamburgerToggle ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} absolute top-0 right-0 w-full h-full bg-white md:hidden transition-transform duration-200 ease-in-out`}>
                    {/* Close Button */}
                    <div className="flex justify-end p-9">
                        <button onClick={() => setHamburgerToggle(false)}>
                            <Image
                                src={xToggle}
                                alt="close menu"
                                width={20}
                                height={20} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        {links.map((link, idx) => (
                            <div key={idx} className="mb-4">
                                <button className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" onClick={() => setHamburgerToggle(false)}>
                                    <a href={link.href}>
                                        {link.name}
                                    </a>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
