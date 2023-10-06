import PercentageToNumber from "./PercentageToNumber"
import NumberToPercentage from "./NumberToPercentage"
import ChangeInPercent from "./ChangeInPercent"
import PercentageOfTotal from "./PercentageOfTotal"

const Main = () => {
    return (
        <main>
            <h1>This is the main section</h1>
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

export default Main