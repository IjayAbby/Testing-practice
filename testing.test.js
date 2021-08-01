const testFn = require('./testing');

const { stringLength, reverseString, capitalizeFirstLetter, calculator } = testFn;


describe('Function to test strings', () => {
    test('Length of "Hello" is 5', () =>{
        // Assert
        expect(stringLength('World')).toBe(5);
    });

    test('Length of string is too long', () =>{
        // Assert
        expect(stringLength('hello world')).toThrow(Error);
    });

    test('Length of string is too short', () =>{
        // Assert
        expect(stringLength('')).toThrow(Error);
    });

    test('Get a reverse string', () =>{
        // Assert
        expect(reverseString("ijay")).toMatch(/yaji/);
    });

    test('capitalize should return first character capitalized', () =>{
        // Assert
        expect(capitalizeFirstLetter("developer")).toMatch(/Developer/);
    })

    test('capitalize should receive a string', () =>{
        // Assert
        expect(capitalizeFirstLetter(world)).toBeTruthy();
    })
})