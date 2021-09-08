import React, { useState } from "react";
import profile from "./assets/profile.jpg";
import caloriebalance from "./assets/caloriebalance.png";
import compiler from "./assets/compiler.jpeg";
import skymail from "./assets/skymail.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const styles = {
    image: {
      borderRadius: "10%",
    },
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-4">
          <img src={profile} alt="Profile" height={350} style={styles.image} />
        </div>
        <div className="p-3 col-md-8">
          <h1 className="display-4">Jeremy Persing</h1>
          <p className="lead">
            Welcome to my portfolio. Here I have three personal projects. The
            tech stacks vary on all three projects, ranging from a full stack
            JavaScript web app to a C compiler.
          </p>
        </div>
      </div>
      <h1 className="mt-4 display-4 text-center">Projects</h1>
      <div className="mt-5 mb-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caloriebalance}
              alt="Calorie Balance"
            />
            <Carousel.Caption>
              <h3>CalorieBalance</h3>
              <p>
                Using React, Bootstrap, Node.js, Express & MongoDB this
                application allows a user to create an account enter some
                information and then get started on achieving their diet goals.
                It allows the user to create custom meals and maps out specific
                daily, weekly, and monthly plans for the user to reach their
                weight loss, weight maintenance, or weight gain goals. To see a
                repo of the project, click{" "}
                <a href="https://github.com/JeremyPersing/calorie-counter/tree/main">
                  here
                </a>
                .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={skymail} alt="Skymail" />

            <Carousel.Caption>
              <h3>SkyMail 3000</h3>
              <p>
                Using Java and the SDK Codename One, this game allows the user
                to maneuver their helicopter reaching different objectives while
                trying to dodge oncoming object. It is a multilevel game and is
                incredibly hard to beat. To see a repo of the project, click{" "}
                <a href="https://github.com/JeremyPersing/SkyMail3k">here</a>.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={compiler} alt="Compiler" />

            <Carousel.Caption>
              <h3>Baby C Compiler</h3>
              <p>
                Using C, this compiler scans source code that is written in Baby
                C, a subset of the C language, and converts it into an
                intermediate assembly language known as ILOC. To see a repo of
                the project, click{" "}
                <a href="https://github.com/JeremyPersing/baby-c-compiler">
                  here
                </a>
                .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
