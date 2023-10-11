import UnitConvertor from "../library/UnitConvertor"

const YardToMeter = () => {
    return (
        <UnitConvertor
            name="yardToMeterNum"
            factor="0.9144"
            text="yd ="
            unit="m"
            gridClass="grid-item-b"
        />
    )
}

export default YardToMeter