const choice = (fruits) => {
    const choicefruit = fruits[Math.floor(Math.random() * fruits.length)]
    return choicefruit;
}

const remove = (fruits, fruit) => {
    for (let left = 0; left < fruits.length; left++) {
        if (fruits[left] === fruit) {
            return [...fruits.slice(0, left), ...fruits.slice(left + 1)]
        }
    }
}

export { choice, remove };