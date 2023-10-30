import dataEmprunt from "@/data/data-emprunt.json"
const dataTaux = dataEmprunt.taux

export const CalcTaux = (score: number, bonus: number) => {
    console.log({ score, bonus })

    let newScore = 0
    dataTaux.forEach((taux) => {
        if (score >= taux.minScore && score <= taux.maxScore) {
            newScore += taux.percent
        }
    })
    console.log(newScore)

    switch (bonus > 0) {
        case true:
            return newScore + bonus
        case false:
            return newScore + bonus
    }
}
