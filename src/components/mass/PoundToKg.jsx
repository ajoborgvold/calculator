import UnitConvertor from "../library/UnitConvertor"

const PoundToKg = () => {
    return (
        <UnitConvertor
            name="poundToKgNum"
            factor="0.45359237"
            text="lb ="
            unit="kg"
            gridClass="grid-item-b"
        />
    )
}

export default PoundToKg