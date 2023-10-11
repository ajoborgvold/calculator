import UnitConverter from "../library/UnitConverter"

const USGallonToLitre = () => {
    return (
        <UnitConverter
            name="usGallonToLitreNum"
            factor="3.78541178"
            unitOne="gal"
            unitTwo="l"
            gridClass="grid-item-b"
        />
    )
}

export default USGallonToLitre