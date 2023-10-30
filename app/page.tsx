import { StepWrapper } from "@/components/App/StepWrapper"
import { Welcome } from "@/components/App/Welcome"
import { ToggleTheme } from "@/components/ToggleTheme"
import React from "react"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-evenly md:p-10">
            <ToggleTheme />
            <StepWrapper />
        </main>
    )
}
