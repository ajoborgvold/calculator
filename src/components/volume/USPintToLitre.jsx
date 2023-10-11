import UnitConverter from "../library/UnitConverter"

const USPintToLitre = () => {
    return (
        <UnitConverter
            name="usPintToLitreNum"
            factor="0.473176473"
            unitOne="pt"
            unitTwo="l"
            gridClass="grid-item-b"
        />
    )
}

export default USPintToLitre