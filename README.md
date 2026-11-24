# Console Rock Paper Scissors

A beginner-friendly **Rock, Paper, Scissors** game played directly in the browser console using JavaScript. Built as a learning project without using loops or arrays, keeping the logic straightforward and easy to follow.

> **Note for Complete Beginners:** This solution is written using basic functions, conditionals (`if / else`), string methods, and repeated function calls—no loops or arrays required. Hopefully, it helps other complete beginners see how a small JS project comes together step by step!

## Project Structure

```text
.
├── index.html   # Blank page with external script link and favicon
├── script.js    # Game logic, score tracking, and console output
└── README.md    # Project documentation
```

## How It Works

1. **Computer Choice (`getComputerChoice`)**: Generates a random integer from `0` to `99` using `Math.random()` and `Math.floor()`, then maps ranges to `"Rock"`, `"Paper"`, or `"Scissors"`.
2. **Human Choice (`getHumanChoice`)**: Prompts the player for input and normalizes casing so `"rock"`, `"ROCK"`, or `"rOcK"` all become `"Rock"`.
3. **Round & Game Logic (`playGame` & `playRound`)**: Tracks `humanScore` and `computerScore` inside `playGame()`, evaluates each round's winner, prints round results to the console, and announces the final winner.

## How to Run and Play

1. Clone or download the repository to your computer.
2. Open `index.html` in your web browser.
3. Open **Developer Tools** (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`) and go to the **Console** tab.
4. Respond to the prompt popups for each round and watch the round results, final score, and winner appear in the console.
5. Refresh the page to play again.

## What I Practiced

- Linking an external JavaScript file to HTML
- Writing reusable functions and returning values
- Using `Math.random()` and `if / else if / else` branching
- Formatting user input with `.toUpperCase()`, `.toLowerCase()`, and `.slice()`
- Tracking state with score variables and `console.log()`