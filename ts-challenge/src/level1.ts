export class MyDictionary {
  _array = Array<string>()

  constructor(input: Array<string>) {
    this._array = new Array<string>()

    this.setup(input)
  }

  setup(input: Array<string>) {
    if (!input.length) throw new Error('Input should has at least one element')

    this._array = input
  }

  isInDictionary(word: string) {
    if (this._array[word] !== undefined) return true

    // Adding wildcard support
    return this._array.some((dictWord) => {
      const regexTemplate = word.replaceAll('*', '.')
      const regex = new RegExp(`^${regexTemplate}$`)
      return regex.test(dictWord)
    })
  }
}
