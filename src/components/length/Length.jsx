import CmToFeet from "./CmToFeet"
import CmToInch from "./CmToInch"
import FeetToCm from "./FeetToCm"
import InchToCm from "./InchToCm"

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
            <h2 className="sub-heading">Meter = yard</h2>
            <div className="calculators__sub-container">
                
            </div>
        </section>
    )
}

export default Length