function a(num) {
    if (num === 0) {
        return 0
    } else {
        return 1 + a(num - 1)
    }
}

console.log(a(5))