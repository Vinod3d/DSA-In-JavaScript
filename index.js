const x = [1, 4, 6, 0, -9, -2, -5, -1];

// Sort in ascending order
const ascendingOrder = x.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);

// Sort in descending order
const descendingOrder = x.slice().sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);