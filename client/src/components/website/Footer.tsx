import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Headset,
    ArrowRight,
    MailOpen,
} from 'lucide-react';

const footerLinks = [
    {
        title: 'COMPANY',
        links: ['Home', 'About Us', 'Contact Us'],
    },
    {
        title: 'SERVICES',
        links: ['Services', 'Family Care'],
    },
    {
        title: 'EXPLORE',
        links: ['Smart Ring', 'Packages'],
    },
];

const socialIcons = [
    { name: 'Facebook', href: '#', icon: 'f' },
    { name: 'Instagram', href: '#', icon: '◎' },
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'YouTube', href: '#', icon: '▶' },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-40 border-t border-[#333] bg-[#0a0a0a] pt-48 pb-10">

            {/* Newsletter */}
            <div className="absolute left-0 right-0 -top-24 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-gradient-to-r from-[#5301ab] to-[#fd5800] p-8 shadow-2xl md:p-12 lg:flex-row">

                    <div className="flex w-full items-center gap-5 text-white lg:w-1/2">
                        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 sm:flex">
                            <MailOpen className="h-7 w-7" />
                        </div>

                        <div>
                            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                                Stay Updated With ZoroCare
                            </h3>

                            <p className="text-sm font-medium text-white/80 md:text-base">
                                Subscribe to our newsletter for health tips, offers and updates.
                            </p>
                        </div>
                    </div>

                    <form
                        className="flex w-full max-w-lg rounded-full border border-white/20 bg-white/10 p-1.5 lg:w-1/2"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            aria-label="Email address"
                            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/60"
                        />

                        <button
                            type="submit"
                            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#5301ab] transition hover:bg-[#161616] hover:text-white md:px-7"
                        >
                            Subscribe
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Content */}
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

                <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-2 lg:pr-8">
                        <img
                            src="/logo-stright.png"
                            alt="ZoroCare"
                            className="mb-5 h-10 w-auto object-contain md:h-12"
                        />

                        <p className="mb-7 max-w-md text-sm leading-relaxed text-gray-400">
                            ZoroCare is your one-stop healthcare platform for you and your
                            family. Accessible. Affordable. Reliable.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialIcons.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-bold text-gray-400 transition hover:border-[#5301ab] hover:bg-[#5301ab] hover:text-white"
                                >
                                    <span>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-5 text-sm font-bold tracking-wider text-[#fd5800]">
                                {column.title}
                            </h4>

                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-[15px] text-gray-400 transition hover:text-white"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-sm font-bold tracking-wider text-[#fd5800]">
                            CONTACT US
                        </h4>

                        <ul className="space-y-4">

                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#5301ab]" />
                                <a
                                    href="tel:18001234567"
                                    className="transition hover:text-white"
                                >
                                    1800 123 4567
                                </a>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#5301ab]" />
                                <a
                                    href="mailto:care@zorocare.com"
                                    className="transition hover:text-white"
                                >
                                    care@zorocare.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#5301ab]" />
                                <span>Bangalore, India</span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Headset className="mt-0.5 h-5 w-5 shrink-0 text-[#5301ab]" />
                                <span>24/7 Customer Support</span>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#333] pt-7 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} ZoroCare. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;