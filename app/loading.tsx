import { Spinner } from "@/components/Spinner"
import React from "react"

export default function Loading() {
    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <Spinner />
        </section>
    )
}
