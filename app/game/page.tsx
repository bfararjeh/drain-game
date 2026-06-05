"use client"

import { useState } from "react"
import { puzzles } from "@/src/puzzles"
import { Tile } from "@/src/types"

export default function Game() {

  const TILE_SIZE = 100
  const GAP = 25

  const [puzzleIndex, setPuzzleIndex] = useState(0)
  const [playedTiles, setPlayedTiles] = useState<number[][]>([])
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")
  const [score, setScore] = useState<number | null>(null)
  const puzzle = puzzles[puzzleIndex]
  const grid = puzzle.grid
  const gridSize = puzzle.grid.length

  const svgSize = gridSize * TILE_SIZE + (gridSize - 1) * GAP

  const playground = grid.flatMap((row, rowIndex) =>
    row.map((tile, colIndex) =>
      <div
      key={`${rowIndex}-${colIndex}`}
      className={getTileClass(rowIndex, colIndex)}
      onClick={() => handleTileClick(rowIndex, colIndex)}
      >
        {getTileDisplay(tile)}
      </div>
    )
  )

  function isAdjacent(a: number[], b: number[]): boolean {
    return (((Math.abs(a[0] - b[0]) == 1 && a[1] == b[1])) || 
      ((Math.abs(a[1] - b[1]) == 1) && a[0] == b[0]))
  }

  function handleTileClick(rowIndex: number, colIndex: number) {
    const position = [rowIndex, colIndex]
    const currentTile = grid[rowIndex][colIndex]
    const lastPlayed = playedTiles[playedTiles.length - 1]

    // if clicking last played tile, unclick it
    if (lastPlayed && lastPlayed[0] === rowIndex && lastPlayed[1] === colIndex) {
        setPlayedTiles(playedTiles.slice(0, -1))
        return
    }

    // if clicking a played tile that isn't last, rewind to that point
    const clickedIndex = playedTiles.findIndex(p => p[0] === rowIndex && p[1] === colIndex)
    if (clickedIndex !== -1) {
        setPlayedTiles(playedTiles.slice(0, clickedIndex+1))
        return
    }

    let validClick = false

    // blocked check
    if (currentTile.type !== "blocked") {
      // already played check
      if (!(playedTiles.some(p => p[0] === position[0] && p[1] === position[1]))) {
        // first tile check
        if (playedTiles.length === 0) {
          validClick = true
        } else {
          // adjacency check
          if (isAdjacent(position, playedTiles[playedTiles.length - 1])) {
            validClick = true
          }
        }
      }
    }

    if (validClick) {
      setPlayedTiles([...playedTiles, [rowIndex, colIndex]])
    } else {
      console.log("Invalid click") // do something nicer later
    }
  }

  function isValidNextMove(rowIndex: number, colIndex: number): boolean {
      const tile = grid[rowIndex][colIndex]
      const lastPlayed = playedTiles[playedTiles.length - 1]
      
      if (!lastPlayed) return false
      if (tile.type === "blocked") return false
      if (playedTiles.some(p => p[0] === rowIndex && p[1] === colIndex)) return false
      if (!isAdjacent(lastPlayed, [rowIndex, colIndex])) return false
      
      return true
  }

  function checkSubmitValidity(): boolean {
      if (playedTiles.length === 0) return false
      for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
              if (isValidNextMove(row, col)) return true
          }
      }
      return false
  }
    
  function handleSubmit() {
    let total = 0
    let multiplier = undefined

    if (checkSubmitValidity()) {
      console.log("Valid moves still remain")
      return
    }

    for (const position of playedTiles) {
      const [row, col] = position
      const currentTile = grid[row][col]

      const tileVal = currentTile.value

      if (currentTile.type === "drain" && tileVal !== undefined) {
        if (multiplier !== undefined) {
          total += tileVal * multiplier
          multiplier = undefined
        } else {
          total += tileVal
        }
      }

      if (currentTile.type === "amp_next" && currentTile.value !== undefined) {
          multiplier = currentTile.value
      }
      if (currentTile.type === "amp_global" && currentTile.value !== undefined) {
          total *= currentTile.value
      }
    }

    setScore(total)
    if (total === puzzle.drain_target) {
      setGameStatus("won")
    } else {
      setGameStatus("lost")
    }

  }

  function handleReset() {
    setPlayedTiles([])
    setGameStatus("playing")
  }

  function handleNext() {
    if (puzzleIndex < puzzles.length - 1) {
        setPuzzleIndex(puzzleIndex + 1)
        handleReset()
    } else {
        console.log("No more puzzles!")
    }
  }

  function getTileClass(rowIndex: number, colIndex: number): string {
      const tile = grid[rowIndex][colIndex]
      const lastPlayed = playedTiles[playedTiles.length - 1]

      // background class based on tile type
      let bgClass = ""
      if (tile.type === "blocked") return "tile-blocked" // no state overlay
      if (tile.type === "drain") bgClass = "tile-drain"
      if (tile.type === "amp_next") bgClass = "tile-next-amp"
      if (tile.type === "amp_global") bgClass = "tile-global-amp"

      // state class based on game state
      let stateClass = ""
      if (lastPlayed && lastPlayed[0] === rowIndex && lastPlayed[1] === colIndex) {
          stateClass = "tile-recent"
      } else if (playedTiles.some(p => p[0] === rowIndex && p[1] === colIndex)) {
          stateClass = "tile-played"
      }

      return `${bgClass} ${stateClass}`.trim()
  }

  function getTileDisplay(tile: Tile): string {
      if (tile.type === "drain") return `${tile.value}`
      if (tile.type === "amp_next") return `x${tile.value} next`
      if (tile.type === "amp_global") return `x${tile.value} all`
      return ""
  }
  
  function getTileCenter(row: number, col: number) {
      return {
          x: col * (TILE_SIZE + GAP) + TILE_SIZE / 2,
          y: row * (TILE_SIZE + GAP) + TILE_SIZE / 2
      }
  }

  return (
    <main>
      <h1>Game</h1>
      <a href="/" >Home</a>

      <div style={{ position: "relative", width: svgSize, height: svgSize }}>
        <div 
          className="grid"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, ${TILE_SIZE}px)`,
            gridTemplateRows: `repeat(${gridSize}, ${TILE_SIZE}px)`,
            gap: `${GAP}px`
          }}
        >
          {playground}
        </div>

        <svg width={svgSize} height={svgSize} className="tube-layer">
          {/* lines showing played moves */}
          {playedTiles.slice(0, -1).map((pos, i) => {
              const from = getTileCenter(pos[0], pos[1])
              const to = getTileCenter(playedTiles[i + 1][0], playedTiles[i + 1][1])
              return (
                  <line
                      key={`played-${i}`}
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke="yellow"
                      strokeWidth="3"
                      className="tube-played"
                  />
              )
          })}
          {/* lines showing valid moves */}
          {playedTiles.length > 0 && (() => {
              const lastPlayed = playedTiles[playedTiles.length - 1]
              const neighbours = [
                  [lastPlayed[0]-1, lastPlayed[1]],
                  [lastPlayed[0]+1, lastPlayed[1]],
                  [lastPlayed[0], lastPlayed[1]-1],
                  [lastPlayed[0], lastPlayed[1]+1]
              ]
              return neighbours
                  .filter(([row, col]) => 
                      row >= 0 && row < gridSize &&
                      col >= 0 && col < gridSize &&
                      isValidNextMove(row, col)
                  )
                  .map(([row, col], i) => {
                      const from = getTileCenter(lastPlayed[0], lastPlayed[1])
                      const to = getTileCenter(row, col)
                      return (
                          <line
                              key={`valid-${i}`}
                              x1={from.x} y1={from.y}
                              x2={to.x} y2={to.y}
                              stroke="cyan"
                              strokeWidth="3"
                              className="tube-valid"
                          />
                      )
                  })
                })()}
        </svg>
      </div>

      <p>Goal is {puzzle.drain_target}</p>

      <button 
        onClick={() => handleSubmit()} 
        disabled={playedTiles.length === 0 || checkSubmitValidity()}
      >
        Submit
      </button>
      <button onClick={() => handleReset()}>Reset</button>
      {gameStatus === "won" && (
          <button onClick={() => handleNext()}>Next</button>
      )}
      {gameStatus === "lost" && (
          <p>you scored {score} - target was {puzzle.drain_target}</p>
      )}

      <p>{gameStatus}</p>

    </main>
  )
}