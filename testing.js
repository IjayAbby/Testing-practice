// Task 1

const stringLength = (string) => {
    if (string.length > 10) {
        throw new Error("This string is too long");
    } else if (string.length < 1) {
        throw new Error('This string is too short');
    }
    return string.length;
}

// Task 2

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

//Task 3
class calculator {
    static add(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 + number2;
    }

    static subtract(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 - number2;
    }

    static divide(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 / number2;
    }

    static multiply(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 * number2;
    }
};

//Task 4

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const fctn = {stringLength, reverseString, capitalizeFirstLetter, calculator};

module.exports = fctn;