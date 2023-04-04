export class MyHashTable {
    _array = []

    constructor(size) {
        this._array = new Array(size)
    }

    get(key) {
        let address = this._hash(key)

        const currentBucket = this._array[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) return currentBucket[i][1]
            }
        }

        return undefined
    }
    keys() {
        if (!this._array.length) {
            return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this._array.length; i++) {
            // if it's not an empty memory cell
            if (this._array[i] && this._array[i].length) {
                // but also loop through all the potential collisions
                if (this._array.length > 1) {
                    for (let j = 0; j < this._array[i].length; j++) {
                        result.push(this._array[i][j][0])
                    }
                } else {
                    result.push(this._array[i][0])
                }
            }
        }
        return result
    }

    set(key, value) {
        let address = this._hash(key)

        if (!this._array[address]) {
            this._array[address] = []
        }

        this._array[address].push([key, value])

        return this._array
    }

    _hash(key) {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this._array.length
        }

        return hash
    }
}
