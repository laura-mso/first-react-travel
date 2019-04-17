import React from "react";
import "./App.css";

const locations = [
  {
    destination: "Sunwaves Festival (Mamaia)",
    country: "Romania",
    photo:
      "https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/31727846_10216616021338557_7283916495636135936_o.jpg?_nc_cat=106&_nc_eui2=AeGx9w2ZvDo2dY-YfUiGPdfh_TjtSwG0_ZWbV5cqVImQdTDq5EfthipTb4ACUEQt3kphvXcBbWBfBgF1qrFhHk3Ajqk9QWHY1qvbkTHsO24NhA&_nc_ht=scontent.ffra1-1.fna&oh=d3130c6383a0723eb8d4f15e3c6fc684&oe=5D340494",
    distance: "1900"
  },
  {
    destination: "Off-Sonar (Barcelona)",
    country: "Spain",
    photo:
      "https://scontent.ffra1-1.fna.fbcdn.net/v/t31.0-8/19144167_1585129298163767_8216604057020465419_o.jpg?_nc_cat=103&_nc_eui2=AeHhpBq5QhGe4lohWIuclbJmqw4KEaoSIxUgsD9WuuTpSeMHo4IcUxnACjXpzTAHKSlleluOK7f916OVY0V5cUN3eSuztzg7fDA_qKV25d8YCw&_nc_ht=scontent.ffra1-1.fna&oh=9f6f1962d7582113164939c0434ddf81&oe=5D3FAABF",
    distance: "1800"
  },
  {
    destination: "Dimensions (Pula)",
    country: "Croatia",
    photo:
      "https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/41320074_10217740660287508_9047793086599528448_n.jpg?_nc_cat=109&_nc_eui2=AeFz24XbUrN15MftW5nR7iVNZxN9C0DDx_SBPgA2Tw1hHMUpY1qyaTjmyr_k565JIBsr0jI5xBsqooq_Uu9Z3xWs_TbvL7PoMpvhvv8tIg4Weg&_nc_ht=scontent.ffra1-1.fna&oh=3f292136add482145c57f42521c5b268&oe=5D378ABE",
    distance: "1100"
  },
  {
    destination: "Something Slow Picnic & Open Air (Berlin)",
    country: "Germany",
    photo:
      "https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/38926452_10217514472632958_7195928455580483584_n.jpg?_nc_cat=102&_nc_eui2=AeHtTWYF7eGIvtP34WuZGyHI-jK40TTMX-xQfuS0S3G4ZnQ86-q563yXRTx0KJspXadKvS4QWN8wX21_c0B_4eoOVSJF6BnffHOSB8NYGPrjfA&_nc_ht=scontent.ffra1-1.fna&oh=f5988507124a12bd56b6b955e1497557&oe=5D049351",
    distance: "0"
  },
  {
    destination: "Uferlos (Basel)",
    country: "Switzerland",
    photo:
      "https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/1558472_10203543156478786_1098379979_n.jpg?_nc_cat=105&_nc_eui2=AeHpFW9uEuQYuEedGaFfZZIb8WldL-DuOknWIxUYBSIHZnSqa-Ie-xXMsqRattQEux90i8gXJRtGXQRCvDpoou542RjEPeGSS1lS7wyp_60cbA&_nc_ht=scontent.ffra1-1.fna&oh=6ae576f76fb1af903ca90588c26bd593&oe=5D3B7096",
    distance: "800"
  }
];

const Location = () => (
  <div>
    {locations.map((locations, index) => (
      <React.Fragment>
        <hr id="Line" />
        <h2 key={index}>{locations.destination}</h2>
        <h3>{locations.country}</h3>
        <img src={locations.photo} alt={locations.destination} />
        <p>{locations.distance} km from Berlin</p>
      </React.Fragment>
    ))}
  </div>
  // <h3>{country}</h3>
  // <img src={photo} alt={destination} />
  // <p>{distance} km from Berlin</p>
  // <hr />
);

export default Location;
