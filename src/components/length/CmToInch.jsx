import UnitConvertor from "../library/UnitConverter"

const CmToInch = () => {
    return (
        <UnitConvertor
            name="cmToInchNum"
            factor="0.393700787"
            unitOne="cm"
            unitTwo="in"
            gridClass="grid-item-a"
        />
    )
}

export default CmToInch