"use client"
import { useState } from "react"
import { Tile, TileType } from "@/src/types"

const TILE_SIZE = 100
const GAP = 25
const TILE_TYPES: TileType[] = ["blocked", "drain", "amp_next", "amp_global"]

export default function Editor() {

  const [grid, setGrid] = useState<Tile[][]>(
    Array(3).fill(null).map(() => Array(3).fill({ type: "blocked" as TileType }))
  )
  const [gridSize, setGridSize] = useState(3)
  const [selectedTile, setSelectedTile] = useState<number[] | null>(null)
  const [drainTarget, setDrainTarget] = useState<number>(0)
  const selectedTileData = selectedTile ? grid[selectedTile[0]][selectedTile[1]] : null

  function handleTileClick(rowIndex: number, colIndex: number) {
    if (!selectedTile || selectedTile[0] !== rowIndex || selectedTile[1] !== colIndex) {
      setSelectedTile([rowIndex, colIndex])
      return
    }
    const currentTile = grid[rowIndex][colIndex]
    const nextType = TILE_TYPES[(TILE_TYPES.indexOf(currentTile.type) + 1) % TILE_TYPES.length]
    updateTile({ type: nextType }, rowIndex, colIndex)
  }

  function updateTile(updated: Tile, rowIndex: number, colIndex: number) {
    setGrid(grid.map((row, rIdx) =>
      row.map((tile, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? updated : tile
      )
    ))
  }

  function handleReset() {
    setGrid(Array(gridSize).fill(null).map(() => Array(gridSize).fill({ type: "blocked" as TileType })))
    setSelectedTile(null)
    setDrainTarget(0)
  }

  function handleGridResize(newSize: number) {
    setGridSize(newSize)
    setGrid(Array(newSize).fill(null).map(() => Array(newSize).fill({ type: "blocked" as TileType })))
    setSelectedTile(null)
  }

  function getTileClass(rowIndex: number, colIndex: number): string {
    const tile = grid[rowIndex][colIndex]
    const bgClass =
      tile.type === "blocked" ? "tile-blocked" :
      tile.type === "drain" ? "tile-drain" :
      tile.type === "amp_next" ? "tile-next-amp" :
      "tile-global-amp"
    const isSelected = selectedTile?.[0] === rowIndex && selectedTile?.[1] === colIndex
    return `${bgClass} ${isSelected ? "tile-recent" : ""}`.trim()
  }

  function getTileDisplay(tile: Tile): string {
    if (tile.type === "drain") return `${tile.value ?? ""}`
    if (tile.type === "amp_next") return `x${tile.value ?? "?"} next`
    if (tile.type === "amp_global") return `x${tile.value ?? "?"} all`
    return ""
  }

  function generateCode(): string {
    const gridString = grid.map(row =>
      `[${row.map(tile => {
        const parts = [`type: "${tile.type}"`]
        if (tile.value !== undefined) parts.push(`value: ${tile.value}`)
        return `{${parts.join(", ")}}`
      }).join(", ")}]`
    ).join(",\n        ")
    return `{
  drain_target: ${drainTarget},
  grid: [
        ${gridString}
  ]
}`
  }


  return (
    <main>
      <h1>Editor</h1>
      <a href="/">Home</a>
      <br /><br />

      {/* Grid */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${TILE_SIZE}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${TILE_SIZE}px)`,
          gap: `${GAP}px`
        }}
      >
        {grid.flatMap((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={getTileClass(rowIndex, colIndex)}
              onClick={() => handleTileClick(rowIndex, colIndex)}
            >
              {getTileDisplay(tile)}
            </div>
          ))
        )}
      </div>
      <br />

      {/* Controls */}
      <label>Drain Target:&nbsp;
        <input type="number" value={drainTarget}
          onChange={(e) => setDrainTarget(Number(e.target.value))} />
      </label>
      &nbsp;&nbsp;
      <label>Grid Size:&nbsp;
        <input type="number" min={2} max={6} value={gridSize}
          onChange={(e) => handleGridResize(Number(e.target.value))} />
      </label>
      <br /><br />

      {/* Selected tile value */}
      {selectedTileData && selectedTileData.type !== "blocked" && (
        <label>Value:&nbsp;
          <input type="number" value={selectedTileData.value ?? ""}
            onChange={(e) => updateTile(
              { ...selectedTileData, value: Number(e.target.value) },
              selectedTile![0], selectedTile![1]
            )} />
        </label>
      )}
      <br /><br />

      {/* Actions */}
      <button onClick={handleReset}>Reset</button>
      &nbsp;
      <button onClick={() => navigator.clipboard.writeText(generateCode())}>
        Copy to Clipboard
      </button>
      <br /><br />

      {/* Export preview */}
      <pre style={{
        background: "#1e1e1e", color: "#d4d4d4",
        padding: "16px", borderRadius: "8px",
        fontFamily: "monospace", whiteSpace: "pre-wrap"
      }}>
        {generateCode()}
      </pre>

    </main>
  )
}