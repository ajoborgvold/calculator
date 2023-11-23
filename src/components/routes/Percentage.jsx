import { useEffect } from "react"
import PercentageCalculator from "../library/PercentageCalculator"
import { pctData } from "../../data/pctData"

const Percentage = () => {
    useEffect(() => {
        document.title = "Percentage calculation"
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
        <div className="main-container">
            <h1 className="main-heading">Percentage calculation</h1>
            <section className="calculators-section">
                {pctCalculatorEl}
            </section>
        </div>
    )
}

export default Percentage
