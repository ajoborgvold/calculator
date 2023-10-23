import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Select from "../library/Select"
import { newUnitData } from "../../data/newUnitData"

const NewUnitConverters = ({setIsMenuOpen}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    function handleFilterConverters(e) {
        e.target.value ? navigate(e.target.value) : navigate(".")
    }
    
    return (
        <div className="main-container unit-converters-container">
            <h1 className="main-heading">Unit conversion</h1>
            <Select
                data={Object.keys(newUnitData)}
                id="filter-converters"
                handleChange={handleFilterConverters}
                defaultText="All converters"
            />
            <section className="converters-section">
                <Outlet />
            </section>
        </div>
    )
}

export default NewUnitConverters