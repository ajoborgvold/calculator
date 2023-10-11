import UnitConverter from "../library/UnitConverter"

const USLitreToGallon = () => {
    return (
        <UnitConverter
            name="usLitreToGallonNum"
            factor="0.264172052"
            unitOne="l"
            unitTwo="gal"
            gridClass="grid-item-a"
        />
    )
}

export default USLitreToGallon