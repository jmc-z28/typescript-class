import {describe, test, expect} from 'vitest'

describe("Opting in to the Type Checking", () => {
    test('Uninitialized is Any', () => {


    })
})

test('Can add two number', () => {
    const a = 10;
    const b = 20;
    
    expect (a + b).toEqual(30);
})

test('Initialize and the type is inferred', () => {
    let age = 13;

    age = 14;
    expect(typeof age).toBe("number");

    //  @ts-expect-error
    age = 'Old';

    expect(typeof age).toBe("string")

})