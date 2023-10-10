import CmToFeet from "./CmToFeet"
import CmToInch from "./CmToInch"
import FeetToCm from "./FeetToCm"
import InchToCm from "./InchToCm"
import KmToMiles from "./KmToMiles"
import MeterToYard from "./MeterToYard"
import MilesToKm from "./MilesToKm"
import YardToMeter from "./YardToMeter"

const Length = () => {
    return (
        <section className="calculators-container">
            <h1 className="main-heading">Length conversion</h1>
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
                <MeterToYard />
                <YardToMeter />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilometres &harr; miles</h2>
                <h2 className="sub-heading heading-b">Miles &harr; kilometres</h2>
                <KmToMiles />
                <MilesToKm />
            </div>
        </section>
    )
}

export default Length