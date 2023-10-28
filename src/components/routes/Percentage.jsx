import { useEffect } from "react"
import PercentageCalculator from "../library/PercentageCalculator"

import { pctData } from "../../data/pctData"

const Percentage = ({ setIsMenuOpen }) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    const pctCalculatorEl = pctData.map(calculator => {
        return (
            <PercentageCalculator
                key={calculator.type}
                {...calculator}
            />
        )
    })

    return (
        <div className="main-container pct-calculators-container">
            <h1 className="main-heading">Percentage calculation</h1>
            <section className="calculators-section">
                {pctCalculatorEl}
            </section>
        </div>
    )
}

export default Percentage
