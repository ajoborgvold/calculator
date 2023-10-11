import UnitConvertor from "../library/UnitConvertor";

const KmToMiles = () => {
    return (
        <UnitConvertor
            name="kmToMilesNum"
            factor="0.621371192"
            text="km ="
            unit="mi"
            gridClass="grid-item-a"
        />
    )
}

export default KmToMiles