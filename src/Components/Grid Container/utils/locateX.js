import { status } from './index'

export const locateX = (nodeData, nodesState) => {
    let nodesStateCopy = [...nodesState]

    if (nodesState[nodeData.index].status !== status.unTouched) {
        return false
    } else {
        nodesStateCopy[nodeData.index] = {
            ...nodesStateCopy[nodeData.index],
            status: status.x
        }
        return nodesStateCopy
    }
}