import SqCmToSqInch from "./SqCmToSqInch"
import SqInchToSqCm from "./SqInchToSqCm"

const Area = () => {
    return (
        <>
            {/* <h1 className="main-heading">Area conversion</h1> */}
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Square cm &harr; square in</h2>
                <h2 className="sub-heading heading-b">Square in &harr; square cm</h2>
                <SqCmToSqInch />
                <SqInchToSqCm />
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Decilitres &harr; cups</h2>
                <h2 className="sub-heading heading-b">Cups &harr; decilitres</h2>
                {/* <DecilitreToCup /> */}
                {/* <CupToDecilitre /> */}
            </div>
            <div className="grid-container">
                <h2 className="sub-heading heading-a">Litre &harr; UK pints</h2>
                <h2 className="sub-heading heading-b">UK pints &harr; litres</h2>
                {/* <UKLitreToPint /> */}
                {/* <UKPintToLitre /> */}
            </div>
        </>
    )
}

export default Area