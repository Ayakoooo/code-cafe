const lessons = [
  // WELCOME PAGE
  {
    guide: "guide-sanrio.png",
    title: "Welcome, Maja! 🌸",
    description: "Hello Maja! We're so happy to have you here. Just like your favorite Sanrio friends, we want to make learning fun and kind. Each lesson has a friendly description, a clear task to help you know what to do, some starter code to get you going and sets up the basics.",
    task: "Get ready to explore the magical world of coding with love and joy!",
    starterCode: `// This is the foundation code we provide - make use of it!`,
    magic: `// This is your magical playground, your place to create and shine!\n// Happy coding ❤️\n\nconsole.log("I will ACE my exam! 🎉")`,
  },
  // KUROMI'S INTRUDCTION
  {
    guide: "guide-kuromi.png",
    title: "Kuromi & Variables",
    description: "Let’s help Kuromi introduce herself using a simple JavaScript variable and a friendly console message!",
    task: "Show Kuromi's name in the console!",
    starterCode: `let name = "Kuromi";`,
    magic: `// Peek-a-boo! 🎀 Who’s that in the console?`,
  },
  // MAKING FRIENDS
  {
    guide: "guide-my-melody.png",
    title: "My Melody & Arrays",
    description: "Let’s make some friends and add them to our list - My Melody says there’s always room for more magical friendships!",
    task: "Display all online friends with a button that adds each friend to the friends list – both in the array and on the page!",
    starterCode: `
const lessonsContainer = document.querySelector('.lessons-container');
lessonsContainer.innerHTML = "";
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const onlineSection = document.createElement('div');
onlineSection.classList.add('online');
const onlineListHeading = document.createElement('h1');
onlineListHeading.textContent = 'Online List';


let online = ['Hello Kitty','Pompompurin','Cinnamoroll','My Melody'];
let friends = [];

const onlineList = document.createElement('ul');
// PART OF THE LOGIC YOU HAVE TO COMPLETE! GOOD LUCK! 






onlineSection.appendChild(onlineListHeading);
onlineSection.appendChild(onlineList);
const friendsSection = document.createElement('div');
friendsSection.classList.add('friends');
const friendsHeading = document.createElement('h1');
friendsHeading.textContent = 'Friends List';
const friendsList = document.createElement('ul');
friendsSection.appendChild(friendsHeading);
friendsSection.appendChild(friendsList);
wrapper.appendChild(onlineSection);
wrapper.appendChild(friendsSection);
lessonsContainer.appendChild(wrapper);

    `,
    magic: `// TIP: PRESS RUN BEFORE WRITING YOUR CODE!`,
  },
  // SWEET HOME TO STAY
  {
    guide: "guide-hello-kitty.png",
    title: "Hello Kitty’s Kawaii Dream Home 🎀🌸",
    description: "Welcome to your very own pastel cottage! Add sparkles of color to the roof, body, and door to make it as magical as you like. Choose a part, pick a shade, and let your imagination do the decorating!",
    task: "Use the color input and select menu to pick a part of the house, then write code to apply the selected color to that part. Time to add some sparkle!",
    starterCode: `
const lessonsContainer = document.querySelector(".lessons-container");
lessonsContainer.innerHTML = '';
const houseHTML = \`
  <div class="house-container">
    <div class="house-roof" id="roof">#roof</div>
    <div class="house-body" id="body">
      #body
      <div class="house-door" id="door">#door</div>
    </div>
    <div class="house-controls">
      <input type="color" id="color-input" />
      <select id="part-select">
        <option value="roof">Roof</option>
        <option value="body">Body</option>
        <option value="door">Door</option>
      </select>
      <button id="color-button">Paint 🎨</button>
    </div>
  </div>
\`;

lessonsContainer.innerHTML += houseHTML;
  `,
    magic: `//TIP: PRESS RUN BEFORE WRITING YOUR CODE!`,
  },
  // EXPRESSING LOVE
  {
    guide: "guide-sanrio-2.png",
    title: "Lollipop Gift & Array Methods",
    description: "We’ve made some friends and found a beautiful place to stay! Let’s give each of them a sweet lollipop to show some love and display them on the page!",
    task: "Use map or forEach to add a 🍭 to each friend’s name and display it in innerHTML!",
    starterCode: `const lessonsContainer = document.querySelector(".lessons-container");
lessonsContainer.innerHTML = "";

let friends = ["Pompompurin", "My Melody", "Cinnamoroll", "Kuromi"];

const container = document.createElement('div');
container.classList.add('container');
lessonsContainer.appendChild(container);
`,
    magic: `
// Your code here to add lollipops 🍭 and show names
`.trim(),
  },
  // POMPOMPURIN'S RECIPE
  {
    guide: "guide-pompompurin.png",
    title: "Pompompurin’s Recipe for Happiness 🍮🍰",
    description: "Pompompurin is baking a happiness cake and needs your help to list all the ingredients on the page! Let’s share his recipe for a sweet day.",
    task: "Write a showRecipe() function that adds each ingredient as a list item (<li>) inside a <ul> (recipeBox) on the page. For extra fun, give a special color to any ingredient whose index modulo is not 0 - let them shine with a sprinkle of style!",
    starterCode: `const lessonsContainer = document.querySelector(".lessons-container");
lessonsContainer.innerHTML = "";

const ingredients = [
  "Sprinkles of kindness",
  "A cup of laughter",
  "A dash of creativity",
  "A spoonful of hugs"
];


const recipeBox = document.createElement("ul");
recipeBox.className = "recipe-box";
lessonsContainer.appendChild(recipeBox);`,
    magic: ``,
  },
  // Final Congratulations
  {
    title: "YOU DID IT, Maja! 🎓🌟",
    description: "Our journey together has come to a sweet end! Just like Sanrio friends never say goodbye, we’re only saying 'see you later'.",
    task: "Sanrio wishes you the best of luck on your exam – you’re going to do amazing, we believe in you! 💖✨",
    starterCode: `// Fries? Bunger? Candies?! Ebab?? You can have it all! Bonus Task: Create a storage of your favourite food or... do whatever you wish!`,
    magic: `console.log("Thank you, Sanrio! I’m ready to shine! 💪🌸")`,
  },
];

export default lessons;


