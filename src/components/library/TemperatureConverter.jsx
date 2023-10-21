import { useEffect, useState } from "react"
import Input from "./Input"
import formatResult from "../../utils/formatResult"


const TemperatureConverter = ({ name, fromUnit, toUnit }) => {
    const [data, setData] = useState({name: ''})
    const [result, setResult] = useState(null)
    const [hasResult, setHasResult] = useState(false)

    useEffect(() => {
        let newResult

        if (fromUnit === "celsius") {
            newResult = data.name * 9 / 5 + 32
        } else if (fromUnit === "fahrenheit") {
            newResult = (data.name - 32) * 5 / 9
        }

        hasResult && setResult(formatResult(newResult))
    }, [data, hasResult])

    const handleInputChange = e => {
        setData({name: e.target.value})
        setHasResult(true)
    }

    // function createHeading() {
    //     return fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)
    // }

    return (
        <div>
            <h2>{fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} &harr; {toUnit}</h2>
            <div className="inner-wrapper">
                <Input
                    name={name}
                    id={name}
                    value={data.name}
                    handleInputChange={handleInputChange}
                />
                {fromUnit === "celsius" ? <p>&#8451; =</p> : <p>&#8457; =</p>}
                {toUnit === "celsius" ? <p className="result">{result} &#8451;</p> : <p className="result">{result} &#8457;</p>}
            </div>
        </div>
    )
}

export default TemperatureConverter


// import { useEffect, useState } from "react"
// import Input from "./Input"
// import formatResult from "../../utils/formatResult"

// const UnitConverter = ({ name, factor, fromUnit, toUnit }) => {
//     const [data, setData] = useState({ name: '' })
//     const [result, setResult] = useState(null)

//     useEffect(() => {
//         const newResult = data.name * factor
//         setResult(formatResult(newResult))
//     }, [data])

//     const handleInputChange = e => {
//         e.target.value >= 0 ? setData({name: e.target.value}) : setData({name: 0})
//     }

//     function createHeading() {
//         return fromUnit.name.charAt(0).toUpperCase() + fromUnit.name.slice(1)
//     }

//     const divClass = fromUnit.type === "metric" ? "position-a" : "position-b"
//     const headingClass = fromUnit.type === "metric" ? "head-a" : "head-b"
    
//     return (
//         <div key={name} className={`unit-converter-wrapper ${divClass}`}>
//             <h2 className={`sub-heading ${headingClass}`}>{createHeading()} &harr; {toUnit.name}</h2>
//             <div className="inner-wrapper">
//                 <Input
//                     name={name}
//                     id={name}
//                     handleInputChange={handleInputChange}
//                     value={data.name}
//                 />
//                 <p>{fromUnit.abbreviation}</p>
//                 <p className="result">{result} {toUnit.abbreviation}</p>
//             </div>
//         </div>
//     )
// }

// export default UnitConverter