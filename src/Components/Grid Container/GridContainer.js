import React, {useRef, useEffect, useState} from 'react'
import Grid from '../Grid/Grid'
import classes from './GridContainer.module.css'
import { status } from './status'

export default () => {
    const [nodesState, setNodesState] = useState(null)
    const [nodeData, setNodData] = useState(null)

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
        console.log(nodesState)
    }, [nodesState])

    useEffect(() => {
        if (nodeData) {
            let nodesStateCopy = [...nodesState]

            if (nodesState[nodeData.index].status !== status.unTouched) {
               
            } else {
                nodesStateCopy[nodeData.index] = {
                    ...nodesStateCopy[nodeData.index],
                    status: status.x
                }

                nodeData.node.target.innerHTML = status.x

                setNodesState([...nodesStateCopy])
            }
        }
        
    }, [nodeData])
    return (
        <div 
            className = {classes.Container}
            ref = {containerRef}>
            {[...new Array(9)].map((el, index) => <Grid key = {index} />)}
        </div>
    )
}