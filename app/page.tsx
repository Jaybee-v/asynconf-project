import { StepWrapper } from "@/components/App/StepWrapper"
import { Header } from "@/components/Header"
import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <main className="flex min-h-screen h-full flex-col items-center gap-4 md:px-4 md:py-6 relative w-full">
            <div className="w-screen h-72 object-none absolute top-0 z-10 hidden md:block">
                <Image
                    src="/assets/forest-min.jpg"
                    fill
                    priority
                    alt="Représentation d'une forêt"
                    className="object-cover"
                />
            </div>
            <Header />
            <StepWrapper />
        </main>
    )
}
