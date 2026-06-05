import { Puzzle } from "@/src/types"

const puzzle1: Puzzle = {
    drain_target: 150,
    grid: [
        [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        [{type: "drain", value: 50}, {type: "drain", value: 50}, {type: "drain", value: 50}],
        [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}]
    ]
}

const puzzle2: Puzzle = {
    drain_target: 150,
    grid: [
        [{type: "blocked"}, {type: "blocked"}, {type: "drain", value: 50}],
        [{type: "drain", value: 50}, {type: "drain", value: 50}, {type: "drain", value: 50}],
        [{type: "blocked"}, {type: "drain", value: 100}, {type: "blocked"}]
    ]
}

const puzzle3: Puzzle = {
    drain_target: 400,
    grid: [
        [{type: "drain", value: 50}, {type: "drain", value: 100}, {type: "drain", value: 120}],
        [{type: "blocked"}, {type: "drain", value: 80}, {type: "blocked"}],
        [{type: "drain", value: 150}, {type: "drain", value: 50}, {type: "drain", value: 120}]
    ]
}

const puzzle4: Puzzle = {
    drain_target: 400,
    grid: [
        [{type: "drain", value: 80}, {type: "blocked"}, {type: "drain", value: 80}],
        [{type: "drain", value: 80}, {type: "drain", value: 80}, {type: "drain", value: 80}],
        [{type: "drain", value: 40}, {type: "drain", value: 20}, {type: "drain", value: 100}]
  ]
}

const puzzle5: Puzzle = {
    drain_target: 400,
    grid: [
        [{type: "drain", value: 80}, {type: "blocked"}, {type: "drain", value: 80}, {type: "blocked"}],
        [{type: "drain", value: 80}, {type: "drain", value: 80}, {type: "drain", value: 80}, {type: "blocked"}],
        [{type: "drain", value: 40}, {type: "drain", value: 20}, {type: "drain", value: 100}, {type: "blocked"}],
        [{type: "drain", value: 40}, {type: "drain", value: 20}, {type: "drain", value: 100}, {type: "blocked"}]
  ]
}

export const puzzles: Puzzle[] = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5]