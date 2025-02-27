import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="md:text-3xl sm:text-2xl font-bold text-amber-900">Juessel Original</span>
                    <span className="md:text-2xl font-light text-black">Mushroom Powder</span>
                </div>

                {/* Navigation Links */}
                <div
                    ref={menuRef}
                    className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center absolute md:static top-20 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 md:ml-auto text-center">
                        {["home", "product", "about-innovator", "contact-us"].map((section, index) => (
                            <Link
                                key={index}
                                to={section}
                                smooth={true}
                                duration={800}
                                className="cursor-pointer block md:inline py-2 md:py-0 text-center md:text-left font-semibold text-black hover:text-amber-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {section.replace("-", " ").replace(/\b\w/g, char => char.toUpperCase())}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <button
                            onClick={() => window.location.href = "https://paystack.shop/juessel-original-mushroom-powder"}
                            className="cursor-pointer bg-amber-900 text-white px-4 py-2 rounded-md text-base md:text-lg font-medium w-full md:w-auto hover:bg-amber-800">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden text-black z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
