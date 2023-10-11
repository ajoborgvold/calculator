import UnitConvertor from "../library/UnitConverter"

const MilesToKm = () => {
    return (
        <UnitConvertor
            name="milesToKmNum"
            factor="1.609344"
            unitOne="mi"
            unitTwo="km"
            gridClass="grid-item-b"
        />
    )
}

export default MilesToKm