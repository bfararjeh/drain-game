export type TileType = 
  | "drain"
  | "amp_next"
  | "amp_global"
  | "blocked"

export interface Tile {
  type: TileType
  value?: number
}

export interface Puzzle {
  drain_target: number
  grid: Tile[][]
}