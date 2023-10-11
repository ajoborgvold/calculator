import UnitConvertor from "../library/UnitConvertor"

const YardToMetre = () => {
    return (
        <UnitConvertor
            name="yardToMetreNum"
            factor="0.9144"
            unitOne="yd"
            unitTwo="m"
            gridClass="grid-item-b"
        />
    )
}

export default YardToMetre