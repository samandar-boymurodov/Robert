import { status } from '../index'
import { YindexGenerator } from './YindexGenerator'

export const locateY = (nodesState) => {
    let lost = false

    if (nodesState instanceof Array) {
        nodesState.forEach(node => {
            if (node.status === status.unTouched) {
                lost = lost || true
            }
        })

        if (lost) {
            const YIndexResult = YindexGenerator(nodesState)

            let nodesStateCopy = [...nodesState]

            nodesStateCopy[YIndexResult] = {
                ...nodesStateCopy[YIndexResult],
                status: status.y
            }
            return [YIndexResult, nodesStateCopy]

        } else {
            return false
        }
    }

}