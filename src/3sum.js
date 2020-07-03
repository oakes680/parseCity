/*
 * Complete the 'threeNumberSum' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER target
 */

// naive solution is three for loops    n3
// naive solution is three for loops    n3


function threeNumberSum(arr, target) {
    if (arr[0] > arr[1]) {
        console.log('hi')
    } else {
        console.log('no')
    }
}

arr1 = [0, 8, 9, -1, 12, 14]

threeNumberSum(arr1, 20)



function reverseInParentheses(s) {
    const stack = []


    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        console.log(char)

        if (char === ')') {
            let reversedString = ''
            while (stack.length > 0 && stack[stack.length - 1] != "(") {
                reversedString += stack.pop();
            }
            stack.pop(); // pop the opening bracket
            for (let i = 0; i < reversedString.length; i++) {
                stack.push(reversedString.charAt(i));
            }
        } else {
            stack.push(char)
        }

    }

    console.log(stack.join(""))


}



// //////////////////////////////////

function reverseInParentheses(s) {
    const stack = []


    for (let char of s) {

        if (char === ')') {

            let reversedString = ''

            while (stack[stack.length - 1] != "(") {
                reversedString += stack.pop();
            }

            //removes (  open paranthesis
            stack.pop();

            //add letters from reverse strin back to stack in order we want
            for (let char of reversedString) {
                stack.push(char);
            }

        } else {
            //adds characters to the stack that are not )
            stack.push(char)
        }

    }

    console.log(stack)
    //convert final stack which is an array to a string
    let final = stack.join("")
    return final

}