export class MyDictionaryHigh {
  _dic = {}

  constructor(input: Array<any>) {
    const wordMap = input.reduce((acc, word) => {
      acc[word] = true

      word.split('').forEach((letter, i) => {
        const start = word.slice(0, i)
        const end = word.slice(i + 1)

        // console.log(`${letter} - ${start}*${end}`)

        const partialWord = `${start}*${end}`
        acc[partialWord] = true
      })

      return acc
    }, {})

    console.log(wordMap)

    this._dic = wordMap
  }

  isInDictionary(word: string) {
    return !!this._dic[word]
  }
}
