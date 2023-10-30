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
        <>
            {theme === "light" && (
                <Button onClick={() => setTheme("dark")}>
                    <MdDarkMode size={15} />
                </Button>
            )}
            {theme === "dark" && (
                <Button onClick={() => setTheme("light")}>
                    <BsFillSunFill size={15} />
                </Button>
            )}
        </>
    )
}
