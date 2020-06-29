import React from "react";
import Form from "./Form";

class Search extends React.Component {
  state = { searchRecipes: this.props.searchRecipes };
  render() {
    return (
      <>
        <h1>Search:</h1>
        <Form searchRecipes={this.state.searchRecipes} />
      </>
    );
  }
}

export default Search;
