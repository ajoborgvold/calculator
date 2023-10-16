import { createContext, useState } from "react"

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [showUnitConverter, setShowUnitConverter] = useState(false)

    return (
        <AppContext.Provider
            value={{
                showUnitConverter
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }