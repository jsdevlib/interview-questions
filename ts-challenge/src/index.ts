import { MyDictionary } from './level1'
import { MyDictionaryHigh } from './level2'

const myDictionaryLevel1 = new MyDictionary(['cat', 'car', 'bar'])

console.log(`cat is in dictionary: ${myDictionaryLevel1.isInDictionary('cat')}`) // true
console.log(`bat is in dictionary: ${myDictionaryLevel1.isInDictionary('*at')}`) // true
console.log(`*a* is in dictionary: ${myDictionaryLevel1.isInDictionary('*a*')}`) // true
console.log(`bet is in dictionary: ${myDictionaryLevel1.isInDictionary('bet')}`) // false

console.log('-------------------------------------------------------')

const myDictionaryLevel2 = new MyDictionaryHigh(['cat', 'car', 'bar'])

console.log(`cat is in dictionary: ${myDictionaryLevel2.isInDictionary('cat')}`) // true
console.log(`bat is in dictionary: ${myDictionaryLevel2.isInDictionary('*at')}`) // true
console.log(`*a* is in dictionary: ${myDictionaryLevel2.isInDictionary('*a*')}`) // false
console.log(`be* is in dictionary: ${myDictionaryLevel2.isInDictionary('bet')}`) // false
console.log(
  `bet* is in dictionary: ${myDictionaryLevel2.isInDictionary('be*')}`
) // false
