import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Volume = () => {
    const unitConverterEl = unitData.volumeData.map(item => {
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

export default Volume