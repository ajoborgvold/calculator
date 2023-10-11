const raiseLastCharacter = text => {
    const raisedCharacter = text.slice(-1);
    const formattedText = `${text.slice(0, -1)}<sup>${raisedCharacter}</sup>`
    return formattedText
}

export default raiseLastCharacter