import { status } from './index'

export const locateX = (nodeData, nodesState) => {
    let nodesStateCopy = [...nodesState]
    let nodeCopy = nodesStateCopy[nodeData.index].node

    if (nodesState[nodeData.index].status !== status.unTouched) {
        return false
    } else {
        nodeCopy.innerHTML = status.x

        nodesStateCopy[nodeData.index] = {
            node: nodeCopy,
            status: status.x
        }
        return nodesStateCopy
    }
}