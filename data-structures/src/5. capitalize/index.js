// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

export const capitalize = (str) => {
    const array = str.split(' ')

    const newArray = []

    array.forEach((item) => {
        const newWord = `${item.substring(0, 1).toUpperCase()}${item.substring(
            1,
            item.length
        )}`
        newArray.push(newWord)
    })

    return newArray.join(' ')
}
