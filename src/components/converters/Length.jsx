import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Length = () => {
    const unitConverterEl = unitData.lengthData.map(item => {
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

export default Length