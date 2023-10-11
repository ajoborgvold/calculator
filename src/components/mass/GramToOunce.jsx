import UnitConvertor from "../library/UnitConvertor"

const GramToOunce = () => {
    return (
        <UnitConvertor
            name="gramToOunceNum"
            factor="0.0352739619"
            unitOne="g"
            unitTwo="oz"
            gridClass="grid-item-a"
        />
    )
}

export default GramToOunce