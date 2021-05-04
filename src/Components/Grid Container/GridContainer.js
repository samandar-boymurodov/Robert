import React, {useRef, useEffect, useState} from 'react'
import Grid from '../Grid/Grid'
import Robert from '../Robert/Robert'
import classes from './GridContainer.module.css'
import { locateX, locateY, processChecker, status, winnerStatus } from './utils/'


export default () => {
    const [nodesState, setNodesState] = useState(null)
    const [nodeData, setNodData] = useState(null)
    const [time, setTime] = useState(false)
    const [live, setLive] = useState(true)
    const [winnerDeterminer, setWinnerDeterminer] = useState(null)
    const [turn, setTurn] = useState(null)
    const [turnCounter, setTurnCounter] = useState(0)


    const containerRef = useRef()

    useEffect(() => {
        let state = []
        for (let [index, el] of Object.entries(containerRef.current.children)) {
            state.push({
                node: el,
                status: status.unTouched,
            })

            el.addEventListener("click", (e) => {
                setNodData({
                    index: +index,
                    node: e
                })
            })
        }

        setNodesState(state)
    }, [])

    useEffect(() => {
        if (winnerDeterminer) {
            setTurn(null)
        }
    }, [winnerDeterminer])

    useEffect(() => {
        let timeoutId
        let checkGame
        if (live) {
            if (!time) {
                if (nodeData) {
                    let resX = locateX(nodeData, nodesState)
                    if (resX) {
                        setNodesState([...resX])
                        nodeData.node.target.innerHTML = status.x

                        checkGame = processChecker(resX, status.x)
                        if (checkGame) {
                            setWinnerDeterminer(checkGame)
                            setLive(false)
                            return
                        }

                        setTime(true)
                        setTurn(status.y)
                        setTurnCounter((prevCount) => prevCount +1)

                        timeoutId = setTimeout(() => {
                            let resY = locateY(resX)
                            if (resY) {
                                let [indexY, nodesCopy] = resY

                                nodesCopy[indexY].node.innerHTML = status.y

                                checkGame = processChecker([...nodesCopy], status.y)
                                if (checkGame) {
                                    console.log(checkGame)
                                    setLive(false)
                                    setWinnerDeterminer(checkGame)
                                    return
                                }

                                setNodesState([...nodesCopy])
                            } else {
                                console.log("Draw")
                                setLive(false)
                                setWinnerDeterminer(winnerStatus.draw)
                                setTime(null)
                                setTurn(null)
                                return
                            }
                            setTime(null)
                            setTurn(status.x)
                            setTurnCounter((prevCount) => prevCount +1)
                        }, turnCounter <= 2 ? 1000 : 800);
                    }
                } 
            }
        }
        return () => {
            if (!live) {
                clearTimeout(timeoutId)
            }
            
        }
    }, [nodeData, time, live])
    return (
        <div>
            <div 
                className = {classes.Container}
                ref = {containerRef}>
                {[...new Array(9)].map((el, index) => <Grid key = {index} />)}
            </div>
            <Robert 
                winner = {winnerDeterminer}
                stopGreeting = {true ? nodeData : false}
                turn = {turn}/>
        </div>
    )
}