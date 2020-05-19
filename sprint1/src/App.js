import "./styles/main.css";
import React from "react";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import Videos from "./components/Videos";
import Intro from "./components/Intro";
import CommentsForm from "./components/CommentsForm";
import PostedComments from "./components/PostedComments"; //////////////////////////////////

/*DECLARING COMMENT ARRAY OF OBJECTS*/

const comment = [
  {
    name: "Michael Lyons",
    date: "05/18/2020",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "05/09/2020",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "12/13/2019",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

class App extends React.Component {
  //Declaring video data as state
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
        comments: comment,
      },
    ],
  };

  render() {
    return (
      <section>
        <Header />
        <MainVideo />
        <section className="main-wrapper">
          <div className="main__column--right">
            <Intro currentVideoInfo={this.state.currentVideo} />

            <CommentsForm />
            <ul className="comment__container">
              <PostedComments
                postedComments={this.state.currentVideo[0].comments}
              />
            </ul>
          </div>

          <aside className="upnext">
            <Videos sideVideos={this.state.sideVideos} />
          </aside>
        </section>
      </section>
    );
  }
}
export default App;
