import UnitConvertor from "../library/UnitConvertor"

const MilesToKm = () => {
    return (
        <UnitConvertor
            name="milesToKmNum"
            factor="1.609344"
            text="mi ="
            unit="km"
            gridClass="grid-item-b"
        />
    )
}

export default MilesToKm