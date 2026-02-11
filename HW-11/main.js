//----------------------2-----------------------------
//– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch("https://dummyjson.com/recipes?limit=50")
    .then(res => res.json())
    .then((recipesObject) => {
        console.log(recipesObject);
        recipes = recipesObject.recipes;
        for (let recipe of recipes) {
            let reciepeDiv = document.createElement("div");
            reciepeDiv.className = "wrapperReciepe";
            let ulIngredient = document.createElement("ul");
            let spanUl = document.createElement("span");
            spanUl.innerText = "Ingredients:";
            document.body.append(reciepeDiv,);
            for (let recipeKey in recipe) {
                let infoReciepDiv = document.createElement("div");
                if (recipeKey === "ingredients"){
                    infoReciepDiv.append(spanUl, ulIngredient);
                    for (let recipeElement of recipe.ingredients) {
                        let liIngredient  = document.createElement("li");
                        liIngredient.innerText = recipeElement;
                        ulIngredient.append(liIngredient);
                    }


                } else if (recipeKey === "image"){
                    let img = document.createElement("img");
                    img.src = recipe.image;
                    let divImg = document.createElement("div");
                    divImg.className = "title";
                    divImg.innerText = "Image:";
                    infoReciepDiv.append(divImg, img);
                } else

                    infoReciepDiv.innerHTML = `<span> ${recipeKey}:</span> ${recipe[recipeKey]}`;
                    reciepeDiv.append(infoReciepDiv);
            }
        }

    });