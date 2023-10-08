import PercentageToNumber from "./PercentageToNumber"
import NumberToPercentage from "./NumberToPercentage"
import ChangeInPercent from "./ChangeInPercent"
import PercentageOfTotal from "./PercentageOfTotal"

const Percentage = () => {
    return (
        <section className="calculators-container">
            <PercentageToNumber />
            <NumberToPercentage />
            <ChangeInPercent />
            <PercentageOfTotal />
        </section>
    )
}

export default Percentage