interface Ocean {
    available: boolean
    name: string
    created: number
    population: number
    fleet: Fleet | null
    invasion: Invasion | null
    rank: number | undefined

}

interface Fleet {
    ships_remaining: number
    started: number
    state: string
    type: string
}

interface Invasion {
    state: string
    location: string
    phase: string
    num_players: string
    started: string
}

export type { Ocean }