import UnitConvertor from "../library/UnitConvertor"

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