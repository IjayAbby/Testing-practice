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

//Task 4

const capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
