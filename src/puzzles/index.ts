import { Puzzle } from "@/src/types"

export const puzzles: Puzzle[] = [
    // tutorial levels, introducing the mechanics
    // level number = index + 1
    {//level 1
        charge_target: 50,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "blocked"}, {type: "charge", value: 50}, {type: "blocked"}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 2
        charge_target: 100,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "blocked"}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 3
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 4
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 5
        charge_target: 200,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "blocked"}]
        ]
    },
    {//level 6
        charge_target: 300,
        grid: [
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 75}],
            [{type: "blocked"}, {type: "charge", value: 25}, {type: "blocked"}],
            [{type: "charge", value: 125}, {type: "charge", value: 50}, {type: "charge", value: 50}]
        ]
    },
    {//level 7
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "blocked"}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    {//level 8
        charge_target: 400,
        grid: [
            [{type: "charge", value: 80}, {type: "charge", value: 100}, {type: "charge", value: 80}],
            [{type: "charge", value: 80}, {type: "charge", value: 80}, {type: "charge", value: 80}],
            [{type: "charge", value: 40}, {type: "charge", value: 20}, {type: "charge", value: 120}]
        ]
    },
    // introducing the first special tile, amp next
    {//level 9
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 10
        charge_target: 150,
        grid: [
            [{type: "charge", value: 50}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 0}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
        ]
    },
    {//level 11
        charge_target: 200,
        grid: [
            [{type: "amp_next", value: 2}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "charge", value: 50}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "amp_next", value: 2}],
        ]
    },
    {//level 12
        charge_target: 100,
        grid: [
            [{type: "charge", value: 50}, {type: "charge", value: 5},  {type: "charge", value: 50}],
            [{type: "blocked"},  {type: "amp_next", value: 10}, {type: "charge", value: 5}],
            [{type: "charge", value: 50}, {type: "charge", value: 5},  {type: "blocked"}],
        ]
    },
    {//level 13
        charge_target: 150,
        grid: [
            [{type: "charge", value: 25}, {type: "amp_next", value: 2},  {type: "charge", value: 30}],
            [{type: "charge", value: 10},  {type: "blocked"}, {type: "charge", value: 5}],
            [{type: "charge", value: 15}, {type: "charge", value: 15},  {type: "charge", value: 25}],
        ]
    },
    {//level 14
        charge_target: 135,
        grid: [
            [{type: "charge", value: 15}, {type: "charge", value: 10}, {type: "charge", value: 10}],
            [{type: "charge", value: 15}, {type: "amp_next", value: 4}, {type: "charge", value: 5}],
            [{type: "charge", value: 21}, {type: "charge", value: 10}, {type: "charge", value: 25}],
        ]
    },
    {//level 15
        charge_target: 160,
        grid: [
            [{type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "charge", value: 10}, {type: "amp_next", value: 5}, {type: "charge", value: 20}],
            [{type: "charge", value: 15}, {type: "charge", value: 10}, {type: "charge", value: 15}],
        ]
    },
    // introducing the second special tile, amp global
    {//level 16
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 50}, {type: "amp_global", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 17
        charge_target: 150,
        grid: [
            [{type: "blocked"}, {type: "blocked"}, {type: "charge", value: 50}],
            [{type: "charge", value: 50}, {type: "amp_global", value: 2}, {type: "charge", value: 50}],
            [{type: "blocked"}, {type: "charge", value: 50}, {type: "blocked"}],
        ]
    },
    {//level 18
        charge_target: 170,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 30}, {type: "charge", value: 10}],
            [{type: "charge", value: 30}, {type: "amp_global", value: 3}, {type: "charge", value: 20}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}],
        ]
    },
    {//level 19
        charge_target: 100,
        grid: [
            [{type: "blocked"}, {type: "charge", value: 5}, {type: "blocked"}],
            [{type: "charge", value: 40}, {type: "amp_global", value: 3}, {type: "charge", value: 40}],
            [{type: "blocked"}, {type: "charge", value: 20}, {type: "charge", value: 5}],
        ]
    },
    {//level 20
        charge_target: 90,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 10}],
            [{type: "charge", value: 10}, {type: "amp_global", value: 3}, {type: "charge", value: 10}],
            [{type: "charge", value: 30}, {type: "charge", value: 20}, {type: "charge", value: 20}],
        ]
    },
    {//level 21
        charge_target: 50,
        grid: [
            [{type: "charge", value: 10}, {type: "charge", value: 5}, {type: "charge", value: 5}],
            [{type: "amp_global", value: 1.5}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 15}, {type: "charge", value: 5}, {type: "charge", value: 10}],
        ]
    },
    {//level 22
        charge_target: 200,
        grid: [
            [{type: "amp_next", value: 2}, {type: "charge", value: 40}, {type: "charge", value: 50}],
            [{type: "charge", value: 30}, {type: "amp_global", value: 4}, {type: "charge", value: 20}],
            [{type: "charge", value: 50}, {type: "blocked"}, {type: "blocked"}],
        ]
    },
    {//level 23
        charge_target: 512,
        grid: [
            [{type: "amp_global", value: 2}, {type: "amp_global", value: 2}, {type: "amp_global", value: 2}],
            [{type: "amp_global", value: 2}, {type: "charge", value: 8}, {type: "blocked"}],
            [{type: "amp_global", value: 2}, {type: "amp_global", value: 2}, {type: "amp_global", value: 2}],
        ]
    },
    {//level 24
        charge_target: 200,
        grid: [
            [{type: "charge", value: 30}, {type: "charge", value: 60}, {type: "charge", value: 30}],
            [{type: "charge", value: 30}, {type: "amp_global", value: 0.5}, {type: "charge", value: 20}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "charge", value: 50}],
        ]
    },
    // introducing the 4x4 grid
    {//level 25
        charge_target: 200,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 30}],
            [{type: "charge", value: 50}, {type: "charge", value: 20}, {type: "blocked"}, {type: "blocked"}],
            [{type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 50}, {type: "charge", value: 10}],
        ]
    },
    {//level 26
        charge_target: 200,
        grid: [
            [{type: "charge", value: 20}, {type: "charge", value: 20}, {type: "blocked"}, {type: "charge", value: 100}],
            [{type: "blocked"}, {type: "charge", value: 10}, {type: "charge", value: 20}, {type: "charge", value: 30}],
            [{type: "charge", value: 50}, {type: "amp_next", value: 3}, {type: "blocked"}, {type: "charge", value: 40}],
            [{type: "charge", value: 10}, {type: "blocked"}, {type: "charge", value: 40}, {type: "charge", value: 10}],
        ]
    },
    {//level 27
        charge_target: 500,
        grid: [
            [{type: "amp_global", value: 0}, {type: "charge", value: 25}, {type: "charge", value: 30}, {type: "charge", value: 45}],
            [{type: "charge", value: 35}, {type: "charge", value: 55}, {type: "amp_global", value: 0}, {type: "charge", value: 30}],
            [{type: "amp_global", value: 0}, {type: "charge", value: 60}, {type: "charge", value: 35}, {type: "charge", value: 20}],
            [{type: "charge", value: 15}, {type: "charge", value: 50}, {type: "charge", value: 75}, {type: "charge", value: 25}],
        ]
    },
    {//level 28
        charge_target: 300,
        grid: [
            [{type: "amp_next", value: 3}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 45}],
            [{type: "charge", value: 20}, {type: "charge", value: 55}, {type: "amp_global", value: 2}, {type: "amp_next", value: 2}],
            [{type: "charge", value: 40}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 10}],
            [{type: "charge", value: 40}, {type: "blocked"}, {type: "blocked"}, {type: "charge", value: 30}],
        ]
    },
    {//level 29
        charge_target: 250,
        grid: [
            [{type: "blocked"}, {type: "amp_next", value: 3}, {type: "charge", value: 30}, {type: "amp_next", value: 2}],
            [{type: "charge", value: 10}, {type: "charge", value: 55}, {type: "blocked"}, {type: "charge", value: 20}],
            [{type: "amp_global", value: 2}, {type: "blocked"}, {type: "charge", value: 35}, {type: "charge", value: 20}],
            [{type: "blocked"}, {type: "charge", value: 50}, {type: "charge", value: 75}, {type: "blocked"}],
        ]
    },
    {//level 30
        charge_target: 100,
        grid: [
            [{type: "amp_next", value: 3}, {type: "charge", value: 20}, {type: "blocked"}, {type: "amp_next", value: 2}],
            [{type: "charge", value: 10}, {type: "charge", value: 60}, {type: "amp_global", value: 2}, {type: "charge", value: 20}],
            [{type: "amp_global", value: 2}, {type: "blocked"}, {type: "charge", value: 35}, {type: "charge", value: 20}],
            [{type: "amp_next", value: 2}, {type: "charge", value: 50}, {type: "charge", value: 75}, {type: "blocked"}],
        ]
    },
    // introducing the polarity tile; didnt need many levels to grasp 4x4
    {//level 31
        charge_target: 50,
        grid: [
            [{type: "blocked"},{type: "blocked"},{type: "blocked"},],
            [{type: "charge", value: 100},{type: "polarity"},{type: "charge", value: 50},],
            [{type: "blocked"},{type: "blocked"},{type: "blocked"},],
        ]
    },
    {//level 32
        charge_target: 150,
        grid: [
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "blocked"},],
            [{type: "charge", value: 50},{type: "polarity"},{type: "charge", value: 50},],
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},],
        ]
    },
    {//level 33
        charge_target: 50,
        grid: [
            [{type: "blocked"},{type: "blocked"},{type: "charge", value: 50},{type: "charge", value: 50},],
            [{type: "blocked"},{type: "blocked"},{type: "polarity"},{type: "blocked"},],
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},{type: "blocked"},],
            [{type: "charge", value: 50},{type: "blocked"},{type: "blocked"},{type: "blocked"},],
        ]
    },
    {//level 34
        charge_target: 150,
        grid: [
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "blocked"},{type: "charge", value: 50},],
            [{type: "charge", value: 100},{type: "blocked"},{type: "polarity"},{type: "charge", value: 50},],
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 150},{type: "blocked"},],
            [{type: "charge", value: 150},{type: "blocked"},{type: "blocked"},{type: "blocked"},],
        ]
    },
    {//level 35
        charge_target: 200,
        grid: [
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},],
            [{type: "charge", value: 50},{type: "blocked"},{type: "charge", value: 100},{type: "charge", value: 50},],
            [{type: "polarity"},{type: "blocked"},{type: "blocked"},{type: "polarity"},],
            [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},],
        ]
    },
    // all mechanics combine from below until next mechanic
    // {//level 36
    //     charge_target: 200,
    //     grid: [
    //         [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},],
    //         [{type: "charge", value: 50},{type: "blocked"},{type: "charge", value: 100},{type: "charge", value: 50},],
    //         [{type: "polarity"},{type: "blocked"},{type: "blocked"},{type: "polarity"},],
    //         [{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},{type: "charge", value: 50},],
    //     ]
    // },
]