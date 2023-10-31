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
            <FaInfo size={12} className="text-blue-800 me-2" />
            Besoin d&apos;aide ?
            {show && (
                <Dialog open={show} onOpenChange={setShow}>
                    <CardHeader>Vous avez besoin d&apos;aide ?</CardHeader>
                    <DialogContent className=" min-w-[50%] max-w-[90%] max-h-[90%] overflow-y-auto w-full grid md:grid-cols-2 rounded-lg">
                        <div>
                            <Label>
                                Pourquoi connaître le type du véhicule ?
                            </Label>
                            <p>
                                La caractérisation d&apos;un type de véhicule
                                consiste à définir ses attributs distinctifs,
                                comme la taille, la forme, le nombre de portes,
                                la capacité de passagers, et l&apos;utilisation
                                prévue. Ces caractéristiques permettent de
                                catégoriser efficacement les véhicules en
                                fonction de leurs propriétés intrinsèques,
                                facilitant ainsi leur classification et leur
                                compréhension par les consommateurs et
                                l&apos;industrie automobile.
                            </p>
                        </div>
                        <div>
                            <Label>
                                Pourquoi connaître le carburant consommé
                            </Label>
                            <p>
                                Votre choix de carburant influe sur votre taux
                                d&apos;emprunt. Parmi les options telles que
                                l&apos;essence, le diesel et l&apos;électrique,
                                chacune a des avantages et des coûts différents.
                                Sélectionnez le carburant correspondant à votre
                                véhicule pour comprendre son impact sur votre
                                taux d&apos;emprunt et votre budget.
                            </p>
                        </div>
                        <div>
                            <Label>
                                Pourquoi connaître la date de mise en
                                circulation du véhicule
                            </Label>
                            <p>
                                La date de mise en circulation de votre véhicule
                                joue un rôle essentiel dans votre taux
                                d&apos;emprunt. Les véhicules plus anciens
                                peuvent avoir des taux différents de ceux
                                récents. Lorsque vous entrez cette information,
                                gardez à l&apos;esprit que la date de mise en
                                circulation peut influencer votre taux
                                d&apos;emprunt et le coût total de votre prêt.
                            </p>
                        </div>
                        <div>
                            <Label>
                                Pourquoi connaître la distance parcourue
                                annuelle estimée
                            </Label>
                            <p>
                                L&apos;estimation de la distance parcourue
                                annuellement par votre véhicule est cruciale
                                pour calculer votre taux d&apos;emprunt. Plus
                                vous conduisez, plus le coût peut varier.
                                Lorsque vous indiquez cette estimation, gardez à
                                l&apos;esprit son impact sur votre taux
                                d&apos;emprunt et sur vos dépenses liées à
                                l&apos;emprunt.
                            </p>
                        </div>
                        <div>
                            <Label>
                                Pourquoi connaître le nombre de passages ?
                            </Label>
                            <p>
                                Le nombre de passagers dans votre véhicule est
                                un facteur clé dans le calcul de votre taux
                                d&apos;emprunt. Plus le véhicule peut
                                transporter de passagers, plus cela peut
                                influencer les coûts. Lorsque vous indiquez ce
                                nombre, gardez à l&apos;esprit son impact sur
                                votre taux d&apos;emprunt et sur la capacité de
                                votre véhicule à répondre à vos besoins de
                                transport.
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </Button>
    )
}
