// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 5) --> [[ 1, 2, 3, 4, 5]]

export function chunk(array, size) {
    let times = calcTimes(array, size)

    const newArray = []

    let from = 0
    let to = size

    for (let index = 0; index < times; index++) {
        const partialArray = array.slice(from, to)
        newArray.push(partialArray)
        from += size
        to += size
    }

    return newArray
}

const calcTimes = (array, size) => {
    let times = array.length / size

    const mod = times - Math.floor(times)

    times = Math.floor(times)

    if (mod > 0) {
        times++
    }

    return times
}
