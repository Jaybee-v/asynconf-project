import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

const historicalPath = path.join(process.cwd(), "data", "data-historical.json")

export async function POST(req: Request) {
    const json = await req.json()
    try {
        console.log(json)

        let historical = []

        if (historicalPath) {
            const historicalData = await fs.readFile(historicalPath, "utf-8")
            historical = JSON.parse(historicalData).historical
        }
        historical = historical.concat(json)
        console.log(historical)

        await fs.writeFile(
            historicalPath,
            JSON.stringify({ historical }, null, 2)
        )
        return new NextResponse(
            JSON.stringify({
                message: "Nouvelles données enregistrées avec succès",
            })
        )
    } catch (error: any) {
        console.log(error.message)
        return new NextResponse(error.message, { status: 500 })
    }
}
