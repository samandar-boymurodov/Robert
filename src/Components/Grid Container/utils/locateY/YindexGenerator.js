import { status, randomChoice } from '../index'
import { rcdThrough } from './rcdThrough'

export const YindexGenerator = (nodesState) => {
    // diags
    for (let i of[[0, 4, 8], [2, 4, 6]]) {
        let rcdThroughResult = rcdThrough(i, nodesState)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }
    // rows
    for (let i of[[0, 1, 2], [3, 4, 5], [6, 7, 8]]) {
        let rcdThroughResult = rcdThrough(i, nodesState)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }
    // cols
    for (let i of[[0, 3, 6], [1, 4, 7], [2, 5, 8]]) {
        let rcdThroughResult = rcdThrough(i, nodesState)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }

    // if there is free space between 2 Xs then choose randomly
    console.log("random is decided")
    let indexes = []
    for (let [index, node] of nodesState.entries()) {
        if (node.status === status.unTouched) {
            indexes.push(index)
        }
    }
    return randomChoice(indexes)
}