import PercentageToNumber from "./PercentageToNumber"
import NumberToPercentage from "./NumberToPercentage"
import ChangeInPercent from "./ChangeInPercent"
import PercentageOfTotal from "./PercentageOfTotal"

const Percentage = () => {
    return (
        <section className="calculators-container">
            <h1 className="main-heading">Percentage calculation</h1>
            <h2 className="sub-heading">Convert a number to a percentage</h2>
            <NumberToPercentage />
            <ChangeInPercent />
            <h2 className="sub-heading">Convert a percentage to a number</h2>
            <PercentageToNumber />
            <PercentageOfTotal />
        </section>
    )
}

export default Percentage