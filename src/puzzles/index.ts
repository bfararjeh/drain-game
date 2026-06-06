import { Puzzle } from "@/src/types"

export const puzzles: Puzzle[] = [
    {//level 0
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 1
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "blocked"}]
        ]
    },
    {//level 2
        charge_target: 400,
        grid: [
            [{type: "charge", value: 50}, {type: "charge", value: 100}, {type: "charge", value: 120}],
            [{type: "blocked"}, {type: "charge", value: 80}, {type: "blocked"}],
            [{type: "charge", value: 150}, {type: "charge", value: 50}, {type: "charge", value: 120}]
        ]
    },
    {//level 3
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "blocked"}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    {//level 4
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "charge", value: 100}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    // first 5 ^^ now we move onto special tiles
    {//level 5
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 6
        charge_target: 200,
        grid: [
            [{type: "charge", value: 50}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
        ]
    },
    {//level 7
        charge_target: 200,
        grid: [
            [{type: "amp_next", value: 2}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "amp_next", value: 2}],
        ]
    },
    {//level 8
        charge_target: 100,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 5},  {type: "charge", value: 25}],
            [{type: "charge", value: 5},  {type: "amp_next", value: 3}, {type: "charge", value: 5}],
            [{type: "charge", value: 15}, {type: "charge", value: 5},  {type: "charge", value: 20}],
        ]
    },
    {//level 9
        charge_target: 125,
        grid: [
            [{type: "charge", value: 10}, {type: "charge", value: 10}, {type: "charge", value: 5}],
            [{type: "charge", value: 30}, {type: "amp_next", value: 4}, {type: "charge", value: 5}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 10}],
        ]
    },
    // second 5 ^^ introducing the amp next, now we move onto global amp
    {//level 10
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "amp_global", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "charge", value: 50}, {type: "blocked"}],
        ]
    },
    {//level 11
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 15}, {type: "charge", value: 15}],
            [{type: "charge", value: 25}, {type: "amp_global", value: 3}, {type: "charge", value: 15}],
            [{type: "blocked"}, {type: "charge", value: 25}, {type: "charge", value: 20}],
        ]
    },
    {//level 12
        charge_target: 100,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 5}, {type: "blocked"}],
            [{type: "charge", value: 40}, {type: "amp_global", value: 3}, {type: "charge", value: 40}],
            [{type: "blocked"}, {type: "charge", value: 20}, {type: "charge", value: 5}],
        ]
    },
    {//level 13
        charge_target: 200,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 10}],
            [{type: "charge", value: 10}, {type: "amp_global", value: 6}, {type: "charge", value: 10}],
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 20}],
        ]
    },
    {//level 14
        charge_target: 200,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 60}, {type: "charge", value: 30}],
            [{type: "charge", value: 30}, {type: "amp_global", value: 0.5}, {type: "charge", value: 20}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "charge", value: 50}],
        ]
    },
    // third 5 ^^ introducing amp global
    {//level 15
        charge_target: 200,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 30}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 50}, {type: "charge", value: 10}],
        ]
    },
    {//level 16
        charge_target: 300,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 100}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 30}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 3}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 50}, {type: "charge", value: 10}],
        ]
    },
    {//level 17
        charge_target: 500,
        grid: [
            [{type: "amp_global", value: 0}, {type: "charge", value: 25}, {type: "charge", value: 30}, {type: "charge", value: 45}],
            [{type: "charge", value: 35}, {type: "charge", value: 55}, {type: "amp_global", value: 0}, {type: "charge", value: 30}],
            [{type: "amp_global", value: 0}, {type: "charge", value: 60}, {type: "charge", value: 35}, {type: "charge", value: 20}],
            [{type: "charge", value: 15}, {type: "charge", value: 50}, {type: "charge", value: 75}, {type: "charge", value: 25}],
        ]
    },
    {//level 18
        charge_target: 300,
        grid: [
            [{type: "amp_next", value: 3}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 45}],
            [{type: "charge", value: 20}, {type: "charge", value: 55}, {type: "amp_global", value: 2}, {type: "amp_next", value: 2}],
            [{type: "charge", value: 40}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "charge", value: 40}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 30}],
        ]
    },
    {//level 19
        charge_target: 100,
        grid: [
            [{type: "amp_next", value: 3}, {type: "charge", value: 25}, {type: "charge", value: 30}, {type: "amp_next", value: 2}],
            [{type: "charge", value: 10}, {type: "charge", value: 55}, {type: "amp_global", value: 2}, {type: "charge", value: 20}],
            [{type: "amp_global", value: 2}, {type: "charge", value: 60}, {type: "charge", value: 35}, {type: "charge", value: 20}],
            [{type: "amp_next", value: 2}, {type: "charge", value: 50}, {type: "charge", value: 75}, {type: "blocked"}],
        ]
    },
]