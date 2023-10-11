import PercentageCalculator from "../library/PercentageCalculator"

const PercentageToNumber = () => {
    return (
        <PercentageCalculator
            calculationType="pctToNum"
            nameOne="pctToNumberNumOne"
            nameTwo="pctToNumberNumTwo"
            textOne="How much is"
            textTwo="%"
            textThree="of the number"
            textFour="?"
        />
    )
}

export default PercentageToNumber