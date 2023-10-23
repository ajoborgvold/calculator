import NewConverter from "../library/NewConverter"
import { newUnitData } from "../../data/newUnitData"

const NewMass = () => {
    return (
        <div>
            <h2 className="sub-heading">Mass</h2>
            <NewConverter unitData={newUnitData.mass}/>
        </div>
    )
}

export default NewMass