import UnitConvertor from "../library/UnitConvertor"

const YardToMetre = () => {
    return (
        <UnitConvertor
            name="yardToMetreNum"
            factor="0.9144"
            text="yd ="
            unit="m"
            gridClass="grid-item-b"
        />
    )
}

export default YardToMetre