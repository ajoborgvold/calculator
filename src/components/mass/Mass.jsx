import GramToOunce from "./GramToOunce"
import KgToPound from "./KgToPound"
import KgToStone from "./KgToStone"
import OunceToGram from "./OunceToGram"
import PoundToKg from "./PoundToKg"
import StoneToKg from "./StoneToKg"

const Mass = () => {
    return (
        <section className="calculators-container">
            <h1 className="main-heading">Mass conversion</h1>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Grams &harr; ounces</h2>
                <h2 className="sub-heading heading-b">Ounces &harr; grams</h2>
                <GramToOunce />
                <OunceToGram />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilograms &harr; pounds</h2>
                <h2 className="sub-heading heading-b">Pounds &harr; kilograms</h2>
                <KgToPound />
                <PoundToKg />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Kilograms &harr; stone</h2>
                <h2 className="sub-heading heading-b">Stone &harr; kilograms</h2>
                <KgToStone />
                <StoneToKg />
            </div>
        </section>
    )
}

export default Mass