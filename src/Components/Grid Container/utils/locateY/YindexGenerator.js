import { status, randomChoice } from '../index'
import { rcd } from './rcd' //RCD => Row, Column, Diagonal

export const YindexGenerator = (nodesState) => {
    // find ways to win
    let rcdForY = rcd(nodesState, "y")
    if (typeof rcdForY === "number") return rcdForY

    //block X's ways
    let rcdForX = rcd(nodesState, "x")
    if (typeof rcdForX === "number") return rcdForX

    // if Above conditions are not satisfies, then choose randomly
    let indexes = []
    for (let [index, node] of nodesState.entries()) {
        if (node.status === status.unTouched) {
            indexes.push(index)
        }
    }
    return randomChoice(indexes)
}