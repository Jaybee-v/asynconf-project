import { Historical } from "@/components/App/Historical"
import { StepWrapper } from "@/components/App/StepWrapper"
import { Header } from "@/components/Header"
import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 md:p-4 relative w-screen">
            <div className="w-screen h-72 object-none absolute top-0 z-10">
                <Image
                    src="/assets/forest-min.jpg"
                    fill
                    priority
                    alt="Représentation d'une forêt"
                    className="object-none w-screen max-h-72 h-full"
                />
            </div>
            <Header />
            <StepWrapper />
        </main>
    )
}
