import UnitConvertor from "../library/UnitConvertor"

const GramToOunce = () => {
    return (
        <UnitConvertor
            name="gramToOunceNum"
            factor="0.0352739619"
            text="g ="
            unit="oz"
            gridClass="grid-item-a"
        />
    )
}

export default GramToOunce