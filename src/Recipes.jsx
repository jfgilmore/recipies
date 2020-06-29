import React from "react";
import "./Recipes.css";

class Recipes extends React.Component {
  render() {
    const { recipes } = this.props;
    return (
      <ul className="recipes">
        {recipes.map((recipe, key) => {
          return (
            <li className="recipe" key={key}>
              <h3>{recipe.title}</h3>
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                alt={recipe.image}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Recipes;
