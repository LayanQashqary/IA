// Get the quantity inputs, subtotal elements, and checkout button
const mealQuantityInput = document.getElementById('meal-quantity');
const snackQuantityInput = document.getElementById('snack-quantity');
const mealSubtotal = document.querySelector('tr:nth-child(1) td:nth-child(4)');
const snackSubtotal = document.querySelector('tr:nth-child(2) td:nth-child(4)');
const totalCostElement = document.getElementById('total-cost');
const checkoutBtn = document.getElementById('checkout-btn');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');


// Add event listeners to the quantity inputs
mealQuantityInput.addEventListener('input', () => updateSubtotal('meal'));
snackQuantityInput.addEventListener('input', () => updateSubtotal('snack'));

// Add event listener to the checkout button
checkoutBtn.addEventListener('click', () => {
  if (nameInput.value !== '' && phoneInput.value !== '' && emailInput.value !== '' && cityInput.value !== ''){
  // Calculate the total cost based on the quantity inputs and product prices
  const mealPrice = 50;
  const snackPrice = 2;
  const mealQuantity = mealQuantityInput.value;
  const snackQuantity = snackQuantityInput.value;
  const totalCost = mealPrice * mealQuantity + snackPrice * snackQuantity;

  // Update the total cost element with the new value
  totalCostElement.textContent = `$${totalCost.toFixed(2)}`;

  // Display an alert with the total cost
  alert(`Your total cost is $${totalCost.toFixed(2)}. Thank you for your purchase!`);
}});


// Function to update the subtotal and total cost values
function updateSubtotal(product) {
  // Get the quantity and price values for the specified product
  const quantityInput = product === 'meal' ? mealQuantityInput : snackQuantityInput;
  const price = product === 'meal' ? 50 : 2;
  const quantity = Number(quantityInput.value);

  // Calculate the new subtotal and updatethe corresponding element
  const subtotal = price * quantity;
  const subtotalElement = product === 'meal' ? mealSubtotal : snackSubtotal;
  subtotalElement.textContent = `$${subtotal}`;

  // Calculate the new total cost and update the total cost element
  const mealQuantity = Number(mealQuantityInput.value);
  const snackQuantity = Number(snackQuantityInput.value);
  const totalCost = 50 * mealQuantity + 2 * snackQuantity;
  totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}

//confirming the shipping 
const confirmShipping = document.getElementById('submitShipping');

confirmShipping.addEventListener('click', function() {
  // code to perform when the button is clicked
  alert('Shipping address confirmed!');
});