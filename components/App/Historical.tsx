import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { FaHistory } from "react-icons/fa"
import { Historical as HistoricalType } from "@/models/historical"

interface HistoricalProps {
    name?: string
    familyName?: string
    email?: string
    userHistorical?: HistoricalType[]
}

export const Historical: React.FC<HistoricalProps> = ({
    name,
    familyName,
    email,
    userHistorical,
}) => {
    return (
        <section className="absolute top-1/2 left-4 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="bg-background-reverse text-background hover:bg-primary">
                        <FaHistory size={20} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        Mon historique de simulation
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {userHistorical?.map((item) => (
                            <DropdownMenuItem key={item.id}>
                                {item.type.name +
                                    " / " +
                                    item.energy.label +
                                    " / " +
                                    item.year.min +
                                    " - " +
                                    item.year.max}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}
