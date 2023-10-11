import UnitConverter from "../library/UnitConverter"

const GramToOunce = () => {
    return (
        <UnitConverter
            name="gramToOunceNum"
            factor="0.0352739619"
            unitOne="g"
            unitTwo="oz"
            gridClass="grid-item-a"
        />
    )
}

export default GramToOunce