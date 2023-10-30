"use client"
import React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MdDarkMode } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
export const ToggleTheme = () => {
    const { setTheme, theme } = useTheme()
    return (
        <Button
            onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light")
            }}
        >
            {theme === "light" ? (
                <MdDarkMode size={15} />
            ) : (
                <BsFillSunFill size={15} />
            )}
        </Button>
    )
}
