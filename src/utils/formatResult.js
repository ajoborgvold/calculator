const formatResult = num => {
    const formattedResult = num.toFixed(2)
    return formattedResult.endsWith(".00") ? num.toFixed(0) : formattedResult
}

export default formatResult