import { Puzzle } from "@/src/types"

export const puzzles: Puzzle[] = [
    {
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "blocked"}]
        ]
    },
    {
        charge_target: 400,
        grid: [
            [{type: "charge", value: 50}, {type: "charge", value: 100}, {type: "charge", value: 120}],
            [{type: "blocked"}, {type: "charge", value: 80}, {type: "blocked"}],
            [{type: "charge", value: 150}, {type: "charge", value: 50}, {type: "charge", value: 120}]
        ]
    },
    {
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "blocked"}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    {
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "charge", value: 100}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    // first 5 ^^ now we move onto special tiles
    {
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {
        charge_target: 200,
        grid: [
            [{type: "charge", value: 50}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
        ]
    },
    {
        charge_target: 200,
        grid: [
            [{type: "amp_next", value: 2}, {type: "blocked"}, {type: "charge", value: 100}],
            [{type: "charge", value: 50}, {type: "charge", value: 100}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "amp_next", value: 2}],
        ]
    },
    {
        charge_target: 125,
        grid: [
            [{type: "charge", value: 10}, {type: "charge", value: 10}, {type: "charge", value: 5}],
            [{type: "charge", value: 30}, {type: "amp_next", value: 4}, {type: "charge", value: 5}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 10}],
        ]
    },
    {
        charge_target: 100,
        grid: [
            [{type: "charge", value: 10}, {type: "charge", value: 10}, {type: "charge", value: 5}],
            [{type: "charge", value: 30}, {type: "amp_next", value: 4}, {type: "charge", value: 5}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 10}],
        ]
    },
    // second 5 ^^ introducing the amp next, now we move onto global amp
    {
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "amp_global", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "charge", value: 50}, {type: "blocked"}],
        ]
    },
    {
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 20}, {type: "charge", value: 10}],
            [{type: "charge", value: 10}, {type: "amp_global", value: 3}, {type: "charge", value: 10}],
            [{type: "blocked"}, {type: "charge", value: 30}, {type: "charge", value: 20}],
        ]
    },
    {
        charge_target: 100,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 5}, {type: "blocked"}],
            [{type: "charge", value: 40}, {type: "amp_global", value: 3}, {type: "charge", value: 40}],
            [{type: "blocked"}, {type: "charge", value: 20}, {type: "charge", value: 5}],
        ]
    },
    {
        charge_target: 200,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 10}],
            [{type: "charge", value: 10}, {type: "amp_global", value: 3}, {type: "charge", value: 10}],
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 20}],
        ]
    },
    {
        charge_target: 200,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 60}, {type: "charge", value: 30}],
            [{type: "charge", value: 30}, {type: "amp_global", value: 0.5}, {type: "charge", value: 20}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "charge", value: 50}],
        ]
    },
    {
        charge_target: 200,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 30}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 50}, {type: "charge", value: 10}],
        ]
    },
]