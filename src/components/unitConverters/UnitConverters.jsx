import { useContext, useState } from "react"
import Area from "../area/Area"
import Length from "../length/Length"
import Button from "../library/Button"
import Mass from "../mass/Mass"
import Volume from "../volume/Volume"
import { AppContext } from "../../context/AppContext"

const UnitConverters = () => {
    const { showUnitConverter } = useContext(AppContext)
    console.log(showUnitConverter)

    return (
        <>
            <Button
                text="Volume conversion"
                name="volume"
            />
            <Volume />
            <Button
                text="Length conversion"
                name="length"
            />
            <Length />
            <Button
                text="Mass conversion"
                name="mass"
            />
            <Mass />
            <Button
                text="Area conversion"
                name="area"
            />
            <Area />
        </>
    )
}

export default UnitConverters