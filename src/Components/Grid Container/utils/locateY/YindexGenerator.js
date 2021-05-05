import { status, randomChoice } from '../index'
import { rcd } from './rcd'

export const YindexGenerator = (nodesState) => {
    // find ways to win
    let rcdForY = rcd(nodesState, "y")
    if (typeof rcdForY === "number") return rcdForY

    //block X's ways
    let rcdForX = rcd(nodesState, "x")
    if (typeof rcdForX === "number") return rcdForX

    // if there is a free space between 2 Xs then choose randomly
    console.log("randomly")

    let indexes = []
    for (let [index, node] of nodesState.entries()) {
        if (node.status === status.unTouched) {
            indexes.push(index)
        }
    }
    return randomChoice(indexes)
}