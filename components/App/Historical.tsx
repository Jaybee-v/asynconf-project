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
    userHistorical?: HistoricalType[]
}

export const Historical: React.FC<HistoricalProps> = ({ userHistorical }) => {
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
                        Mes 5 dernières simulations
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {userHistorical?.map((item) => (
                            <DropdownMenuItem key={item.id}>
                                {item.year.max ? (
                                    <>
                                        {item.type.name +
                                            " / " +
                                            item.energy.label +
                                            " / " +
                                            item.year.min +
                                            " - " +
                                            item.year.max}
                                    </>
                                ) : (
                                    <>
                                        {item.type.name +
                                            " / " +
                                            item.energy.label +
                                            " / " +
                                            "après " +
                                            item.year.min}
                                    </>
                                )}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}
