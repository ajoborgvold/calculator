import UnitConvertor from "../library/UnitConvertor"

const KgToPound = () => {
    return (
        <UnitConvertor
            name="kgToPoundNum"
            factor="2.20462262"
            text="kg ="
            unit="lb"
            gridClass="grid-item-a"
        />
    )
}

export default KgToPound