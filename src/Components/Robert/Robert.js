import React from 'react'
import classes from './robert.module.css'
import {RobertData} from './robertData'
import {randomChoice} from '../Grid Container/utils/randomChoice'
import Fade from '@material-ui/core/Fade';
import ReplayIcon from '@material-ui/icons/Replay';

export default React.memo((props) => {
    const {winner, turn, reTry} = props
    let greetingContext = randomChoice(RobertData.greeting)

    const winnerComputer = React.useMemo(() => {
        if (winner) {
            let listWishes = RobertData.winner[winner]
            return randomChoice(listWishes)
        } else return null
    }, [winner])

    
    const turnComputer = React.useMemo(() => {
        if (turn) {
            return randomChoice(RobertData.turn[turn])
        } else return null
    }, [turn])

    return (
        <div className = {classes.robert}>
            {!props.stopGreeting ? (
                <Fade in={true ? !props.stopGreeting : false}>
                    <div>{greetingContext}</div>
                </Fade>
            ) : null}
            <Fade in = {true ? typeof turnComputer === "string" : false}>
                <div>{turnComputer}</div>
            </Fade>
            {winnerComputer ? (
                <Fade in = {true ? typeof winnerComputer === "string" : false}>
                    <div className = {classes.winner}>
                        <div>{winnerComputer}</div>
                        <div onClick = {reTry}>
                         <ReplayIcon className = {classes.replay} />
                        </div>
                    </div>
                </Fade>
            ) : null}
        </div>
    )
})  
