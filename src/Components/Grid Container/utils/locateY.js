import { status } from './index'

export const locateY = (nodesState) => {
    let lost = false

    if (nodesState instanceof Array) {
        nodesState.forEach(node => {
            if (node.status === status.unTouched) {
                lost = lost || true
            }
        })

        if (lost) {
            let indexEs = []

            nodesState.forEach((node, index) => {
                if (node.status === status.unTouched) {
                    indexEs.push(index)
                }
            })

            let randomChoice = indexEs[Math.floor(Math.random() * indexEs.length)]

            let nodesStateCopy = [...nodesState]
            nodesStateCopy[randomChoice] = {
                ...nodesStateCopy[randomChoice],
                status: status.y
            }

            return [randomChoice, nodesStateCopy]
        } else {
            return false
        }
    }

}