import raiseLastCharacter from "../../utils/raiseLastCharacter"
import UnitConverter from "../library/UnitConverter"

const SqCmToSqInch = () => {
    const formattedUnit = raiseLastCharacter("cm2")

    return (
        <UnitConverter
            name="sqCmToSqInchNum"
            factor="0.15500031"
            unitOne={formattedUnit}
            unitTwo="sq in"
            gridClass="grid-item-a"
        />
    )
}

export default SqCmToSqInch