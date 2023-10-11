import UnitConverter from "../library/UnitConverter"

const OunceToGram = () => {
    return (
        <UnitConverter
            name="ounceToGramNum"
            factor="28.3495231"
            unitOne="oz"
            unitTwo="g"
            gridClass="grid-item-b"
        />
    )
}

export default OunceToGram