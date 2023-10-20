import { useEffect, useState } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"

// const UnitConverter = ({ name, factor, unitOne, unitTwo, gridClass }) => {
const UnitConverter = ({ name, factor, fromUnit, toUnit }) => {
    const [data, setData] = useState({ name: '' })
    const [result, setResult] = useState(null)

    useEffect(() => {
        const newResult = data.name * factor
        setResult(formatResult(newResult))
    }, [data])

    const handleInputChange = e => {
        e.target.value >= 0 ? setData({name: e.target.value}) : setData({name: 0})
    }

    function createHeading() {
        return fromUnit.name.charAt(0).toUpperCase() + fromUnit.name.slice(1)
    }

    const divClass = fromUnit.type === "metric" ? "position-a" : "position-b"
    const headingClass = fromUnit.type === "metric" ? "head-a" : "head-b"
    
    return (
        <div key={name} className={`unit-converter-wrapper ${divClass}`}>
            <h2 className={`sub-heading ${headingClass}`}>{createHeading()} &harr; {toUnit.name}</h2>
            <div className="inner-wrapper">
                <Input
                    name={name}
                    id={name}
                    handleInputChange={handleInputChange}
                    value={data.name}
                />
                <p>{fromUnit.abbreviation}</p>
                <p className="result">{result} {toUnit.abbreviation}</p>
            </div>
        </div>
    )


    // const unitConverterEl = converterData.map(item => {
    //     const { name, factor, fromUnit, toUnit } = item

    //     function createHeading() {
    //         return fromUnit.name.charAt(0).toUpperCase() + fromUnit.name.slice(1)
    //     }
    
    //     const divClass = fromUnit.type === "metric" ? "position-a" : "position-b"
    //     const headingClass = fromUnit.type === "metric" ? "head-a" : "head-b"


    //     return (
    //         <div key={name} className={`unit-converter-wrapper `}>
    //             <h2 className={`sub-heading `}>{createHeading()} &harr; {toUnit.name}</h2>
    //             <Input
    //                 name={name}
    //                 id={name}
    //                 handleInputChange={handleInputChange}
    //                 // value={data.name}
    //             />
    //             <p>{fromUnit.abbreviation}</p>
    //             <p className="result">{toUnit.abbreviation}</p>
    //         </div>
    //     )
    // })

    // return (
    //     <>{unitConverterEl}</>
    // )


    // const [data, setData] = useState({ name: '' })
    // const [result, setResult] = useState(null)

    // useEffect(() => {
    //     // const newResult = data.name * conversionFactor
    //     const newResult = data.name * factor
    //     setResult(formatResult(newResult))
    // }, [data])

    // const conversionFactor = Number(factor)

    // const handleInputChange = e => {
    //     e.target.value >= 0 ? setData({name: e.target.value}) : setData({name: 0})
    // }

    // return (
    //     <div className={`grid-item ${gridClass}`}>
    //         <Input
    //             name={name}
    //             id={name}
    //             value={data.name}
    //             onchange={handleInputChange}
    //         />
    //         <p>{unitOne} =</p>
    //         <p className="result">{result} {unitTwo}</p>
    //     </div>
    // )


    // const unitConverterEl = unitData.map(item => {

    // function createHeading() {
    //     return fromUnit.name.charAt(0).toUpperCase() + fromUnit.name.slice(1)
    // }

    // const divClass = fromUnit.type === "metric" ? "position-a" : "position-b"
    // const headingClass = fromUnit.type === "metric" ? "head-a" : "head-b"

    // return (
    //     <div key={name} className={`unit-converter-wrapper `}>
    //         <h2 className={`sub-heading `}>{createHeading()} &harr; {toUnit.name}</h2>
    //         <Input
    //             name={name}
    //             id={name}
    //             handleInputChange={handleInputChange}
    //             value={data.name}
    //         />
    //         <p>{fromUnit.abbreviation}</p>
    //         <p className="result">{result} {toUnit.abbreviation}</p>
    //     </div>
    // )
    // })


    // return (
    //     <>
    //         {unitConverterEl}
    //     </>
    // )
}

export default UnitConverter