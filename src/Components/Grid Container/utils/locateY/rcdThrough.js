import { status } from '../index'

export const rcdThrough = (arr, nodesState) => {
    let Xs = 0

    //checks how many Xs are here
    for (let i of arr) {
        if (nodesState[i].status === status.x) {
            Xs++
        }
    }
    // if only we have 2 Xs then loop checks if there is a free space
    if (Xs == 2) {
        for (let i of arr) {
            if (nodesState[i].status === status.unTouched) {
                return i
            }
        }
    }
    // returns false if there is no free space between 2 Xs
    console.log(Xs)
    return false
}