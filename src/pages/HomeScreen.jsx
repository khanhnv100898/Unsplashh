import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Preview from "../components/Preview";

export default class HomeScreen extends Component {
  state = {
    total: 0,
    data: [],
    imageUrl: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const accessKey = "UR1MPup4LexcKoTs7dYHT12XLyOlJ6yhReGBDtaeivI";
    let pageNumber = Math.floor(Math.random() * 1000) + 1;
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${pageNumber}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          {this.state.data.map((item) => {
            return (
              <div>
                <Preview imageUrl={`${item.urls.raw}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
