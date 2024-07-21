
"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, onClick, ...props }) => {
    const router = useRouter();

    const handleTransition = async (e) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("pageTransition");
        await sleep(100);

        if (onClick) {
            onClick(e);
        } else if (href) {
            router.push(href);
        }

        await sleep(400);
        body?.classList.remove("pageTransition");
    }

    return (
        <Link
            href={href || '#'}
            {...props}
            onClick={handleTransition}
        >
            {children}
        </Link>
    )
}
