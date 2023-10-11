import UnitConvertor from "../library/UnitConvertor"

const CmToInch = () => {
    return (
        <UnitConvertor
            name="cmToInchNum"
            factor="0.393700787"
            text="cm ="
            unit="in"
            gridClass="grid-item-a"
        />
    )
}

export default CmToInch