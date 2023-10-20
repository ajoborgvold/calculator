import CmToFeet from "./CmToFeet"
import CmToInch from "./CmToInch"
import FeetToCm from "./FeetToCm"
import InchToCm from "./InchToCm"
import KmToMiles from "./KmToMiles"
import MetreToYard from "./MetreToYard"
import MilesToKm from "./MilesToKm"
import YardToMetre from "./YardToMetre"

import { lengthData } from "../../data/unitData"
import UnitConverter from "../library/UnitConverter"

// console.log(lengthData)

const Length = () => {
    // const unitConverterEl = unitData.map(item => {

    //     function createHeading() {
    //         return item.fromUnit.name.charAt(0).toUpperCase() + item.fromUnit.name.slice(1)
    //     }

    //     const divClass = item.fromUnit.type === "metric" ? "position-a" : "position-b"
    //     const headingClass = item.fromUnit.type === "metric" ? "head-a" : "head-b"

    //     return (
    //         <div key={item.name} className={`unit-converter-wrapper ${divClass}`}>
    //             <h2 className={`sub-heading ${headingClass}`}>{createHeading()} &harr; {item.toUnit.name}</h2>
    //             <UnitConverter
    //                 key={item.name}
    //                 name={item.name}
    //                 factor={item.factor}
    //                 unitOne={item.fromUnit.abbreviation}
    //                 unitTwo={item.toUnit.abbreviation}

    //             />
    //         </div>
    //     )
    // })


    // return (
    //     <>
    //         {unitConverterEl}
    //     </>
    // )

    const unitConverterEl = lengthData.map(item => {
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


// const Length = () => {
//     const unitConverterEl = unitData.map(item => {

//         return (
//             <div className="grid-container" key={item.converterName}>
//                 <h2 className="sub-heading heading-a">{item.metricFrom} &harr; {item.metricTo}</h2>
//                 <h2 className="sub-heading heading-b">{item.imperialFrom} &harr; {item.imperialTo}</h2>
//                 <UnitConverter 
//                     key={item.metricName}
//                     name={item.metricName}
//                     factor={item.metricFactor}
//                     unitOne={item.metricUnitOne}
//                     unitTwo={item.metricUnitTwo}
//                     gridClass={item.metricGridClass}
//                     />
//                 <UnitConverter 
//                     key={item.imperialName}
//                     name={item.imperialName}
//                     factor={item.imperialFactor}
//                     unitOne={item.imperialUnitOne}
//                     unitTwo={item.imperialUnitTwo}
//                     gridClass={item.imperialGridClass}

//                 />
//             </div>
//         )
//     })

//     return (
//         <>{unitConverterEl}</>
//     )
// }



// const Length = () => {
//     return (
//         <>
//             {/* <h1 className="main-heading">Length conversion</h1> */}
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Centimetres &harr; inches</h2>
//                 <h2 className="sub-heading heading-b">Inches &harr; centimetres</h2>
//                 <CmToInch />
//                 <InchToCm />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Centimetres &harr; feet</h2>
//                 <h2 className="sub-heading heading-b">Feet &harr; centimetres</h2>
//                 <CmToFeet />
//                 <FeetToCm />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Metres &harr; yards</h2>
//                 <h2 className="sub-heading heading-b">Yards &harr; metres</h2>
//                 <MetreToYard />
//                 <YardToMetre />
//             </div>
//             <div className="grid-container">
//                 <h2 className="sub-heading heading-a">Kilometres &harr; miles</h2>
//                 <h2 className="sub-heading heading-b">Miles &harr; kilometres</h2>
//                 <KmToMiles />
//                 <MilesToKm />
//             </div>
//         </>
//     )
// }

export default Length