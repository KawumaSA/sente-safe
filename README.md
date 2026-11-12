# Sente Safe: working notes for the group

Six pages, twelve sections, one section per member. Plain HTML and CSS, no templates or builders.

## Files

| File | Sections |
|---|---|
| `index.html` | S1 Welcome (hero), S2 The problem |
| `scams.html` | S3 Fake jobs and scholarships, S4 Fake loans and investments |
| `tricks.html` | S5 Fake prizes and PIN scams, S6 SIM cards and National ID |
| `safe.html` | S7 Check before you pay, S8 Safe habits |
| `act.html` | S9 Been scammed? First hour, S10 Where to report |
| `learn.html` | S11 Glossary and FAQ, S12 About and sources |

Shared: `css/style.css`, `js/main.js`, `images/` (logo and favicon, plus your pictures).

`js/main.js` is about 40 lines and does two things: the scam tip on the home page (S1) and the red-flag counter on the checklist (S7). Pages still work without it. S1 and S7 owners should be able to explain it line by line.

## Rules

1. Edit only your own section, inside its `<section>` tag. Keep the `id` and the `<h2>`.
2. Do not change the header, navigation or footer. They must stay identical on every page. If one must change, tell the lead so all six pages are updated together.
3. Every section already has draft text. It is a starting point only: rewrite it in your own words, check each fact against the numbered source, and keep the `[n]` citations. Do not delete a fact that has a source unless you replace it with one that has.
4. Every section has a dashed image slot. Add your picture to `images/` using the file name shown in the slot, then replace the slot `<div>` with an `<img>` as the comment above it explains. No dashed slot may be left when you submit. Every `<img>` needs a `width`, `height` and meaningful `alt` text (use `alt=""` only for decoration). Credit any image that is not ours.
5. Write your own words and name the source next to each fact. Sample scam messages are invented, with no real numbers or names.
6. Need a new style? Ask the lead, or add it at the bottom of `css/style.css` with a comment saying whose it is.
7. Before you share your work, run your page through the W3C validators (see below) and fix every error.

## Ready-made pieces in style.css

- `<div class="callout">` warning or tip box (add `safe` for a green one)
- `<p class="example">` invented sample scam message
- `<ol class="steps">` numbered steps
- `<table class="data">` with `<caption>`, `<th>` and `<td>`
- `<dl class="glossary">` with `<dt>` and `<dd>`
- `<blockquote class="quote">` with `<cite>`
- `<figure class="figure">` with `<figcaption>` for image and credit

## Checking your work

- HTML: https://validator.w3.org/ (Validate by File Upload)
- CSS: https://jigsaw.w3.org/css-validator/ (By file upload, pick `css/style.css`)
- Phone view: narrow the browser window, and check the navigation and your section still read well.
- Be ready to explain every line of your section and make a small change live.

## Adding your picture

1. Take or make an image about 1200 x 750 px (16:10) and keep it under 200 KB (JPG or PNG; compress it if larger).
2. Use only your own photo or graphic, or an openly licensed image you can credit. No copied news images, no brand logos, no real phone numbers, no ID numbers, and no faces without permission.
3. Save it in `images/` with the file name shown in your slot.
4. In your section, replace the `<div class="slot">...</div>` with `<img src="images/your-file.jpg" width="1200" height="750" alt="what the picture shows">`.
5. Write the credit in the `<figcaption>`, and make sure the row for your file in the credits table (About and sources) is filled in.
