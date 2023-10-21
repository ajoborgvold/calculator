import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Area = () => {
    const unitConverterEl = unitData.areaData.map(item => {
        return (
            <UnitConverter
                key={item.name}
                {...item}
            />
        )
    })

    return (
        <>{unitConverterEl}</>
    )
}

export default Area