export const groupBy = (input, key) => {
    return input.reduce((acc, currentValue) => {
        let groupKey = currentValue[key]
        if (!acc[groupKey]) {
            acc[groupKey] = []
        }
        acc[groupKey].push(currentValue)
        return acc
    }, {})
}

export const countWords = (str) => {
    // minus and without empty spaces
    str = str.toLowerCase()
    str = str.replace(/[^a-zA-Z ]/g, '')
    str = str.split('').sort()

    let result = {}

    for (let char in str) {
        let index = str[char]

        if (index in result) {
            result[index] = result[index] + 1
        } else {
            result[index] = 1
        }
    }

    return result
}
