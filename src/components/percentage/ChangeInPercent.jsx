import PercentageCalculator from "../library/PercentageCalculator";

const ChangeInPercent = () => {
    return (
        <PercentageCalculator
            calculationType="changeInPct"
            nameOne="changeInPctNumOne"
            nameTwo="changeInPctNumTwo"
            textOne="How much is a change from the number"
            textThree="to the number"
            textFour="in percent?"
            unit="%"
        />
    )
}

export default ChangeInPercent
