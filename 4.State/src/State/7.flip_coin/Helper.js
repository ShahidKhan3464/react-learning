function choice(coin) {
    let newCoin = coin[Math.floor(Math.random() * coin.length)]
    return newCoin
}

export { choice };