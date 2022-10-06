const printSegitiga = 5
let a = ''
for (let i = 1; i <= printSegitiga; i++) {
    for (let j = 0; j < i; j++) {
        a += i
    }
    console.log(a)
    a = ''
}