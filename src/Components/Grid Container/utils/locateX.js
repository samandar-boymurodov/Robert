import { status } from './index'

export const locateX = (nodeData, nodesState) => {
    // Checks if user's selected place is free to Locate X
    if (nodesState[nodeData.index].status !== status.unTouched) {
        return false
    } else {
        // if it is free, then Locate!
        let nodesStateCopy = [...nodesState]
        let nodeCopy = nodesStateCopy[nodeData.index].node
        nodeCopy.innerHTML = status.x

        nodesStateCopy[nodeData.index] = {
            node: nodeCopy,
            status: status.x
        }
        return nodesStateCopy
    }
}