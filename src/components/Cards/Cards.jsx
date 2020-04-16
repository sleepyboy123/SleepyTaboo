import React , {useState} from 'react';
import { Card, Typography } from '@material-ui/core';

import styles from './Cards.module.css';

let completed = [];

const Cards = ({ addScore }) => {

    let data = require('../../data.json');
    let i = Math.round(Math.random() * ((data.length - 1) - 0));
    const [random, setRandom] = useState(i);

    function skipButton() {
        if (completed.length === data.length) {
            return;
        }
        let a = Math.round(Math.random() * ((data.length - 1) - 0));
        while (a === random) {
            a = Math.round(Math.random() * ((data.length - 1) - 0));
        }
        setRandom(a);
    }

    function nextButton() {
        completed.push(random);
        if (completed.length === data.length) {
            return;
        }
        addScore();
        let a = Math.round(Math.random() * ((data.length - 1) - 0));
        while (completed.includes(a)) {
            a = Math.round(Math.random() * ((data.length - 1) - 0));
        }
        setRandom(a);
    }

    return (
        <Card className={styles.container}>
            <Typography variant="h4" className={styles.keyWord}>
                {data[random].keyWord}
            </Typography>
            {data[random].badWord.map((word) => <Typography variant="h5" className={styles.badWord}>{word}</Typography>)}
            <div className={styles.buttonContainer}>
                <img className={styles.button} src="https://img.icons8.com/flat_round/48/000000/delete-sign.png" alt="cross" onClick={() => skipButton()}/>
            </div>
            <div className={styles.buttonContainer}>
                <img className={styles.button} src="https://img.icons8.com/officel/48/000000/checked.png" alt="tick" onClick={() => nextButton()}/>
            </div>
        </Card>
    )
}

export default Cards;