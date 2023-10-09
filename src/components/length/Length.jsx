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
            <h2 className="sub-heading">Centimetres = inches</h2>
            <div className="calculators__sub-container">
                <CmToInch />
                <InchToCm />
            </div>
            <h2 className="sub-heading">Centimetres = feet</h2>
            <div className="calculators__sub-container">
                <CmToFeet />
                <FeetToCm />
            </div>
            <h2 className="sub-heading">Meters = yards</h2>
            <div className="calculators__sub-container">
                <MeterToYard />
                <YardToMeter />
            </div>
            <h2 className="sub-heading">Kilometers = miles</h2>
            <div className="calculators__sub-container">
                <KmToMiles />
                <MilesToKm />
            </div>
        </section>
    )
}

export default Length