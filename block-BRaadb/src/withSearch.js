import { Component } from "react";

function withSearch(ComponentName) {
  return class extends Component {
    state = {
      searchTerm: "",
    };

    handleChange = ({ target: { value } }) => {
      this.setState({ searchTerm: value });
    };

    render() {
      return (
        <ComponentName handleChange={this.handleChange} state={this.state} />
      );
    }
  };
}

export default withSearch;
