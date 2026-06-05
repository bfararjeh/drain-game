"use client"
import { useState } from "react"
import { Tile, TileType } from "@/src/types"

export default function Editor() {
  const [gridSize, setGridSize] = useState(3)
  const [grid, setGrid] = useState<Tile[][]>(
      Array(gridSize).fill(null).map(() => Array(gridSize).fill({ type: "blocked" as TileType }))
  )
  const TILE_SIZE = 100
  const GAP = 25

  const [selectedTile, setSelectedTile] = useState<number[] | null>(null)
  const [drainTarget, setDrainTarget] = useState<number>(0)

  function handleTileClick(rowIndex: number, colIndex: number) {
    if (selectedTile && selectedTile[0] === rowIndex && selectedTile[1] === colIndex) {
      setSelectedTile(null)
    } else {
      setSelectedTile([rowIndex, colIndex])
    }
  }

  function updateTile(updated: Tile) {
    const newGrid = grid.map((row, rIdx) =>
      row.map((tile, cIdx) =>
        selectedTile && rIdx === selectedTile[0] && cIdx === selectedTile[1]
          ? updated
          : tile
      )
    )
    setGrid(newGrid)
  }

  function handleReset() {
    setGrid(Array(3).fill(null).map(() => Array(3).fill({ type: "blocked" as TileType })))
    setSelectedTile(null)
    setDrainTarget(0)
  }

  function generateCode(): string {
    const gridString = grid.map(row =>
      `[${row.map(tile => {
        const parts = [`type: "${tile.type}"`]
        if (tile.value !== undefined) parts.push(`value: ${tile.value}`)
        return `{${parts.join(", ")}}`
      }).join(", ")}]`
    ).join(",\n        ")

    return `const puzzle: Puzzle = {
  id: 0,
  drain_target: ${drainTarget},
  grid: [
        ${gridString}
  ]
}`
  }

  const selectedTileData = selectedTile ? grid[selectedTile[0]][selectedTile[1]] : null

  function getTileClass(rowIndex: number, colIndex: number): string {
    const tile = grid[rowIndex][colIndex]

    // background based on tile type
    let bgClass = ""
    if (tile.type === "blocked") bgClass = "tile-blocked"
    if (tile.type === "drain") bgClass = "tile-drain"
    if (tile.type === "amp_next") bgClass = "tile-next-amp"
    if (tile.type === "amp_global") bgClass = "tile-global-amp"

    // selected state
    const isSelected = selectedTile?.[0] === rowIndex && selectedTile?.[1] === colIndex
    const stateClass = isSelected ? "tile-recent" : ""

    return `${bgClass} ${stateClass}`.trim()
  }

  function getTileDisplay(tile: Tile): string {
    if (tile.type === "drain") return `${tile.value}`
    if (tile.type === "amp_next") return `x${tile.value} next`
    if (tile.type === "amp_global") return `x${tile.value} all`
    return ""
  }

  function handleGridResize(newSize: number) {
    setGridSize(newSize)
    setGrid(Array(newSize).fill(null).map(() => Array(newSize).fill({ type: "blocked" as TileType })))
    setSelectedTile(null)
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

      {/* Drain target */}
      <label>
        Drain Target:&nbsp;
        <input
          type="number"
          value={drainTarget}
          onChange={(e) => setDrainTarget(Number(e.target.value))}
        />
      </label>
      <br /><br />

      {/* Tile options */}
      {selectedTileData && (
        <div>
          <h3>Edit Tile</h3>
          <label>
            Type:&nbsp;
            <select
              value={selectedTileData.type}
              onChange={(e) => updateTile({ type: e.target.value as TileType })}
            >
              <option value="blocked">Blocked</option>
              <option value="drain">Drain</option>
              <option value="amp_next">Amp Next</option>
              <option value="amp_global">Amp Global</option>
            </select>
          </label>
          <br />

          {/* Value input — shown for all non-blocked types */}
          {selectedTileData.type !== "blocked" && (
            <label>
              Value:&nbsp;
              <input
                type="number"
                value={selectedTileData.value ?? ""}
                onChange={(e) => updateTile({ ...selectedTileData, value: Number(e.target.value) })}
              />
            </label>
          )}
        </div>
      )}
      <br />

      {/* Buttons */}
      <button onClick={handleReset}>Reset</button>
      &nbsp;
      <button onClick={() => navigator.clipboard.writeText(generateCode())}>
        Copy to Clipboard
      </button>
      <br /><br />

      <label>
          Grid Size:&nbsp;
          <input
              type="number"
              min={2}
              max={6}
              value={gridSize}
              onChange={(e) => handleGridResize(Number(e.target.value))}
          />
      </label>

      {/* Export output */}
      <pre style={{
        background: "#1e1e1e",
        color: "#d4d4d4",
        padding: "16px",
        borderRadius: "8px",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap"
      }}>
        {generateCode()}
      </pre>

    </main>
  )
}