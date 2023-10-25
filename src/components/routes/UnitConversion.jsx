import { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import UnitConverter from "../library/UnitConverter"
import Select from "../library/Select"
import { unitData } from "../../data/unitData"

const UnitConversion = ({setIsMenuOpen}) => {
    const isNewConversion = useRef(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const nameFilter = searchParams.get("name")

    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    function handleFilterConverters(e) {
        isNewConversion.current = true
        e.target.value ? setSearchParams({ name: e.target.value}) : setSearchParams({})
    }

    const converterEl = nameFilter
        ? <UnitConverter data={unitData[nameFilter]} isNewConversion={isNewConversion} />
        : Object.keys(unitData).map(converterName => (
            <UnitConverter key={converterName} data={unitData[converterName]} isNewConversion={isNewConversion} />
        ))
    
    return (
        <div className="main-container unit-converters-container">
            <h1 className="main-heading">Unit conversion</h1>
            <button onClick={handleFilterConverters}>Back to all converters</button>
            <Select
                data={Object.keys(unitData)}
                id="filter-converters"
                handleChange={handleFilterConverters}
                defaultText="All converters"
                value={nameFilter}
            />
            <section className="converters-section">
                {converterEl}
            </section>
        </div>
    )
}

export default UnitConversion