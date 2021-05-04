export const gridsCheker = (nodesState, st) => {
    // Row
    if (nodesState[0].status === st &&
        nodesState[1].status === st &&
        nodesState[2].status === st
    ) {
        return st
    }
    if (nodesState[3].status === st &&
        nodesState[4].status === st &&
        nodesState[5].status === st
    ) {
        return st
    }
    if (nodesState[6].status === st &&
        nodesState[7].status === st &&
        nodesState[8].status === st
    ) {
        return st
    }
    // Column
    if (nodesState[0].status === st &&
        nodesState[3].status === st &&
        nodesState[6].status === st
    ) {
        return st
    }
    if (nodesState[1].status === st &&
        nodesState[4].status === st &&
        nodesState[7].status === st
    ) {
        return st
    }
    if (nodesState[2].status === st &&
        nodesState[5].status === st &&
        nodesState[8].status === st
    ) {
        return st
    }

    // Diagonal
    if (nodesState[0].status === st &&
        nodesState[4].status === st &&
        nodesState[8].status === st
    ) {
        return st
    }
    if (nodesState[2].status === st &&
        nodesState[4].status === st &&
        nodesState[6].status === st
    ) {
        return st
    }
}