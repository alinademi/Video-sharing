import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React from "react";

class App extends React.Component {
  state = {
    sideVideos: [
      {
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "./images/video-list-1.jpg",
      },
      {
        title: "Les Houches The Hidden Gem Of The ...",
        channel: "Cornelia Blair",
        image: "./images/video-list-2.jpg",
      },
      {
        title: "Travel Health Useful Medical Information ...",
        channel: "Glen Harper",
        image: "./images/video-list-3.jpg",
      },
      {
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "./images/video-list-4.jpg",
      },
      {
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "./images/video-list-5.jpg",
      },
      {
        title: "Choose the Perfect Accommodations",
        channel: "Lydia Perez",
        image: "./images/video-list-6.jpg",
      },
      {
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "./images/video-list-7.jpg",
      },
      {
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "./images/video-list-8.jpg",
      },
    ],
    currentVideo: [
      {
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "Red Cow",
        image: "./images/video-list-0.jpg",
        views: "1,001,023",
        likes: "110,985",
        duration: "type of <string>",
        video: "type of <string>",
        timestamp: "12/18/2018",
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}
export default App;
