interface Ocean {
    available: boolean
    name: string
    created: number
    population: number
    fleet: Fleet
    invasion: null
    rank: number | undefined

}

interface Fleet {
    shipsRemaining: number
    started: number
    state: string
    type: string
}

export type { Ocean }