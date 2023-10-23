import NewConverter from "../library/NewConverter"
import { newUnitData } from "../../data/newUnitData"

const NewArea = () => {
    return (
        <div>
            <h2 className="sub-heading">Area</h2>
            <NewConverter unitData={newUnitData.area} />
        </div>
    )
}

export default NewArea