import UnitConverter from "../library/UnitConverter"

const PoundToKg = () => {
    return (
        <UnitConverter
            name="poundToKgNum"
            factor="0.45359237"
            unitOne="lb"
            unitTwo="kg"
            gridClass="grid-item-b"
        />
    )
}

export default PoundToKg