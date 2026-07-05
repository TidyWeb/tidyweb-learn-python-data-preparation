# Codex Notebook Rules

One rule. Four parts. Every concept. No exceptions.

---

## The Teaching Sequence

Every concept taught in every notebook follows this sequence exactly.

**Part 1 — Explain**
State what the concept is and why it exists. Plain English. No code yet.

**Part 2 — Dummy Example With Output**
Show the concept working on a dummy dataset with nothing to do with the
lesson data. Bread types, shoe sizes, city populations — anything neutral.
Use real executed code. Show the real output beneath it.
If the concept has a more complex form, show that too, still on dummy data,
still with output visible.
The learner must be able to see exactly what the code does and what it
produces before being asked to use it themselves.

**Part 3 — Question on the Lesson Dataset**
Ask the learner to apply what they have just seen to the actual lesson
dataset. Name the dataset. Name the column or operation. Make the question
specific and unambiguous.

**Part 4 — Empty Code Cell**
Nothing pre-filled. No hints. No comments. The learner answers here.

---

## What Does Not Change

- df is always the dataframe variable name
- pd is always the pandas alias
- These do not change between the dummy example and the learner's cell
- If a variable name or alias changes for any reason, that change is its
  own teaching point with its own four-part sequence

---

## What Must Always Be Visible

Output must be shown beneath every worked example.
A worked example without visible output is not a worked example.

---

## Findings Note

Every session ends with a plain-English findings section.
Three observations about what the data showed.
Not what commands were used. What the data showed.

---

## One Dataset Per Block

Each block has one lesson dataset. Stick to it throughout.
The dummy examples use unrelated neutral data.
The learner applies every concept to the one lesson dataset.
Do not introduce additional datasets mid-block.

---

## Show Structure Before Building

Before building any notebook, show the concept list in order.
Wait for approval. Do not build without it.
