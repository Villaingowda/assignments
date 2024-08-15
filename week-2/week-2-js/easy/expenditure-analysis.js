/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  // Step 1: Initialize an empty object to keep track of total spending by category
  const categoryMap = {};

  // Step 2: Iterate over each transaction
  transactions.forEach((transaction) => {
    // Step 2a: Destructure the 'category' and 'price' properties from the transaction object
    const { category, price } = transaction;

    // Step 2b: Update the total amount spent for the current category
    // If the category already exists in categoryMap, add the current price to it
    // Otherwise, initialize the category with the current price
    categoryMap[category] = categoryMap[category] ? categoryMap[category] + price : price;
  });

  // Step 3: Transform the categoryMap object into an array of objects
  return Object.keys(categoryMap).map((category) => ({
    // For each category, create an object with 'category' and 'totalSpent'
    category: category,
    totalSpent: categoryMap[category]
  }));
}

module.exports = calculateTotalSpentByCategory;
