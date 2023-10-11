import UnitConvertor from "../library/UnitConverter"

const FeetToCm = () => {
    return (
        <UnitConvertor
            name="feetToCmNum"
            factor="30.48"
            unitOne="ft"
            unitTwo="cm"
            gridClass="grid-item-b"
        />
    )
}

export default FeetToCm