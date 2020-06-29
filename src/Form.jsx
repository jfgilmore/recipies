import React from "react";

class Form extends React.Component {
  state = {
    searchQuery: this.props.searchQuery,
    searchRecipes: this.props.searchRecipes,
  };

  onSubmitSearch = (event) => {
    event.preventDefault();
    this.state.searchRecipes(this.state.searchQuery);
  };

  setQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.onSubmitSearch} submit="Search">
        <input
          id="Search"
          type="text"
          placeholder="Hungry?"
          className="search-field"
          value={searchQuery}
          onChange={this.setQuery}
        ></input>
        <input type="submit" value="Search" className="search-button" />
      </form>
    );
  }

  static defaultProps = {
    searchQuery: "",
  };
}

export default Form;
