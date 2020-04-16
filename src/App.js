import React from 'react';
import { Typography } from '@material-ui/core';
import Cards from './components/Cards/Cards';

import styles from './App.module.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            seconds: 60,
            status: true,
            score: 0
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.addScore = this.addScore.bind(this);
      }

    countDown() {
        let reducedTime = this.state.seconds - 1;
        this.setState({
            seconds: reducedTime
        })
        if (reducedTime === -1) {
            alert("Time's Up!");
            this.setState({
                status: true,
                seconds: 60
            })
            clearInterval(this.timer);
            this.timer = 0;
        }
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.setState({
                status: false,
                score: 0
            })
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    addScore() {
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        return (
            <div>
                <Typography variant="h3" className={styles.title}>SleepyTaboo</Typography>
                <div className={styles.titleBox}>
                {(this.state.status) ?
                <Typography variant="h4" className={styles.title} onClick={this.startTimer}>Start</Typography> 
                :
                <div>
                    <div className={styles.floatbox}><Typography variant="h4" className={styles.float}>{this.state.seconds}</Typography></div>
                    <div className={styles.floatbox}><Typography variant="h4" className={styles.float}>{this.state.score}</Typography></div>
                </div>
                }
                </div>
                <Cards addScore={this.addScore} />
            </div>
        )
    }
}

export default App;