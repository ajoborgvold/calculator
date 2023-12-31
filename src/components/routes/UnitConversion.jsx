import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import UnitConverter from "../library/UnitConverter"
import Select from "../library/Select"
import { unitData } from "../../data/unitData"

const UnitConversion = () => {
  useEffect(() => {
    document.title = "Unit conversion"
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const nameFilter = searchParams.get("name")

  function handleFilterConverters(e) {
    e.target.value
      ? setSearchParams({ name: e.target.value })
      : setSearchParams({})
  }

  const converterEl = nameFilter ? (
    <UnitConverter data={unitData[nameFilter]} />
  ) : (
    Object.keys(unitData).map((converterName) => (
      <UnitConverter key={converterName} data={unitData[converterName]} />
    ))
  )

  return (
    <div className="main-container">
      <h1 className="main-heading">Unit conversion</h1>
      <Select
        data={Object.keys(unitData)}
        id="filter-converters"
        handleChange={handleFilterConverters}
        defaultText="All converters"
        value={nameFilter}
        label="Select a unit converter"
        className="select--large"
      />
      <section className="calculators-section">{converterEl}</section>
    </div>
  )
}

export default UnitConversion
