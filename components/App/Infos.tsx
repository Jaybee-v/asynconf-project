import React from "react"
import { FaInfo } from "react-icons/fa"
import { Card, CardHeader } from "../ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog"
import { StepHeader } from "./StepHeader"

export const Infos: React.FC = () => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div
                className="absolute top-0 -right-5"
                onClick={() => setShow(!show)}
            >
                <FaInfo
                    size={12}
                    className="text-background-reverse group-hover:text-primary"
                />

                {show && (
                    <Dialog open={show} onOpenChange={setShow}>
                        <DialogContent className="min-w-[60%] w-full">
                            <StepHeader title="Vous avez besoin d'explications ?" />
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </>
    )
}
