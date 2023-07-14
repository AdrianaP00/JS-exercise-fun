const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const input = document.querySelector('input');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const word = input.value;

  const filteredStreamers = streamers.filter(streamer => streamer.name.includes(word));

  console.log(filteredStreamers);
});