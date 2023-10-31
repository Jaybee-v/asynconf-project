import React from "react"
import { FaInfo } from "react-icons/fa"
import { Dialog, DialogContent } from "../ui/dialog"
import { CardHeader } from "../ui/card"
import { Button } from "../ui/button"

export const Infos: React.FC = () => {
    const [show, setShow] = React.useState(false)
    return (
        
            <Button
                variant={"outline"}
                className="w-fit mb-4 ms-4"
                onClick={() => setShow(!show)}
            >
                <FaInfo
                    size={12}
                    className="text-background-reverse group-hover:text-primary"
                    />
                    Besoin d&apos;aide ?
                

                {show && (
                    <Dialog open={show} onOpenChange={setShow}>
                        <CardHeader>
                            Vous avez besoin d&apos;aide ?
                        </CardHeader>
                        <DialogContent className="min-w-[60%] w-full"></DialogContent>
                    </Dialog>
                )}
            </Button>
        
    )
}
