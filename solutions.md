# WELCOME PAGE

!! <3

# KUROMI'S INTRODUCTION

```js
console.log(name);
```

# MAKING FRIENDS

```js
online.forEach((friend) => {
  const item = document.createElement("li");
  const addButton = document.createElement("button");

  item.innerHTML = friend;
  addButton.innerHTML = "Add";

  addButton.addEventListener("click", () => {
    friends.push(friend);

    const friendItem = document.createElement("li");
    friendItem.innerHTML = friend;
    friendsList.appendChild(friendItem);

    item.remove();
  });

  item.appendChild(addButton);
  onlineList.appendChild(item);
});
```

# SWEET HOME TO STAY

```js
const colorInput = document.getElementById("color-input");
const partSelect = document.getElementById("part-select");
const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", () => {
  const color = colorInput.value;
  const partId = partSelect.value;
  const part = document.getElementById(partId);
  if (partId === "roof") {
    part.style.borderBottom = `80px solid ${color}`;
  } else {
    part.style.backgroundColor = color;
  }
});
```

# EXPRESSING LOVE

```js
friends.forEach((friend) => {
  const item = document.createElement("div");
  item.innerHTML = friend + " 🍭";
  container.appendChild(item);
});
```

# POMPOMPURIN'S RECIPE

```js
function showRecipe() {
  ingredients.forEach((ingredient, index) => {
    const item = document.createElement("li");
    item.innerHTML = ingredient;

    if (index % 2 !== 0) {
      item.style.color = "hotpink";
    }

    recipeBox.appendChild(item);
  });
}
```
