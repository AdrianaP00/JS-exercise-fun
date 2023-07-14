const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const visitedCities = cities.map(city => {
  if (city.isVisited) {
    city.name += ' (Visitado)';
  }
  return city;
});

console.log(visitedCities);