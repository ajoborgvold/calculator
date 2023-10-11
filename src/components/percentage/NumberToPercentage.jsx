import PercentageCalculator from "../library/PercentageCalculator";

const NumberToPercentage = () => {
    return (
        <PercentageCalculator
            calculationType="numToPct"
            nameOne="numberToPctNumOne"
            nameTwo="numberToPctNumTwo"
            textOne="How many percent is the number"
            textThree="of the number"
            textFour="?"
            unit="%"
        />
    )
}

export default NumberToPercentage