import { useEffect } from "react"
import PercentageToNumber from "../percentage/PercentageToNumber"
import NumberToPercentage from "../percentage/NumberToPercentage"
import ChangeInPercent from "../percentage/ChangeInPercent"
import PercentageOfTotal from "../percentage/PercentageOfTotal"

const Percentage = ({setIsMenuOpen}) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <div className="main-container pct-calculators-container">
            {/* <h1 className="main-heading">Percentage calculation</h1> */}
            <div className="flex-container">
                <h2 className="sub-heading">Convert a number to a percentage</h2>
                <div className="flex__sub-container">
                    <NumberToPercentage />
                    <ChangeInPercent />
                </div>
            </div>
            <div className="flex-container">
                <h2 className="sub-heading">Convert a percentage to a number</h2>
                <div className="flex__sub-container">
                    <PercentageToNumber />
                    <PercentageOfTotal />
                </div>
            </div>
        </div>
    )
}

export default Percentage