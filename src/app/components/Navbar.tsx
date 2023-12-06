"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/cake_logo.png"
const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/Men" },
    { name: "Our Cakes", href: "/Women" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="mb-8 border-b bg-special">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/" className="flex flex-row justify-between">
                    <Image src={logo} alt="logo" className="h-10 w-auto" />
                    <h1 className="text-xl md:text-4xl font-bold">
                        <span className="text-primary">Cakes</span>
                    </h1>
                </Link>

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

                <div className="flex divide-x border-r sm:border-l">
                    <Button
                        className="flex flex-col sm:h-20 sm:w-20 md:h-24 md:w-24 bg-purple-400"
                    >
                        <span className="hidden text-xs font-semibold text-gray-200 sm:block">
                            Cart
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
}