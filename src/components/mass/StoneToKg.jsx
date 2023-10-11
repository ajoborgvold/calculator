import UnitConvertor from "../library/UnitConvertor"

const StoneToKg = () => {
    return (
        <UnitConvertor
            name="stoneToKgNum"
            factor="6.35029318"
            text="st ="
            unit="kg"
            gridClass="grid-item-b"
        />
    )
}

export default StoneToKg