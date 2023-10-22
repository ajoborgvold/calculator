import NewConverter from "../library/NewConverter"
import { newUnitData } from "../../data/newUnitData"

const NewLength = () => {
    return (
        <div>
            <h2>New length component</h2>
            <NewConverter unitData={newUnitData.length} />
        </div>
    )
}

export default NewLength