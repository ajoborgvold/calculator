import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import NewConverter from "../library/NewConverter"
import Select from "../library/Select"
import { newUnitData } from "../../data/newUnitData"

const NewUnitConverters = ({setIsMenuOpen}) => {
    const isFirstRender = useRef(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const nameFilter = searchParams.get("name")
    const [count, setCount] = useState(0)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    function handleFilterConverters(e) {
        isFirstRender.current = true
        e.target.value ? setSearchParams({ name: e.target.value}) : setSearchParams({})
    }

    const converterEl = nameFilter
        ? <NewConverter unitData={newUnitData[nameFilter]} isFirstRender={isFirstRender} setCount={setCount}/>
        : Object.keys(newUnitData).map(converterName => (
            <NewConverter key={converterName} unitData={newUnitData[converterName]} isFirstRender={isFirstRender} setCount={setCount}/>
        ))
    
    return (
        <div className="main-container unit-converters-container">
            <h1 className="main-heading">Unit conversion</h1>
            <div>{count}</div>
            <button onClick={handleFilterConverters}>Back to all converters</button>
            <Select
                data={Object.keys(newUnitData)}
                id="filter-converters"
                handleChange={handleFilterConverters}
                defaultText="All converters"
            />
            <section className="converters-section">
                {converterEl}
            </section>
        </div>
    )
}

export default NewUnitConverters