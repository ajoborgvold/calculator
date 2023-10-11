import UnitConvertor from "../library/UnitConverter";

const KmToMiles = () => {
    return (
        <UnitConvertor
            name="kmToMilesNum"
            factor="0.621371192"
            unitOne="km"
            unitTwo="mi"
            gridClass="grid-item-a"
        />
    )
}

export default KmToMiles