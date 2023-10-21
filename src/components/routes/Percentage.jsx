import { useEffect } from "react"
import PercentageCalculator from "../library/PercentageCalculator"

import { pctData } from "../../data/pctData"

const Percentage = ({ setIsMenuOpen }) => {
    useEffect(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <div className="main-container pct-calculators-container">
            {Object.keys(pctData).map(group => (
                <div key={group}>
                    <h2 className="sub-heading">{pctData[group].heading}</h2>
                    {pctData[group].calculators.map(item => (
                        <PercentageCalculator
                            key={item.type}
                            type={item.type}
                            nameA={item.nameA}
                            nameB={item.nameB}
                            text={item.text}
                            unit={item.unit}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Percentage
