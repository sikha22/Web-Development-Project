import { Component } from "react";

class ApiExp extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    let url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=harry+potter&format=json&origin=*";

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const list = this.state.data.map((val, index) => {
      return <li key={index}>{val}</li>;
    });

    return <ul>{list}</ul>;
  }
}

export default ApiExp;
