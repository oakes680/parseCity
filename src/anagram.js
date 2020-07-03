function makeAnagrams(a, b) {
    // Write your code here
    let hashA = {}
    let hashB = {}


    for (let char of a) {
        // console.log(char)
        if (hashA[char] === undefined) {
            hashA[char] = 1
        } else {
            hashA[char] += 1
        }
    }

    for (let char of b) {
        // console.log(char)
        if (hashB[char] === undefined) {
            hashB[char] = 1
        } else {
            hashB[char] += 1
        }
    }

    console.log(hashA)
    console.log(hashB)

    for (let char of a) {

        if (hashB[char] > 0) {

            hashB[char] -= 1
        }
    }

    for (let char of b) {

        if (hashA[char] > 0) {

            hashA[char] -= 1
        }
    }


    console.log(hashA)
    console.log(hashB)
    let total = 0
    for (let val in hashA) {
        total += hashA[val]
    }

    for (let val in hashB) {
        total += hashB[val]
    }
    console.log(total)
    return total
}

let a = "bceeeee"
let b = "abceeee"
makeAnagrams(a, b)