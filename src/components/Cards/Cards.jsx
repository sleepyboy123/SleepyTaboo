import React , {useState} from 'react';
import { Card, Typography } from '@material-ui/core';

import styles from './Cards.module.css';

let completed = [];

const Cards = ({ addScore, gameStatus }) => {

    let data = require('../../data.json');
    let i = Math.round(Math.random() * ((data.length - 1) - 0));
    const [random, setRandom] = useState(i);

    function skipButton() {
        if (completed.length === data.length || gameStatus === false) {
            return;
        }
        let a = Math.round(Math.random() * ((data.length - 1) - 0));
        while (a === random) {
            a = Math.round(Math.random() * ((data.length - 1) - 0));
        }
        setRandom(a);
    }

    function nextButton() {
        addScore();
        completed.push(random);
        if (completed.length === data.length || gameStatus === false) {
            return;
        }
        let a = Math.round(Math.random() * ((data.length - 1) - 0));
        while (completed.includes(a)) {
            a = Math.round(Math.random() * ((data.length - 1) - 0));
        }
        setRandom(a);
    }

    return (
        <Card className={styles.container}>
            <Typography variant="h4" style={{fontFamily: 'Heebo', fontWeight: 700, fontSize: 40}} className={styles.keyWord}>
                {data[random].keyWord}
            </Typography>
            {data[random].badWord.map((word) => <Typography variant="h5" style={{fontFamily: 'Heebo', fontWeight: 400, fontSize: 25}} className={styles.badWord}>{word}</Typography>)}
            <div className={styles.buttonContainer}>
                <img onClick={() => skipButton(gameStatus)} className={styles.button} src="https://img.icons8.com/flat_round/48/000000/delete-sign.png" alt="cross" />
            </div>
            <div className={styles.buttonContainer}>
                <img onClick={() => nextButton(gameStatus)} className={styles.button} src="https://img.icons8.com/officel/48/000000/checked.png" alt="tick" />
            </div>
        </Card>
    )
}

export default Cards;