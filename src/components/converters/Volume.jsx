import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Volume = () => {
    const unitConverterEl = unitData.volumeData.map(item => {
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

export default Volume