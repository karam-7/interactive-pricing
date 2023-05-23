// Get the required elements
const range = document.getElementById('range');
const price = document.getElementById('price');
const page = document.getElementById('page');
const select = document.getElementById('select');
const priceSup = document.querySelector('.price-sup');

// Define the range values and corresponding prices
const rangeValues = [
  { value: 10, price: 10 },
  { value: 20, price: 20 },
  { value: 30, price: 30 },
  { value: 40, price: 40 },
  { value: 50, price: 50 },
  { value: 60, price: 60 },
  { value: 70, price: 70},
  { value: 80, price: 80 },
  { value: 90, price: 90 },
  { value: 100, price: 100 },
];

// Function to format the page value
const formatPageValue = (value) => {
  if (value === 1000) return '1M' + ' Pageviews';
  return value +  'K'  + ' Pageviews';
};

// Function to update the pricing component
const updatePricing = () => {
  const value = parseInt(range.value);
  const selectedOption = select.checked ? 'year' : 'month';
  const rangeValue = rangeValues.find((item) => item.value === value);
  let calculatedPrice = rangeValue.price;
 
  range.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`;
 
  if (selectedOption === 'year') {
    calculatedPrice *= 3;
    priceSup.textContent = '/year';
  } else {
    priceSup.textContent = '/month';
  }
 
  price.textContent = calculatedPrice.toFixed(2);
  page.textContent = formatPageValue(value * 10);
};

// Add event listeners
range.addEventListener('input', updatePricing);
select.addEventListener('change', updatePricing);

// Initialize the pricing component
updatePricing();
