export const newUnitData = {
    length: {
        name: "length",
        baseUnit: "millimetre",
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
        baseUnit: "millilitre",
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
    },
    mass: {
        name: "mass",
        baseUnit: "gram",
        units: [
            {
                name: "grams",
                abbreviation: "g",
                equalToFactor: 1
            },
            {
                name: "ounces",
                abbreviation: "oz",
                equalToFactor: 28.3495231
            },
            {
                name: "kilograms",
                abbreviation: "kg",
                equalToFactor: 1000
            }
        ]
    },
    area: {
        name: "area",
        baseUnit: "square-centimetre",
        units: [
            {
                name: "square centimetre",
                abbreviation: "sq cm",
                equalToFactor: 1
            },
            {
                name: "square inches",
                abbreviation: "sq in",
                equalToFactor: 6.4516
            }
        ]
    },
    temperature: {
        name: "temperature",
        baseUnit: "celsius",
        units: [
            {
                name: "celsius",
                abbreviation: "°C",
                equalToFactor: 1,
                offset: 32
              },
              {
                name: "fahrenheit",
                abbreviation: "°F",
                equalToFactor: 1.8,
                offset: 32
              }
        ]
    }
}