"use client"
import { DataSearch } from "@/models/data"
import React from "react"
import { Label } from "../ui/label"
import { FaMedal } from "react-icons/fa"
import { MdLightbulb } from "react-icons/md"

interface UpgradeProps {
    data: DataSearch
}

export const Upgrade: React.FC<UpgradeProps> = ({ data }) => {
    console.log("DATA", data)

    return (
        <section className="px-4 md:px-8 py-4 mx-auto flex flex-col h-96 justify-evenly">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {/* {data.type.score > 6 && (
                            <div>
                                <Label>Type de véhicule</Label>
                                <p>{data.type.name}</p>
                            </div>
                        )} */}
                    {data.energy.score > 6 && (
                        <div>
                            <Label className="flex items-center text-primary">
                                <FaMedal size={15} className="me-1" />
                                Energie consommée
                            </Label>
                            <p>{data.energy.label}</p>
                        </div>
                    )}
                    {data.year.score > 5 && data.year.score < 7 && (
                        <div>
                            <Label className="flex items-center text-primary">
                                <FaMedal size={15} className="me-1" />
                                Mise en circulation du véhicule
                            </Label>
                            <p>
                                {" "}
                                {!data.year.max
                                    ? "après " + data.year.min
                                    : data.year.min + " - " + data.year.max}
                            </p>
                        </div>
                    )}
                    {data.year.score >= 7 && (
                        <div>
                            <Label className="flex items-center text-primary">
                                <FaMedal size={15} className="me-1" />
                                Mise en circulation du véhicule
                            </Label>
                            <p>
                                Acheter un véhicule neuf vous permet
                                d&apos;améliorer votre bonus
                            </p>
                        </div>
                    )}
                    {data.mileage.score > 6 && data.bonus < -0.3 && (
                        <div>
                            <Label className="flex items-center text-primary">
                                <FaMedal size={15} className="me-1" />
                                Co-voitureur exemplaire
                            </Label>
                            <p>
                                Félcitations, non seulement vous effectuez des
                                courts trajets annuels, mais vous ne roulez
                                jamais à vide
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {data.type.score < 6 && (
                        <div>
                            <Label className="text-red-500 flex items-center">
                                <MdLightbulb size={15} className="me-1" />
                                Type de véhicule
                            </Label>
                            <p>{data.type.name}</p>
                        </div>
                    )}
                    {data.energy.score < 5 && (
                        <div>
                            <Label className="text-red-500 flex items-center">
                                <MdLightbulb size={15} className="me-1" />
                                Energie consommée
                            </Label>
                            <p>
                                Plutôt que de rouler au {data.energy.label},
                                vous devriez opter pour un véhicule électrique
                                ou hybride
                            </p>
                        </div>
                    )}
                    {data.year.score < 5 && (
                        <div>
                            <Label className="text-red-500 flex items-center">
                                <MdLightbulb size={15} className="me-1" />
                                Mise en circulation du véhicule
                            </Label>
                            <p>Privilégiez des véhicules récents</p>
                        </div>
                    )}
                    {data.mileage.score < 6 && (
                        <div>
                            <Label className="text-red-500 flex items-center">
                                <MdLightbulb size={15} className="me-1" />
                                Kilometrage annuel estimé
                            </Label>
                            <p>
                                {" "}
                                {data.mileage.min} - {data.mileage.max} 000 km /
                                an
                            </p>
                        </div>
                    )}
                    {data.bonus > 0 && (
                        <div>
                            <Label className="text-red-500 flex items-center">
                                <MdLightbulb size={15} className="me-1" />
                                Nombre de passagers
                            </Label>
                            <p>
                                Vous devriez penser à co-voiturer avec votre
                                véhicule.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
