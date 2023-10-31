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
