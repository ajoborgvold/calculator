import { useEffect, useState } from "react"
import Select from "../library/Select"
import { newUnitData } from "../../data/newUnitData"

const Testing = () => {
    const [formData, setFormData] = useState({
        firstSelect: '',
        input: '',
        secondSelect: ''
    })
    const [selectedUnits, setSelectedUnits] = useState({
        firstUnit: '',
        secondUnit: ''
    })
    const [result, setResult] = useState('')

    useEffect(() => {
        formData.firstSelect && setSelectedUnits(prevUnits => ({...prevUnits, firstUnit: formData.firstSelect}))
        formData.secondSelect && setSelectedUnits(prevUnits => ({...prevUnits, secondUnit: formData.secondSelect}))
        formData.firstSelect && formData.secondSelect && formData.input ? setResult('New result ready') : setResult('No result yet')
    }, [formData])

    function handleFormDataChange(e) {
        setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <form>
                <Select data={newUnitData.length.metric}/>
                <select
                    name="firstSelect"
                    value={formData.firstSelect}
                    onChange={handleFormDataChange}
                >
                    <option value="">Select a unit</option>
                    <option value="centimetre">Centimetre</option>
                    <option value="metre">Metre</option>
                </select>
                <br />
                <hr />
                <br />
                <input
                    type="number"
                    name="input"
                    placeholder="0"
                    value={formData.firstInput}
                    onChange={handleFormDataChange}
                />
                <br />
                <hr />
                <br />
                <select
                    name="secondSelect"
                    value={formData.secondSelect}
                    onChange={handleFormDataChange}
                >
                    <option value="">Select a unit</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                </select>
                <br />
                <hr />
                <br />
                {/* <button>Calculate</button> */}
            </form>
            <p>{formData.input} {selectedUnits.firstUnit} = {result && result} {selectedUnits.secondUnit}</p>
        </div>
    )
}

export default Testing