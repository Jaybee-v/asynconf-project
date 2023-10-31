import React from "react"
import { ToggleTheme } from "./ToggleTheme"

export const Header = () => {
    return (
        <header className="z-50 w-fit absolute right-4">
            <ToggleTheme />
        </header>
    )
}
