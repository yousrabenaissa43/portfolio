// Array describing the options of the navigation elements
const navigationOptions = [
  { name: 'home', color: '#5B37B7' },
  { name: 'likes', color: '#C9379D' },
  { name: 'search', color: '#E6A919' },
  { name: 'profile', color: '#1892A6' }
];

// Target all anchor link elements
const links = document.querySelectorAll('nav a');

// Function called in response to a click event on the anchor link
function handleClick(e) {
  // e.preventDefault(); // Comment this out to allow default anchor behavior

  // Remove the 'active' class from all links
  links.forEach(link => link.classList.remove('active'));

  // Retrieve the option described in the link element
  const name = this.textContent.trim().toLowerCase();

  // Find the matching color from the array
  const option = navigationOptions.find(item => item.name === name);
  if (option) {
      const { color } = option;

      // Explicitly set CSS variables on the clicked element
      this.style.setProperty('--hover-bg', `${color}20`);
      this.style.setProperty('--hover-c', color);
  }

  // Apply the 'active' class
  this.classList.add('active');

  // Scroll to the corresponding section smoothly
  const targetSection = document.querySelector(this.getAttribute('href'));
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// Listen for a click event on each and every anchor link
links.forEach(link => link.addEventListener('click', handleClick));
