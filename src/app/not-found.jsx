"use client";

import Link from "next/link";
import { BiHome } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

export default function GlobalNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
            <div className="max-w-xl text-center space-y-8">

                {/* 404 Number */}
                <h1 className="text-7xl font-extrabold tracking-tight bg-linear-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Oops! Page not found.
                </h2>

                {/* Description */}
                <p className="text-neutral-500 dark:text-neutral-400">
                    The page you’re looking for doesn’t exist or has been moved.
                    Let’s get you back to somewhere useful.
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black hover:scale-105 transition-transform duration-200"
                    >
                        <BiHome size={18} />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
                    >
                        <BsArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

            </div>
        </div>
    )
}