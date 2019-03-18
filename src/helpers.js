function choice(items) {
    const randomIdx = Math.floor(Math.random() * items.length-1);
    return items[randomIdx];
}

// remove returns specified item 
// or undefined if not found
function remove(items, item) {
    for (let i=0; i<items.length; i++) {
        if (items[i]===item) {
            return items.splice(i,1);
        }
    }
}

export { choice, remove };