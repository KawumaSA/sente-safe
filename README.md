# Sente Safe

Sente Safe is a student awareness website built to help people in Uganda spot mobile money scams before they lose money. The project explains common scam patterns, shows how to stay safe, and tells users what to do if they have already been targeted.

## What the project does

This site is designed around a simple idea: people should be able to check a suspicious offer before paying. It teaches users how to recognize fake jobs, scholarships, loans, prize messages, fake investment offers, and tricks involving PINs, SIM cards, or National ID details.

The website includes:

- A homepage that explains the problem and points people to the most useful pages
- Scam education pages covering fake jobs, loans, scholarships, and prize scams
- A safe-use page with a red-flag checklist and practical habits
- An action page with the first steps to take after being scammed
- A learning page with glossary, sources, and more background information

## Project structure

- `index.html` — home page
- `scams.html` — scam examples and scam types
- `tricks.html` — mobile money tricks and common scam tactics
- `safe.html` — safety checklist and good habits
- `act.html` — what to do after a scam
- `learn.html` — glossary, sources, and references
- `css/style.css` — shared styling for the whole website
- `js/main.js` — small JavaScript for the rotating scam tips and the red-flag checklist counter
- `images/` — logos, icons, and page illustrations

## Features

- Clean, mobile-friendly layout
- Shared navigation across all pages
- A simple checklist that counts red flags before a payment is made
- Scam tips that change on the home page
- Clear guidance on where to report fraud and how to protect mobile money accounts

## How to run it

Because this is a static website, you can open any page in a browser directly:

1. Open `index.html` in your browser, or
2. Use a local server in the project folder if you prefer

Example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Tech used

- HTML5
- CSS3
- JavaScript
- No frameworks or build tools needed

## Purpose

The project is a student-led awareness campaign focused on digital safety and scam prevention. It is meant to educate, warn, and guide people toward safer mobile money habits, especially in a setting where scam messages can look convincing and urgent.
