import { useState } from "react"
import Area from "../area/Area"
import Length from "../length/Length"
import Button from "../library/Button"
import Mass from "../mass/Mass"
import Volume from "../volume/Volume"

const UnitConverters = () => {
    const [showConverter, setShowConverter] = useState(false)

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