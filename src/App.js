import React, { Component } from "react";
import { get as getBowlers } from "./mockApi/bowlerApi";
import { get as getLeagues } from "./mockApi/leagueApi";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlers: [],
      bowlerLeagues: [],
      selectedBowler: undefined
    };
  }

  componentDidMount() {
    let bowlers = getBowlers();
    this.setState({ bowlers: bowlers });
  }

  getLeagues(id) {
    console.log(id);
    let leagues = getLeagues(id);
    let bowler = this.state.bowlers.find(b => b.id === id);
    this.setState({ bowlerLeagues: leagues, selectedBowler: bowler });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Bowler Log</h1>
        </header>
        <div className="container" />
        <div style={{ padding: "25px" }}>
          {this.state.bowlers.map(b => (
            <div key={b.id}>
              <a
                href="#"
                onClick={this.getLeagues.bind(this, b.id)}
              >{`${b.firstName} ${b.lastName}`}</a>
            </div>
          ))}
        </div>
        {this.state.selectedBowler && (
          <div>
            <h1>
              {`${this.state.selectedBowler.firstName} ${this.state
                .selectedBowler.lastName}'s`}{" "}
              Leagues
            </h1>
            {this.state.bowlerLeagues.map(l => {
              return <div>{l.name}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
