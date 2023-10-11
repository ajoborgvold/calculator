import UnitConverter from "../library/UnitConverter"

const UKGallonToLitre = () => {
    return (
        <UnitConverter
            name="ukGallonToLitreNum"
            factor="4.54609188"
            unitOne="gal"
            unitTwo="l"
            gridClass="grid-item-b"
        />
    )
}

export default UKGallonToLitre