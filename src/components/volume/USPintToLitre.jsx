import UnitConvertor from "../library/UnitConvertor"

const USPintToLitre = () => {
    return (
        <UnitConvertor
            name="usPintToLitreNum"
            factor="0.473176473"
            unitOne="pt"
            unitTwo="l"
            gridClass="grid-item-b"
        />
    )
}

export default USPintToLitre