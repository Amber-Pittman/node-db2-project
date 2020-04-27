
exports.seed = async function(knex) {
  await knex("cars").truncate()

  // Insert some test data
  await knex("cars").insert([
    { 
      VIN: "1J4GL58566W151850", 
      Make: "Toyota", 
      Model: "Tacoma", 
      Mileage: 235000,
      Transmission: "4-speed automatic",
      Title: "Clear"
    },
    { 
      VIN: "9BFXH81A3LDM92264", 
      Make: "Nissan", 
      Model: "Altima", 
      Mileage: 168000,
      Transmission: "Continuous Variable Transmission",
      Title: "Clear"
    },
    { 
      VIN: "WVGCM67LX4D067655", 
      Make: "Suzuki", 
      Model: "Sidekick", 
      Mileage: 80000,
      Transmission: "5-speed manual",
      Title: "Salvage"
    },
    { 
      VIN: "1FDKF37G9RNB16031", 
      Make: "Dodge", 
      Model: "Charger", 
      Mileage: 26000,
      Transmission: "8-speed automatic",
      Title: ""
    },
  ])
};
