const arr = [3, 43, 12, 24]
const obj = { a: 1, b: 2 }
const arr2 = [12, 12, [12, 21], 'helfjds']

const sum = Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = obj[curr]
    return acc
}, {})
// const newArr = arr.filter(x => x > 20)
const newArr = arr.reduce((a, c) => c > 20 ? [...a, c] : a, [])

console.log(sum);

