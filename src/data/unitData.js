// export const unitData = [
//     {
//         converterName: "cmAndFeet",
//         metricName: "cmToFeetNum",
//         metricFrom: "centimetres",
//         metricTo: "feet",
//         metricFactor: 0.032808399,
//         metricUnitOne: "cm",
//         metricUnitTwo: "ft",
//         metricGridClass: "grid-item-a",
//         imperialName: "feetToCmNum",
//         imperialFrom: "Feet",
//         imperialTo: "centimetres",
//         imperialFactor: 30.48,
//         imperialUnitOne: "ft",
//         imperialUnitTwo: "cm",
//         imperialGridClass: "grid-item-b"
//     },

// ]


export const unitData = [
    {
        name: "cmToFeet",
        factor: 0.032808399,
        fromUnit: {
            name: "centimetres",
            abbreviation: "cm",
            type: "metric"
        },
        toUnit: {
            name: "feet",
            abbreviation: "ft"
        }
    },
    {
        name: "feetToCm",
        factor: 30.48,
        fromUnit: {
            name: "feet",
            abbreviation: "ft",
            type: "imperial"
        },
        toUnit: {
            name: "centimetres",
            abbreviation: "cm"
        }
    },

]