import PercentageToNumber from "./PercentageToNumber"
import NumberToPercentage from "./NumberToPercentage"
import ChangeInPercent from "./ChangeInPercent"
import PercentageOfTotal from "./PercentageOfTotal"

const Percentage = () => {
    return (
        <main>
            <PercentageToNumber />
            <hr />
            <NumberToPercentage />
            <hr />
            <ChangeInPercent />
            <hr />
            <PercentageOfTotal />
        </main>
    )
}

export default Percentage