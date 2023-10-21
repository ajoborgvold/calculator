export const pctData = {
    groupA: {
        heading: "Convert a number to a percentage",
        calculators: [
            {
                type: "changeInPct",
                nameA: "changeInPctNumOne",
                nameB: "changeInPctNumTwo",
                text: {
                    a: "How much is a change from the number",
                    b: "",
                    c: "to the number",
                    d: "in percent?"
                },
                unit: "%"
            },
            {
                type: "numToPct",
                nameA: "numberToPctNumOne",
                nameB: "numberToPctNumTwo",
                text: {
                    a: "How many percent is the number",
                    b: "",
                    c: "of the number",
                    d: "?"
                },
                unit: "%"
            }
        ]
    },
    groupB: {
        heading: "Convert a percentage to a number",
        calculators: [
            {
                type: "pctOfTotal",
                nameA: "fromPctToTotalNumOne",
                nameB: "fromPctToTotalNumTwo",
                text: {
                    a: "What is the total sum when",
                    b: "%",
                    c: "is equal to the number",
                    d: "?"
                }
            },
            {
                type: "pctToNum",
                nameA: "pctToNumberNumOne",
                nameB: "pctToNumberNumTwo",
                text: {
                    a: "How much is",
                    b: "%",
                    c: "of the number",
                    d: "?"
                }
            }
        ]
    }
}