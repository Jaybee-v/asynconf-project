"use client"
import React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MdDarkMode } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
export const ToggleTheme = () => {
    const { setTheme, theme } = useTheme()
    React.useEffect(() => {
        setTheme("light")
    }, [])
    return (
        <section className="w-full flex justify-end z-50 pe-1 pt-1">
            {theme === "light" && (
                <Button className="bg-background-reverse hover:!bg-opacity-60 hover:bg-background-reverse" onClick={() => setTheme("dark")}>
                    <MdDarkMode size={15} color="white" />
                </Button>
            )}
            {theme === "dark" && (
                <Button className="bg-background-reverse hover:!bg-opacity-20 hover:bg-background-reverse" onClick={() => setTheme("light")}>
                    <BsFillSunFill size={15} color="black" />
                </Button>
            )}
        </section>
    )
}
