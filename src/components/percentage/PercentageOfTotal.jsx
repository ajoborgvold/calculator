import PercentageCalculator from "../library/PercentageCalculator";

const PercentageOfTotal = () => {
    return (
        <PercentageCalculator
            calculationType="pctOfTotal"
            nameOne="fromPctToTotalNumOne"
            nameTwo="fromPctToTotalNumTwo"
            textOne="What is the total sum when"
            textTwo="%"
            textThree="is equal to the number"
            textFour="?"
        />
    )
}

export default PercentageOfTotal