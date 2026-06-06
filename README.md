# SurgeCap

This is SurgeCap! Created as a proof of concept for what I will one day turn into a full fledged puzzle game, this is a puzzle game in which you charge a battery by connecting cells in a grid. Each cell is worth a certain amount of charge, with some special modifier cells affecting cells around it or your total charge.

Built over a few days as a personal project, I used this web-app to experiment and learn TypeScript in a practical context, get some familiarity with the whole web-app design and development process, and lastly bring life to an idea I was sitting on. This site is built almost exclusively in Next.js and TypeScript, with plain CSS for styling, and is hosted on Vercel.

The game has plenty of room to grow, while the current list of mechanics are small, the ideas were endless. Cells that retroactively affect other cells, cells that transported you to other cells, or simply cells you needed to pass through; the core idea is fun and understandable enough to allow much versatility.

## Tech Stack

Next.js · React · TypeScript · CSS · Vercel

## Links

- [GitHub](https://github.com/bfararjeh/surgecap)
- [LinkedIn](http://www.linkedin.com/in/bfararjeh)
- [Portfolio](https://bahaalfararjeh.dev/)

---

## How to Play

### The Goal

The aim of each puzzle is to charge the battery as much as required. Too much and you'll overcharge, too little and you'll underpower, electricity is a precise endeavour!

### The Grid

Each puzzle is a grid of cells. Click any cell to start your path. From there, you can only move to cells directly above, below, left, or right of your last cell. You cannot revisit a cell you've already passed through.

Electricity can't be contained easily, your path only ends when no valid moves remain; you can't stop halfway with adjacent cells next door!

### Charging

Once your path is complete, you can attempt to charge the battery. If your total matches the target exactly, the battery is fully charged. Too little and you're underpowered. Too much and you've overcharged the circuit.

Good luck, the power grid needs you!
