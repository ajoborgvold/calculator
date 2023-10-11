import UnitConverter from "../library/UnitConverter"

const KgToStone = () => {
    return (
        <UnitConverter
            name="kgToStoneNum"
            factor="0.157473044"
            unitOne="kg"
            unitTwo="st"
            gridClass="grid-item-a"
        />
    )
}

export default KgToStone