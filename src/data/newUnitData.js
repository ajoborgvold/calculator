export const newUnitData = {
    length: {
        name: "length",
        referenceUnit: "millitetre",
        units: [
            {
                name: "centimetres",
                abbreviation: "cm",
                equalToFactor: 10
            },
            {
                name: "metres",
                abbreviation: "m",
                equalToFactor: 1000              
            },
            {
                name: "inches",
                abbreviation: "in",
                equalToFactor: 25.4
            },
            {
                name: "feet",
                abbreviation: "ft",
                equalToFactor: 304.8 
            }
        ]
    },
    volume: {
        name: "volume",
        referenceUnit: "millilitre",
        units: [
            {
                name: "decilitres",
                abbreviation: "dl",
                equalToFactor: 100
            },
            {
                name: "cups",
                abbreviation: "cups",
                equalToFactor: 236.588237
            }
        ]
    }
}