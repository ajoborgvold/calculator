import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Mass = () => {
    const unitConverterEl = unitData.massData.map(item => {
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

export default Mass