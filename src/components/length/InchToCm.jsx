import UnitConvertor from "../library/UnitConverter"

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