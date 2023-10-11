import UnitConvertor from "../library/UnitConvertor"

const PoundToKg = () => {
    return (
        <UnitConvertor
            name="poundToKgNum"
            factor="0.45359237"
            unitOne="lb"
            unitTwo="kg"
            gridClass="grid-item-b"
        />
    )
}

export default PoundToKg