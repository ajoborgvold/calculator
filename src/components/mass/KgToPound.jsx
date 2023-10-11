import UnitConvertor from "../library/UnitConvertor"

const KgToPound = () => {
    return (
        <UnitConvertor
            name="kgToPoundNum"
            factor="2.20462262"
            unitOne="kg"
            unitTwo="lb"
            gridClass="grid-item-a"
        />
    )
}

export default KgToPound