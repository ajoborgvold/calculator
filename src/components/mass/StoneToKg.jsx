import UnitConvertor from "../library/UnitConvertor"

const StoneToKg = () => {
    return (
        <UnitConvertor
            name="stoneToKgNum"
            factor="6.35029318"
            unitOne="st"
            unitTwo="kg"
            gridClass="grid-item-b"
        />
    )
}

export default StoneToKg