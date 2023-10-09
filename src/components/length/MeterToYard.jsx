import { useState } from "react"
import Input from "../library/Input"
import handleInputChange from "../../utils/handleInputChange"

const MeterToYard = () => {
    const [data, setData] = useState({meterToYardNum: ''})
    const [result, setResult] = useState(null)

    return (
        <div className="calculator-wrapper flex-row">
            <Input 
                name="meterToYardNum"
                id="meterToYardNum"
                value={data.meterToYardNum}
                onchange={e => handleInputChange(e, setData)}
            />
            <p>m equals </p>
        </div>
    )
}

export default MeterToYard