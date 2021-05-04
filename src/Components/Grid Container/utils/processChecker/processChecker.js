import { status } from '../index'
import { gridsCheker } from './gridsCheker'

export const processChecker = (nodesState, st) => {
    switch (st) {
        case status.x:
            return gridsCheker(nodesState, st)
        case status.y:
            return gridsCheker(nodesState, st)
        default:
            break;
    }
}