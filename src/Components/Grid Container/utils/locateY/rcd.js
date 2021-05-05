import { rcdThrough } from './rcdThrough'

export const rcd = (nodesState, st) => {
    // diags
    for (let i of[[0, 4, 8], [2, 4, 6]]) {
        let rcdThroughResult = rcdThrough(i, nodesState, st)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }
    // rows
    for (let i of[[0, 1, 2], [3, 4, 5], [6, 7, 8]]) {
        let rcdThroughResult = rcdThrough(i, nodesState, st)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }
    // cols
    for (let i of[[0, 3, 6], [1, 4, 7], [2, 5, 8]]) {
        let rcdThroughResult = rcdThrough(i, nodesState, st)
        if (typeof rcdThroughResult === "number") {
            return rcdThroughResult
        }
    }
}