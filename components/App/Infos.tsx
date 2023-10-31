import React from "react"
import { FaInfo } from "react-icons/fa"
import { Dialog, DialogContent } from "../ui/dialog"
import { CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { Label } from "../ui/label"

export const Infos: React.FC = () => {
    const [show, setShow] = React.useState(false)
    return (
        
            <Button
                variant={"outline"}
                className="w-fit mb-4 ms-4 group text-text"
                onClick={() => setShow(!show)}
            >
                <FaInfo
                    size={12}
                    className="text-blue-800 me-2"
                    />
                    Besoin d&apos;aide ?
                

                {show && (
                    <Dialog open={show} onOpenChange={setShow}>
                        <CardHeader>
                            Vous avez besoin d&apos;aide ?
                        </CardHeader>
                        <DialogContent className="min-w-[60%] w-full">
                            <div>
                                <Label>Type de véhicule</Label>
                                <p>La caractérisation d&apos;un type de véhicule consiste à définir ses attributs distinctifs, comme la taille, la forme, le nombre de portes, la capacité de passagers, et l&apos;utilisation prévue. Ces caractéristiques permettent de catégoriser efficacement les véhicules en fonction de leurs propriétés intrinsèques, facilitant ainsi leur classification et leur compréhension par les consommateurs et l&apos;industrie automobile.</p>
                            </div>
                            <div>
                                <Label>Carburant consommé</Label>
                                <p>La caractérisation d&apos;un type de véhicule consiste à définir ses attributs distinctifs, comme la taille, la forme, le nombre de portes, la capacité de passagers, et l&apos;utilisation prévue. Ces caractéristiques permettent de catégoriser efficacement les véhicules en fonction de leurs propriétés intrinsèques, facilitant ainsi leur classification et leur compréhension par les consommateurs et l&apos;industrie automobile.</p>
                            </div>
                            <div>
                                <Label>Mise en circulation du véhicule</Label>
                                <p>La caractérisation d&apos;un type de véhicule consiste à définir ses attributs distinctifs, comme la taille, la forme, le nombre de portes, la capacité de passagers, et l&apos;utilisation prévue. Ces caractéristiques permettent de catégoriser efficacement les véhicules en fonction de leurs propriétés intrinsèques, facilitant ainsi leur classification et leur compréhension par les consommateurs et l&apos;industrie automobile.</p>
                            </div>
                            <div>
                                <Label>Type de véhicule</Label>
                                <p>La caractérisation d&apos;un type de véhicule consiste à définir ses attributs distinctifs, comme la taille, la forme, le nombre de portes, la capacité de passagers, et l&apos;utilisation prévue. Ces caractéristiques permettent de catégoriser efficacement les véhicules en fonction de leurs propriétés intrinsèques, facilitant ainsi leur classification et leur compréhension par les consommateurs et l&apos;industrie automobile.</p>
                            </div>
                            <div>
                                <Label>Type de véhicule</Label>
                                <p>La caractérisation d&apos;un type de véhicule consiste à définir ses attributs distinctifs, comme la taille, la forme, le nombre de portes, la capacité de passagers, et l&apos;utilisation prévue. Ces caractéristiques permettent de catégoriser efficacement les véhicules en fonction de leurs propriétés intrinsèques, facilitant ainsi leur classification et leur compréhension par les consommateurs et l&apos;industrie automobile.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </Button>
        
    )
}
