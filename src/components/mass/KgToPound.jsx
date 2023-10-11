import UnitConverter from "../library/UnitConverter"

const KgToPound = () => {
    return (
        <UnitConverter
            name="kgToPoundNum"
            factor="2.20462262"
            unitOne="kg"
            unitTwo="lb"
            gridClass="grid-item-a"
        />
    )
}

export default KgToPound