const users = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  let arrayWave = 0;
  let arrayShower = 0;
  let arrayWind = 0;
  let arrayFirecamp = 0;
  let arrayTrain = 0;
  
  for (const user of users) {
    const userKeys = Object.keys(user.favoritesSounds);
  
    userKeys.forEach((key) => {
  
      switch (key) {
        case "waves":
          arrayWave++;
          break;
  
        case "wind":
          arrayWind++;
          break;
  
        case "firecamp":
          arrayFirecamp++;
          break;
  
        case "shower":
          arrayShower++;
          break;
  
        case "train":
          arrayTrain++;
          break;
      }
    });
  }
  console.log(arrayWave);
  