import React from 'react'
import classes from './robert.module.css'
import { RobertData } from './robertData'
import { randomChoice } from '../Grid Container/utils/randomChoice'
import Fade from '@material-ui/core/Fade';
import ReplayIcon from '@material-ui/icons/Replay';

export default React.memo((props) => {
    const { winner, 
        turn, 
        reTry, 
        stopGreeting, 
        isRestart } = props

    const winnerComputer = React.useMemo(() => {
        if (winner) {
            return randomChoice(RobertData.winner[winner])
        } else return null
    }, [winner])

    
    const turnComputer = React.useMemo(() => {
        if (turn) {
            return randomChoice(RobertData.turn[turn])
        } else return null
    }, [turn])

    const greetingComputer = React.useMemo(() => {
        if (!stopGreeting) {
            if (isRestart) return randomChoice(RobertData.greeting.restartGameStart)
        }
        if (!stopGreeting) return randomChoice(RobertData.greeting.gameStart)

        return null
    }, [stopGreeting, isRestart])

    let robertStyle = classes.robert

    if (winner) {
        robertStyle += " " + classes.winnerMode
    }
    return (
        <div className = {robertStyle}>
            <Fade in={!!greetingComputer}>
                <div>{greetingComputer}</div>
            </Fade>
           
            <Fade in = {!!turnComputer}>
                <div>{turnComputer}</div>
            </Fade>

            {!!winnerComputer && (
                <Fade in = {!!winnerComputer}>
                    <div className = {classes.winner}>
                        <div>{winnerComputer}</div>
                        <div onClick = {reTry}>
                            <ReplayIcon className = {classes.replay} />
                        </div>
                    </div>
                </Fade>
            )}
        </div>
    )
})  
