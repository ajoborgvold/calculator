import UnitConverter from "../library/UnitConverter"

const StoneToKg = () => {
    return (
        <UnitConverter
            name="stoneToKgNum"
            factor="6.35029318"
            unitOne="st"
            unitTwo="kg"
            gridClass="grid-item-b"
        />
    )
}

export default StoneToKg