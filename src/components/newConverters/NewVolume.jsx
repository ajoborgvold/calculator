import { newUnitData } from "../../data/newUnitData"
import NewConverter from "../library/NewConverter"

const NewVolume = () => {
    return (
        <div>
            <h2 className="sub-heading">Volume</h2>
            <NewConverter unitData={newUnitData.volume}/>
        </div>
    )
}

export default NewVolume