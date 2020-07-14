import AsyncStorage from "@react-native-community/async-storage";

export class taskStorage {
  static defaultHealth = {
    list: [
      {
        name: "Take medication",
        description:
          "Take your daily medication. Write the names of your medications here.",
        steps: [
          { description: "Pour a glass of water" },
          {
            description: "Take out the correct number of pills for your dosage",
          },
          {
            description:
              "Follow the instructions on the bottle to take the pills",
          },
        ],
      },
      {
        name: "Go on a run",
        description:
          "Get your body moving! Do some exercise by going on a run.",
        steps: [
          { description: "Put on appropriate running clothes" },
          { description: "Lace up your sneaker" },
          { description: "Don't forget a house key" },
          {
            description:
              "Bring a bottle of water if you're going on a long run",
          },
        ],
      },
      {
        name: "Drink water",
        description: "Drink 8 glasses of water in a day to stay hydrated.",
        steps: [
          { description: "Drink water with every meal" },
          { description: "Drink a glass of water whenever you're thirsty" },
          {
            description:
              "Make sure to drink more water if you've been sweating",
          },
        ],
      },
      {
        name: "Check blood pressure",
        description:
          "Check your blood pressure periodically to stay on top of your health.",
        steps: [
          { description: "Put the cuff on your arm, not over clothes" },
          {
            description: "Press the button on the machine to inflate the cuff",
          },
          {
            description: "Make a note of the blood pressure reading",
          },
        ],
      },
    ],
  };
  static defaultHome = {
    list: [
      {
        name: "Make the bed",
        description: "Start each day by making your bed!",
        steps: [
          { description: "Straighten out the covers" },
          { description: "Tuck bottom of covers into the mattress" },
          {
            description: "Arrange the pillows",
          },
        ],
      },
      {
        name: "Take out the trash",
        description: "Take out the trash if it is full.",
        steps: [
          { description: "Check trash bin to see if it is full" },
          { description: "Tie the garbage bag closed" },
          { description: "Bring the garbage bag outside" },
          {
            description: "Put a new garbage bag in the bin",
          },
        ],
      },
      {
        name: "Wash the dishes",
        description:
          "Wash the dishes after every meal so that they don't pile up.",
        steps: [
          { description: "Put dirty dishes on one side of the sink" },
          { description: "Rinse a dirty plate with water" },
          {
            description:
              "Put some dish soap on a sponge and scrub the plate until it is clean",
          },
          {
            description:
              "Dry the plate with a towel and put it on the other side of the sink",
          },
          { description: "Repeat until all dishes are clean" },
        ],
      },
      {
        name: "Walk the dog",
        description: "Take care of your dog by taking it on a walk.",
        steps: [
          { description: "Get dressed to go on a walk" },
          { description: "Grab a leash for your dog and some plastic bags" },
          {
            description: "Use the plastic bags to clean up after the dog",
          },
          { description: "Make sure the dog has water if it is hot outside" },
        ],
      },
    ],
  };
  static defaultSchool = {
    list: [
      {
        name: "Pack notebooks",
        description:
          "Make sure you have everything you need for the school day.",
        steps: [
          { description: "Pack any textbooks you will need" },
          {
            description:
              "Pack your notebooks so you can write down notes in class",
          },
          {
            description:
              "Make sure to pack any homework that is due and needs to be handed in",
          },
        ],
      },
      {
        name: "Prepare lunch",
        description: "Pack a lunch for today.",
        steps: [
          { description: "Get your lunchbox or a paper bag" },
          {
            description:
              "Pack a balanced meal (a sandwich is a great choice, but you can be creative)",
          },
          { description: "Pack a drink (water is a healthy option)" },
          {
            description:
              "Make sure to add an icepack if the food needs to be kept cool",
          },
        ],
      },
      {
        name: "Choose outfit",
        description: "Pick out something to wear today!",
        steps: [
          { description: "Check the weather forecast" },
          {
            description:
              "If it will be cold, wear heavier clothes (sweater, long pants, underwear, socks, shoes)",
          },
          {
            description:
              "If it will be warm, wear lighter clothes (T-shirt, shorts, underwear, maybe sandals?)",
          },
          {
            description:
              "Dry the plate with a towel and put it on the other side of the sink",
          },
          { description: "Get dressed!" },
        ],
      },
      {
        name: "Walk the dog",
        description: "Take care of your dog by taking it on a walk.",
        steps: [
          { description: "Get dressed to go on a walk" },
          { description: "Grab a leash for your dog and some plastic bags" },
          {
            description: "Use the plastic bags to clean up after the dog",
          },
          { description: "Make sure the dog has water if it is hot outside" },
        ],
      },
    ],
  };

  static health = [];
  static home = [];
  static school = [];
  static other = [];

  static storeDefaultTask = async () => {
    try {
      console.log(JSON.stringify(this.defaultHealth));
      const jsonHealthValue = JSON.stringify(this.defaultHealth["list"]);
      await AsyncStorage.setItem("health", jsonHealthValue);
      const jsonHomeValue = JSON.stringify(this.defaultHome["list"]);
      await AsyncStorage.setItem("home", jsonHomeValue);
      const jsonSchoolValue = JSON.stringify(this.defaultSchool["list"]);
      await AsyncStorage.setItem("school", jsonSchoolValue);

      this.health = this.defaultSchool;
      this.home = this.defaultHome;
      this.school = this.defaultSchool;
    } catch (e) {
      console.error(e);
    }
  };

  static getHealth = () => {
    return this.health;
  };

  static addHealthItem = async (value) => {
    try {
      this.health["list"].push(value);
      const jsonHealthValue = JSON.stringify(this.health);
      await AsyncStorage.setItem("health", jsonHealthValue);
    } catch (e) {
      console.error(e);
    }
  };

  static printHealth = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("health");
      console.log(JSON.stringify(jsonValue));
    } catch (error) {
      console.error(e);
    }
  };
}
