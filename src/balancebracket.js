/*
 * Complete the 'balancedBrackets' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING string as parameter.
 */
// let stack = [];
// let map = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//     '|': '|'
// }

// for (let char of string) {
//     if (char === '(' || char === '{' || char === '[' || char === '|') {
//         stack.push(char)
//     }

//     else {
//         let last = stack.pop()

//         if (char !== map[last]) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true


// }

// '(((({{}}))))'
function balancedBrackets(string) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
        '|': '|'
    }

    for (let char of string) {
        if (char === '(' || char === '{' || char === '[' || char === '|') {
            stack.push(char)
        }

        else {
            let last = stack.pop()

            if (char !== map[last]) {

                return false
            }
        }
    }
    if (stack.length !== 0) {
        return false
    };

    console.log(true)
    return true

}


balancedBrackets('[[]]{]}')


function ddd(str) {
    stack = []
    map = {
        '(': ')',
        '{': '}',
        '[': ']',
        '|': '|'
    }

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[' || ) {
            stack.push(char)
        }
        else {
            let last = stack.pop()
            if (char !== map[last]) {
                return false
            }
        }
    }

    if (stack.length !== 0) {
        return false
    }

    return true
}