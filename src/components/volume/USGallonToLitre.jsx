import UnitConvertor from "../library/UnitConvertor"

const USGallonToLitre = () => {
    return (
        <UnitConvertor
            name="usGallonToLitreNum"
            factor="3.78541178"
            unitOne="gal"
            unitTwo="l"
            gridClass="grid-item-b"
        />
    )
}

export default USGallonToLitre