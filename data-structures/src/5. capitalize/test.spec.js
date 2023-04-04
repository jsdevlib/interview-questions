/* eslint-disable no-undef */
import { capitalize } from './index'

describe('Capitalize Test', () => {
    test('Capitalize is a function', () => {
        expect(typeof capitalize).toEqual('function')
    })

    test('capitalizes the first letter of every word in a sentence', () => {
        const result = capitalize('hi there, how is it going?')
        const expected = 'Hi There, How Is It Going?'

        expect(result).toEqual(expected)
    })

    test('capitalizes the first letter', () => {
        expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
            'I Love Breakfast At Bill Miller Bbq'
        )
    })
})
