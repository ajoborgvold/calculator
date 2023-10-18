import CmToFeet from "./CmToFeet"
import CmToInch from "./CmToInch"
import FeetToCm from "./FeetToCm"
import InchToCm from "./InchToCm"
import KmToMiles from "./KmToMiles"
import MetreToYard from "./MetreToYard"
import MilesToKm from "./MilesToKm"
import YardToMetre from "./YardToMetre"

const Length = () => {
    return (
        <>
            {/* <h1 className="main-heading">Length conversion</h1> */}
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Centimetres &harr; inches</h2>
                <h2 className="sub-heading heading-b">Inches &harr; centimetres</h2>
                <CmToInch />
                <InchToCm />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Centimetres &harr; feet</h2>
                <h2 className="sub-heading heading-b">Feet &harr; centimetres</h2>
                <CmToFeet />
                <FeetToCm />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Metres &harr; yards</h2>
                <h2 className="sub-heading heading-b">Yards &harr; metres</h2>
                <MetreToYard />
                <YardToMetre />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilometres &harr; miles</h2>
                <h2 className="sub-heading heading-b">Miles &harr; kilometres</h2>
                <KmToMiles />
                <MilesToKm />
            </div>
        </>
    )
}

export default Length