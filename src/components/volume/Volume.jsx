import CentilitreToFlOunce from "./CentilitreToFlOunce"
import CupToDecilitre from "./CupToDecilitre"
import DecilitreToCup from "./DecilitreToCup"
import FlOunceToCentilitre from "./FlOunceToCentilitre"

const Volume = () => {
    return (
        <section className="calculators-container">
            <h1 className="main-heading">Volume conversion</h1>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Centilitres &harr; fluid ounces</h2>
                <h2 className="sub-heading heading-b">Fluid ounces &harr; centilitres</h2>
                <CentilitreToFlOunce />
                <FlOunceToCentilitre />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Decilitres &harr; cups</h2>
                <h2 className="sub-heading heading-b">Cups &harr; decilitres</h2>
                <DecilitreToCup />
                <CupToDecilitre />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilograms &harr; pounds</h2>
                <h2 className="sub-heading heading-b">Pounds &harr; kilograms</h2>
                {/* <KgToPound /> */}
                {/* <PoundToKg /> */}
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilograms &harr; stone</h2>
                <h2 className="sub-heading heading-b">Stone &harr; kilograms</h2>
                {/* <KgToStone /> */}
                {/* <StoneToKg /> */}
            </div>
        </section>
    )
}

export default Volume