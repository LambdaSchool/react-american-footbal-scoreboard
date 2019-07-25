//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  /*
  var
  -homeScore : output is number = 0;
  -awayScore : output is number = 0;

  functions 
  -changeHome : function change the homeScore value
  -awayScore :  function change the awayScore value

  */ 
const [homeScore,changeHome] = useState(0);
const [awayScore,changeAway] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

        {/* change the state of the
         homeButtons__touchdown
          by adding 3 points */
          }
          <button className="homeButtons__touchdown" onClick={() =>{
            changeHome(homeScore + 3)
          }}>Home Touchdown</button>

          {/* change the state of the 
           homeButtons__fieldGoal
            by adding 7 points */
            }
          <button className="homeButtons__fieldGoal" onClick={() => {
            changeHome(homeScore + 7)
          }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">

        {/* change the state of the 
        awayButtons__touchdown
         by adding 3 points */
         }
          <button className="awayButtons__touchdown" onClick={() => {
            changeAway(awayScore + 3)
          }}>Away Touchdown</button>


          {/* change the state of the  
            awayButtons__fieldGoal
           by adding 7 points */
           }
          <button className="awayButtons__fieldGoal" onClick={() => {
            changeAway(awayScore + 7)
          }}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
