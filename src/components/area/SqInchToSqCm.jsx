import raiseLastCharacter from "../../utils/raiseLastCharacter"
import UnitConverter from "../library/UnitConverter"

const SqInchToSqCm = () => {
    const formattedUnit = raiseLastCharacter("cm2")

    return (
        <UnitConverter
            name="sqInchToSqCmNum"
            factor="0.15500031"
            unitOne="sq in"
            unitTwo={formattedUnit}
            gridClass="grid-item-a"
        />
    )
}

export default SqInchToSqCm