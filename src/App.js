import React from "react";
import "./App.css";
import Search from "./Search";
import Recipes from "./Recipes";
import axios from "axios";

class App extends React.Component {
  state = { recipes: "" };
  searchRecipes = async (query) => {
    //API Call
    try {
      await axios("https://api.spoonacular.com/recipes/search", {
        params: {
          apiKey: "b721b73b63914797b9dac644cb6ec01c",
          query: query,
        },
      }).then((recipes) => {
        this.setState({ recipes: recipes.data.results });
      });
    } catch (err) {
      console.log(err);
    }
    return 1;
  };

  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipes</h1>
          <Search searchRecipes={this.searchRecipes} />
        </header>
        <Recipes recipes={recipes || []} />
      </div>
    );
  }
}

export default App;
