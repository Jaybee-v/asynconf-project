import React from "react"
import { CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"

interface CardHeaderProps {
    title?: string
    description?: string
}

export const StepHeader: React.FC<CardHeaderProps> = ({ title, description }) => {
    return (
        <CardHeader className="w-[90%] mx-auto flex flex-col items-center justify-center border-b px-6 border-primary mb-8">
            <Image
                src="/assets/logo.png"
                width={400}
                height={200}
                alt="Logo de l'entreprise GREEN BANK"
            />
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription className="w-[70%] mx-auto mb-8 text-text p-4 text-lg text-center">{description}</CardDescription>}
        </CardHeader>
    )
}
