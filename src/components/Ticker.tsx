"use client";

import React from "react";

export default function Ticker() {
    return (
        <div className="w-full bg-brand-50 border-y border-brand-100 py-4 overflow-hidden relative flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center">
                {/* Repeat the text multiple times to ensure it covers the screen width infinitely */}
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="text-brand-700 font-medium text-sm md:text-base mx-8 flex items-center gap-8">
                        Why can't you be the first one .. grab the opportunity..
                        <span className="w-2 h-2 rounded-full bg-brand-400 opacity-50" />
                    </span>
                ))}
            </div>
            {/* Absolute duplicate for seamless looping */}
            <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center">
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="text-brand-700 font-medium text-sm md:text-base mx-8 flex items-center gap-8">
                        Why can't you be the first one .. grab the opportunity..
                        <span className="w-2 h-2 rounded-full bg-brand-400 opacity-50" />
                    </span>
                ))}
            </div>
        </div>
    );
}
