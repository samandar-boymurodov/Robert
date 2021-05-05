import { status } from '../index'

export const rcdThrough = (arr, nodesState, st) => {
    let stS = 0
    for (let i of arr) {
        if (nodesState[i].status === status[st]) {
            stS++
        }
    }

    if (stS == 2) {
        for (let i of arr) {
            if (nodesState[i].status === status.unTouched) {
                return i
            }
        }
    }
}