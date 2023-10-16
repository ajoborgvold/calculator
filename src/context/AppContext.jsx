import { createContext, useState } from "react"

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [unitConverterData, setUnitConverterData] = useState([
        {
            name: "volume",
            isRendered: false
        },
        {
            name: "length",
            isRendered: false
        },
        {
            name: "mass",
            isRendered: false
        },
        {
            name: "area",
            isRendered: false
        }
    ])

    function toggle(e) {
        const id = e.target.id

        const newData = unitConverterData.map(converter => {
            const { name, isRendered } = converter

            return id === name ? {...converter, isRendered: !isRendered} : {...converter, isRendered: false}
        })

        setUnitConverterData(newData)
    }

    return (
        <AppContext.Provider
            value={{
                toggle,
                unitConverterData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }