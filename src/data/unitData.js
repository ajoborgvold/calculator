export const unitData = {
    length: {
        name: "length",
        baseUnit: "millimetre",
        units: [
            {
                name: "millimetres",
                abbreviation: "mm",
                equalToFactor: 1
            },
            {
                name: "centimetres",
                abbreviation: "cm",
                equalToFactor: 10
            },
            {
                name: "decimetres",
                abbreviation: "dm",
                equalToFactor: 100,
            },
            {
                name: "metres",
                abbreviation: "m",
                equalToFactor: 1000              
            },
            {
                name: "kilometres",
                abbreviation: "km",
                equalToFactor: 1000000
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
            },
            {
                name: "yards",
                abbreviation: "yd",
                equalToFactor: 914.4
            },
            {
                name: "miles",
                abbreviation: "mi",
                equalToFactor: 1609344
            }
        ]
    },
    volume: {
        name: "volume",
        baseUnit: "millilitre",
        units: [
            {
                name: "millilitres",
                abbreviation: "ml",
                equalToFactor: 1
            },
            {
                name: "centilitres",
                abbreviation: "cl",
                equalToFactor: 10
            },
            {
                name: "decilitres",
                abbreviation: "dl",
                equalToFactor: 100
            },
            {
                name: "litres",
                abbreviation: "l",
                equalToFactor: 1000
            },
            {
                name: "teaspoons",
                abbreviation: "tsp",
                equalToFactor: 5
            },
            {
                name: "tablespoon",
                abbreviation: "tbsp",
                equalToFactor: 15
            },
            {
                name: "fluid ounces",
                abbreviation: "fl oz",
                equalToFactor: 29.5735296
            },
            {
                name: "cups",
                abbreviation: "cups",
                equalToFactor: 236.588237
            },
            {
                name: "US pint",
                abbreviation: "US pt",
                equalToFactor: 473.176473
            },
            {
                name: "UK pint",
                abbreviation: "UK pt",
                equalToFactor: 568.261485
            },
            {
                name: "US gallon",
                abbreviation: "US gal",
                equalToFactor: 3785.41178
            },
            {
                name: "UK gallon",
                abbreviation: "UK gal",
                equalToFactor: 4546.09188
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
                name: "kilograms",
                abbreviation: "kg",
                equalToFactor: 1000
            },
            {
                name: "metric ton",
                abbreviation: "t",
                equalToFactor: 1000000
            },
            {
                name: "ounces",
                abbreviation: "oz",
                equalToFactor: 28.3495231
            },
            {
                name: "pounds",
                abbreviation: "lb",
                equalToFactor: 453.59237
            },
            {
                name: "stones",
                abbreviation: "st",
                equalToFactor: 6350.29318
            }
        ]
    },
    area: {
        name: "area",
        baseUnit: "square centimetre",
        units: [
            {
                name: "square centimetre",
                abbreviation: "cm²",
                equalToFactor: 1
            },
            {
                name: "square metres",
                abbreviation: "m²",
                equalToFactor: 10000
            },
            {
                name: "square kilometres",
                abbreviation: "km²",
                equalToFactor: 10000000000
            },
            {
                name: "square inches",
                abbreviation: "in²",
                equalToFactor: 6.4516
            },
            {
                name: "square feet",
                abbreviation: "ft²",
                equalToFactor: 929.0304
            },
            {
                name: "square yards",
                abbreviation: "yd²",
                equalToFactor: 8361.2736
            },
            {
                name: "square miles",
                abbreviation: "mi²",
                equalToFactor: 25899881100
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