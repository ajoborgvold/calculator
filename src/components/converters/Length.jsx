import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Length = () => {
    const unitConverterEl = unitData.lengthData.map(item => {
        return (
            <UnitConverter
                key={item.name}
                name={item.name}
                factor={item.factor}
                fromUnit={item.fromUnit}
                toUnit={item.toUnit}
            />
        )
    })

    return (
        <>{unitConverterEl}</>
    )
}

export default Length