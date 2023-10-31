import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function NotFount() {
    return (
        <section className="m-8">
            <Card className="md:max-w-[80vh] w-full min-h-[50vh] lg:max-h-[95vh] h-full flex flex-col items-center justify-around mx-auto">
                <Image
                    src="/assets/automobile.gif"
                    width={300}
                    height={100}
                    alt="404"
                    className="rounded-full opacity-60"
                />
                <h1 className="text-2xl font-semibold">
                    On a perdu un boulon ?
                </h1>
                <Link href="/" className="cursor-pointer">
                    Revenez au plus vite pour simuler votre taux d&apos;emprunt
                    !
                </Link>
                <Link
                    href="/"
                    className="bg-background-reverse py-2 px-4 rounded-full"
                >
                    Retour
                </Link>
            </Card>
        </section>
    )
}
