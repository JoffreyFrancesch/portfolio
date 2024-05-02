"use client";

import { useEffect, useState } from "react";

export default function Hello() {
    const HELLO_TEXT = ["hello", "bonjour", "bonghjornu", "こんにちは"]
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            if (counter + 1 === HELLO_TEXT.length) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }, 1500);
    }, [counter])

    return (
        <h1 className="text-2xl font-semibold tracking-tighter">
            {HELLO_TEXT[counter]}, I'm Joffrey 👋
        </h1>
    )
}