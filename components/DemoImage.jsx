"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { dark } from '@clerk/themes';
import { useTheme } from "next-themes"

export default function DemoImage() {
    const { resolvedTheme } = useTheme();
    let currentTheme = resolvedTheme == "dark" ? '/demo.png' : '/demo-light.png';
    return (
        <img className="rounded-lg" src={currentTheme} alt="demo" />
    )
}