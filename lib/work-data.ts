import HistoricalFileData from "@/data/data-historical.json"

export const setSearch = (search: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("data-search", JSON.stringify(search))
    }
}

export const getSearch = () => {
    if (typeof window !== "undefined") {
        const search = localStorage.getItem("data-search")
        return search ? JSON.parse(search) : null
    }
    return null
}

// const historicalPath = path.join(process.cwd(), "data", "data-historical.json")

// export const saveHistorical = async (historical: any) => {
//     try {
//         const HistoricalData = await fs.readFile(historicalPath, "utf-8")
//         const historicalJson = JSON.parse(HistoricalData)
//         const data = HistoricalFileData.historical

//         const newHistorical = {
//             id: data.length + 1,
//             userName: historical.name,
//             userFamilyName: historical.familyName,
//             userEmail: historical.email,
//             bonus: historical.bonus,
//             energy: historical.energy,
//             mileage: historical.mileage,
//             taux: historical.taux,
//             type: historical.type,
//             year: historical.year,
//         }
//         historicalJson.push(newHistorical)
//         await fs.writeFile(
//             historicalPath,
//             JSON.stringify(historicalJson, null, 2)
//         )
//     } catch (err) {
//         console.log("Une erreur s'est produite: ", err)
//     }
// }
