import UnitConvertor from "../library/UnitConvertor"

const InchToCm = () => {
    return (
        <UnitConvertor
            name="inchToCmNum"
            factor="2.54"
            text="in ="
            unit="cm"
            gridClass="grid-item-b"
        />
    )
}

export default InchToCm