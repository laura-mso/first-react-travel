import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class FavoriteFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      name: "",
      poster: "",
      comment: ""
    });
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie added in database with ID ${res}`);
        }
      })
      .catch(e => {
        console.error(e);
        alert(
          "We were not able to store that movie successfully. Please try again."
        );
      });
  }

  render() {
    return (
      <div>
        <h1>Favorite Movie</h1>
        <div className="FormEmployee">
          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Add your favorite</legend>
              <div className="form-data">
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="form-data">
                <label htmlFor="poster">Poster URL</label>
                <input
                  type="url"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div className="form-data">
                <label htmlFor="comment">Description</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Save" />
              </div>
            </fieldset>
          </form>
        </div>
        <Link to="/wcs-first-react-travel" className="homepagelink">
          {" "}
          &#8592; Back to homepage
        </Link>
      </div>
    );
  }
}
