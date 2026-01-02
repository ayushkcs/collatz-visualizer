# Collatz Conjecture Visualizer

- An interactive, browser-based visualization of the `Collatz Conjecture` that transforms an abstract number theory problem into a dynamic, visual experience.

- This project allows users to explore how simple deterministic rules can generate surprisingly complex numerical behavior.

## Overview

The **Collatz Conjecture** (also known as the *3n + 1 problem*) is one of the most famous unsolved problems in mathematics. Despite its simple definition, no general proof exists that confirms it holds for all positive integers.

This visualizer provides:
- Step-by-step execution of the Collatz sequence.
- Real-time charting of value progression.
- Live statistics (steps, peak value, path length).
- Visual parity cues (odd vs even transitions).
- An intuitive UI suitable for both learners and enthusiasts.

The application runs entirely in the browser with no backend dependencies.

## What Is the Collatz Conjecture?

Given any **positive integer** `n`, define the next term in the sequence as:

- **If `n` is even** → `n / 2`

- **If `n` is odd** → `3n + 1`

Repeat this process with the resulting value.

### The Conjecture States

> No matter which positive integer you start with, the sequence will **always reach 1**.

Once `1` is reached, the sequence enters the trivial loop:

`1 → 4 → 2 → 1`

### Example

Starting with `n = 27`:

`27 → 82 → 41 → 124 → 62 → 31 → ...`

This sequence reaches a peak of **9,232** and takes **111 steps** to reach `1`.

Despite extensive computational verification (up to extremely large values), **no formal proof exists** that this behavior holds universally.

## Features

**Interactive Visualization:**

- Real-time line chart plotting the sequence values.
- Smooth updates using Chart.js.

**Live Statistics Dashboard:**

- Current value.
- Total steps executed.
- Peak value reached.
- Sequence length (path size).

**Bubble Trail Representation:**

- Each term rendered as a circular node.
- Color-coded by parity:
  - Green → even
  - Red → odd
- Directional arrows indicate sequence flow.

**Execution Controls:**

- **Visualize** – start sequence execution.
- **Pause** – halt progression mid-sequence.
- **Reset** – clear state and restart.

**Input Validation:**

- Accepts *only positive integers*.
- Graceful error handling for invalid input.

## Technical Architecture

#### Frontend Stack
- **HTML5** – semantic structure and layout.
- **CSS3** – custom dark theme, responsive layout, glassmorphism UI.
- **Vanilla JavaScript** – state management, sequence logic, DOM updates.
- **Chart.js** – data visualization and chart rendering.

No frameworks. No backend.

## Core Algorithm

The Collatz sequence is generated iteratively:

```
while n ≠ 1:
	if n is even:
		n = n / 2
	else:
		n = 3n + 1
```

Each iteration updates:
- Current value.
- Step counter.
- Peak value (maximum observed).
- Visual components (chart and bubble trail).

Execution halts automatically when `n = 1`.

## Project Structure

```
collatz-visualizer/
│
├── index.html    # UI structure and layout
├── style.css     # Visual design and responsiveness
├── script.js     # Core logic and visualization handling
└── README.md     # Project documentation
```

## Running Locally

This project requires **no installation or build steps**.

**Clone the repository:**

`git clone https://github.com/ayushkcs/collatz-visualizer.git`

`cd collatz-visualizer`

Then open the application:

- Simply open `index.html` file in any modern browser.

## Limitations

- This tool **does not prove** the Collatz Conjecture.
- Very large starting values may result in long execution times.
- JavaScript number precision limits apply for extremely large integers.

## References

- <a href="https://cses.fi/problemset/task/1068">CSES Problem Set – Weird Algorithm (1068)</a>
- <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Wikipedia – Collatz Conjecture</a>

## Contributions & Extensions

Contributions are welcome.

If you would like to:
- Report a bug or UI issue.
- Improve performance or visuals.
- Add new visualizations or analytics (e.g. cycle detection, logarithmic scaling, heatmaps).
- Extend the project with mathematical insights or documentation.

Please feel free to:
- Open an **issue** describing the problem or idea.
- Submit a **pull request** with a clear explanation of your changes.

Thoughtful enhancements and mathematically meaningful additions are especially encouraged.

---

Built by <strong>@ayushkcs</strong> ✦ <a href="https://www.linkedin.com/in/ayushkcs/">LinkedIn</a> ✦ <a href="https://x.com/ayushkcs/">X</a> ✦ <a href="mailto:kayush2k02@gmail.com">Email</a>
