import NewConverter from "../library/NewConverter"
import { newUnitData } from "../../data/newUnitData"

const NewTemperature = () => {
    return (
        <div>
            <h2 className="sub-heading">Temperature conversion</h2>
            <NewConverter unitData={newUnitData.temperature} />
        </div>
    )
}

export default NewTemperature