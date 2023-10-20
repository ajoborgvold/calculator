import { unitData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

const Volume = () => {
    const unitConverterEl = unitData.volumeData.map(item => {
        return (
            <UnitConverter
                key={item.name}
                name={item.name}
                factor={item.factor}
                fromUnit={item.fromUnit}
                toUnit={item.toUnit}
            />
        )
    })

    return (
        <>{unitConverterEl}</>
    )
}

export default Volume


// import CentilitreToFlOunce from "./CentilitreToFlOunce"
// import CupToDecilitre from "./CupToDecilitre"
// import DecilitreToCup from "./DecilitreToCup"
// import FlOunceToCentilitre from "./FlOunceToCentilitre"
// import UKGallonToLitre from "./UKGallonToLitre"
// import UKLitreToGallon from "./UKLitreToGallon"
// import UKLitreToPint from "./UKLitreToPint"
// import UKPintToLitre from "./UKPintToLitre"
// import USGallonToLitre from "./USGallonToLitre"
// import USLitreToGallon from "./USLitreToGallon"
// import USLitreToPint from "./USLitreToPint"
// import USPintToLitre from "./USPintToLitre"

// const Volume = () => {
//     return (
//         <>
//             {/* <h1 className="main-heading">Volume conversion</h1> */}
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Centilitres &harr; fluid ounces</h2>
//                 <h2 className="sub-heading heading-b">Fluid ounces &harr; centilitres</h2>
//                 <CentilitreToFlOunce />
//                 <FlOunceToCentilitre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Decilitres &harr; cups</h2>
//                 <h2 className="sub-heading heading-b">Cups &harr; decilitres</h2>
//                 <DecilitreToCup />
//                 <CupToDecilitre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Litre &harr; UK pints</h2>
//                 <h2 className="sub-heading heading-b">UK pints &harr; litres</h2>
//                 <UKLitreToPint />
//                 <UKPintToLitre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Litre &harr; US pints</h2>
//                 <h2 className="sub-heading heading-b">US pints &harr; litres</h2>
//                 <USLitreToPint />
//                 <USPintToLitre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Litre &harr; UK gallons</h2>
//                 <h2 className="sub-heading heading-b">UK gallons &harr; litres</h2>
//                 <UKLitreToGallon />
//                 <UKGallonToLitre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Litre &harr; US gallons</h2>
//                 <h2 className="sub-heading heading-b">US gallons &harr; litres</h2>
//                 <USLitreToGallon />
//                 <USGallonToLitre />
//             </div>
//         </>
//     )
// }

// export default Volume