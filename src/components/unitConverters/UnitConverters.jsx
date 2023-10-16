import { useContext, useState } from "react"
import Area from "../area/Area"
import Length from "../length/Length"
import Button from "../library/Button"
import Mass from "../mass/Mass"
import Volume from "../volume/Volume"
import { AppContext } from "../../context/AppContext"

const UnitConverters = () => {
    const { unitConverterData } = useContext(AppContext)

    // console.log(unitConverterData)

    // const unitConverterEl = unitConverterData.map(converter => {
    //     const btnText = `${converter.name.slice(1).toUppercase()} conversion`
        
    //     return (
    //         <>
    //             <Button
    //                 id={converter.name}
    //                 text={btnText}
    //             />
    //             {converter.isRendered}
    //         </>
    //     )
    // })

    return (
        <>
            <Button
                text="Volume conversion"
                id="volume"
            />
            <Volume />
            <Button
                text="Length conversion"
                id="length"
            />
            <Length />
            <Button
                text="Mass conversion"
                id="mass"
            />
            <Mass />
            <Button
                text="Area conversion"
                id="area"
            />
            <Area />
        </>
    )
}

export default UnitConverters