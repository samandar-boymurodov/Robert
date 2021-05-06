import { status } from '../index'
import { YindexGenerator } from './YindexGenerator'

export const locateY = (nodesState) => {
    let notDraw = false

    if (nodesState instanceof Array) {
        nodesState.forEach(node => {
            if (node.status === status.unTouched) {
                notDraw = notDraw || true
            }
        })

        if (notDraw) {
            const YIndexResult = YindexGenerator(nodesState)

            let nodesStateCopy = [...nodesState]

            let nodeCopy = nodesStateCopy[YIndexResult].node
            nodeCopy.innerHTML = status.y

            nodesStateCopy[YIndexResult] = {
                node: nodeCopy,
                status: status.y
            }
            return nodesStateCopy

        } else {
            return false
        }
    }

}