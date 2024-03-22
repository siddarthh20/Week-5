const citiesContainer = document.getElementById('cities-container');

// Define an array of cities with their information
const cities = [
  { name: 'Pune', population: '3.1 million', state: 'Maharashtra', image: 'https://media.licdn.com/dms/image/C4E12AQFr3H42omms0w/article-cover_image-shrink_600_2000/0/1597410010973?e=2147483647&v=beta&t=n2Z9asqdzlZS3p4auBzTy6iJJy2F9qvgtf75e6VpVkA' },
  { name: 'Bangalore', population: '12.3 million', state: 'Karnataka', image: 'https://media.gettyimages.com/id/1382384512/photo/bangalore-or-bengaluru.jpg?s=612x612&w=gi&k=20&c=YeV-07x82Yx50ekTh99C4jcajCegMunBusdvIsEbW9c=' },
  { name: 'Delhi', population: '18.9 million', state: 'Delhi', image: 'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_640.jpg' }
];

// Iterate over each city and create HTML elements for them
cities.forEach((city, index) => {
  const cityElement = document.createElement('div');
  cityElement.classList.add('city');

  // Create an h2 element for the city name
  const cityName = document.createElement('h2');
  cityName.textContent = city.name;

  // Create a p element for the city population and state
  const cityInfo = document.createElement('p');
  cityInfo.textContent = `Population: ${city.population}, State: ${city.state}`;

  // Append city name and info to city container
  cityElement.appendChild(cityName);
  cityElement.appendChild(cityInfo);

  // Create an image element for the city
  const cityImage = document.createElement('img');
  cityImage.src = city.image;
  cityImage.alt = city.name;

  // Append image to city container
  if (index === 0) {
    // Append the 1st image at the top
    cityElement.insertBefore(cityImage, cityName);
  } else if (index === 1) {
    // Append the 2nd image in the middle
    cityElement.insertBefore(cityImage, cityInfo);
  } else {
    // Append the 3rd image at the bottom
    cityElement.appendChild(cityImage);
  }

  // Append city container to cities container
  citiesContainer.appendChild(cityElement);
});