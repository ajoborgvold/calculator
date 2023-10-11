import UnitConvertor from "../library/UnitConvertor"

const InchToCm = () => {
    return (
        <UnitConvertor
            name="inchToCmNum"
            factor="2.54"
            unitOne="in"
            unitTwo="cm"
            gridClass="grid-item-b"
        />
    )
}

export default InchToCm