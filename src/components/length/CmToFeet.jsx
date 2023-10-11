import UnitConvertor from "../library/UnitConvertor"

const CmToFeet = () => {
    return (
        <UnitConvertor
            name="cmToFeetNum"
            factor="0.032808399"
            unitOne="cm"
            unitTwo="ft"
            gridClass="grid-item-a"
        />
    )
}

export default CmToFeet