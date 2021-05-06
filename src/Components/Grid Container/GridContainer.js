import  { lazy,
    Suspense, 
    useRef, 
    useEffect, 
    useState, 
    useCallback } from 'react'
import { Grid } from '../Grid/Grid'
import classes from './GridContainer.module.css'
import { locateX, 
    locateY, 
    processChecker, 
    status, 
    winnerStatus } from './utils/'
import { ErrorBoundary } from '../Error Boundary/ErrorBoundary'

const Robert = lazy(() => import('../Robert/Robert'))

export const GridContainer = () => {

    // Essential states
    const [nodesState, setNodesState] = useState(null)
    const [nodeData, setNodeData] = useState(null)
    const [time, setTime] = useState(false)
    const [live, setLive] = useState(true)
    const [winnerDeterminer, setWinnerDeterminer] = useState(null)
    const [turn, setTurn] = useState(null)
    const [turnCounter, setTurnCounter] = useState(0)
    const [restart, setRestart] = useState(false)


    const containerRef = useRef()

    // this function, which manages DOM elements, is trigerred when game starts or restarts
    const initNodes = useCallback(() => {
        let state = []
        for (let [index, el] of Object.entries(containerRef.current.children)) {
            el.innerHTML = ""
            state.push({
                node: el,
                status: status.unTouched,
            })

            // if game is previously restarted, No event listener is attached
            if (!restart) {
                el.addEventListener("click", (e) => {
                    setNodeData({
                        index: +index,
                        node: e
                    })
                })
            }
        }

        setNodesState(state)
        setNodeData(null)
        setLive(true)
        setWinnerDeterminer(null)
        setTurn(null)
        setTurnCounter(0)
    }, [])

    // Initiliaze nodes(grids)
    useEffect(() => {
        initNodes()
    }, [initNodes])

    // disable turn if winner is present, and set restart to true
    useEffect(() => {
        if (winnerDeterminer) {
            setTurn(null)
            setRestart(true)
            setLive(false)
            setTurnCounter(0)
            setTurn(null)
            setTime(null)
        }
    }, [winnerDeterminer])

    // main part od Game, whhere integartion with user and Robert is made
    useEffect(() => {
        let timeOutId
        let checkGame
        if (live) {
            if (!time) {
                if (nodeData) {
                    let resX = locateX(nodeData, nodesState)
                    if (resX) {
                        setNodesState([...resX])

                        checkGame = processChecker(resX, status.x)
                        if (checkGame) {
                            setWinnerDeterminer(checkGame)
                            return
                        }

                        setTime(true)
                        setTurn(status.y)
                        
                        time <= 2 && setTurnCounter((prevCount) => prevCount +1)

                        timeOutId = setTimeout(() => {
                            let resY = locateY(resX)
                            if (resY) {
                                let nodesCopy = resY

                                checkGame = processChecker([...nodesCopy], status.y)
                                if (checkGame) {
                                    setWinnerDeterminer(checkGame)
                                    return
                                }

                                setNodesState([...nodesCopy])
                            } else {
                                setWinnerDeterminer(winnerStatus.draw)
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

        // clearTimeOut when game is over(for Optimization)
        return () => {
            if (!live) {
                clearTimeout(timeOutId)
            }
            
        }
    }, [nodeData, time, live, nodesState, turnCounter])

    return (
        // ErrorBoundary is added to prevent any potential errors
        <ErrorBoundary>
            <div>
                <div 
                    className = {classes.Container}
                    ref = {containerRef}>
                    {[...new Array(9)].map((el, index) => <Grid key = {index} />)}
                </div>
                <Suspense fallback = {<></>}>
                    <Robert 
                        winner = {winnerDeterminer}
                        stopGreeting = {true ? nodeData : false}
                        turn = {turn}
                        reTry = {initNodes}
                        isRestart = {restart}
                        />
                </Suspense>
            </div>
        </ErrorBoundary>
    )
}