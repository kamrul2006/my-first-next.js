"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 drop-shadow-xl shadow-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    BaBu
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Nav Links */}
                <ul
                    className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform ${isOpen ? "block" : "hidden"
                        } md:flex`}
                >
                    <li>
                        <Link href="/" className="block py-2 px-4 hover:text-gray-400">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/Posts" className="block py-2 px-4 hover:text-gray-400">
                            All Posts
                        </Link>
                    </li>

                    <li>
                        <Link href="/About" className="block py-2 px-4 hover:text-gray-400">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/Services" className="block py-2 px-4 hover:text-gray-400">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className="block py-2 px-4 hover:text-gray-400">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
