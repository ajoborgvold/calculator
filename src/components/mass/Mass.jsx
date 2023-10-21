import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Mass = () => {
    const unitConverterEl = unitData.massData.map(item => {
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

export default Mass