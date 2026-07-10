# Git and GitHub - Terminal Exercise Walkthrough

Follow these steps in order in your terminal.
Do not skip steps. Each one builds on the last.
Git version 2.43.0 is already installed on this machine.

---

## Part 1 - One-Time Setup

These two commands configure Git with your identity.
Run them once. They apply to every project on this machine.

### Step 1

```bash
git config --global user.name "Phil"
```

What it does: registers your name on every commit you make.

What to look for: no output means it worked.

### Step 2

```bash
git config --global user.email "your-github-email@example.com"
```

What it does: registers your email. Use the same one as your GitHub account.

What to look for: no output means it worked.

### Step 3

```bash
git config --list
```

What it does: shows your current Git configuration.

What to look for: `user.name` and `user.email` should appear with the values you just set.

---

## Part 2 - Create a Local Repository

### Step 4

```bash
cd <path-to-your-Learn_Python_Data-folder>
```

What it does: moves you into your working project folder.

### Step 5

```bash
git init
```

What it does: tells Git to start tracking this folder.

What to look for: an `Initialized empty Git repository in...` message.

### Step 6

```bash
git status
```

What it does: shows the current state of the repository.

What to look for: a list of untracked files that Git can see but has not been told to track yet.

---

## Part 3 - Stage and Commit

### Step 7

```bash
git add datasets/iris.csv
```

What it does: stages one specific file for the next commit.

What to look for: no output. Run `git status` after to confirm it is staged.

### Step 8

```bash
git status
```

What it does: shows what is now staged.

What to look for: `iris.csv` should appear under `Changes to be committed`.

### Step 9

```bash
git commit -m "Add iris dataset to repository"
```

What it does: saves the staged file as a permanent snapshot with a message.

What to look for: confirmation showing 1 file changed.

### Step 10

```bash
git log
```

What it does: shows the commit history.

What to look for: your commit should appear at the top with your name, email, date, and message. Press `q` to exit.

---

## Part 4 - Stage Multiple Files and Commit Again

### Step 11

```bash
git add notes/Block\ 1\ Table\ Literacy\ Bridge.html
```

What it does: stages the Block 1 HTML reference note.

What to look for: no output. Confirm with `git status`.

### Step 12

```bash
git add notes/Block\ 2\ Selection\ and\ Filtering.html
```

What it does: stages the Block 2 HTML reference note.

### Step 13

```bash
git status
```

What it does: shows both files staged and ready.

What to look for: two files under `Changes to be committed`.

### Step 14

```bash
git commit -m "Add Block 1 and Block 2 HTML reference notes"
```

What it does: commits both files together as one logical snapshot.

What to look for: confirmation showing 2 files changed.

### Step 15

```bash
git log
```

What it does: shows the updated history.

What to look for: two commits now, newest at the top. Press `q` to exit.

---

## Part 5 - Connect to GitHub and Push

Before this part: you need a GitHub account and a new empty repository created on GitHub.
Do not initialise the GitHub repo with a README. Leave it completely empty.
Name it: `learn-python-data`.

### Step 16

```bash
git remote add origin https://github.com/TidyWeb/learn-python-data.git
```

What it does: tells your local Git where the remote repository on GitHub lives.

What to look for: no output means it worked.

### Step 17

```bash
git remote -v
```

What it does: confirms the remote is registered correctly.

What to look for: two lines showing `origin` with fetch and push URLs.

### Step 18

```bash
git push -u origin main
```

What it does: uploads your commits to GitHub for the first time.

The `-u` flag sets `origin main` as the default so future pushes only need `git push`.

What to look for: progress output ending in `Branch 'main' set up to track remote branch 'main' from 'origin'.`

### Step 19

Open <https://github.com/TidyWeb/learn-python-data> in your browser.

What to look for: your committed files should be visible in the repository.

---

## Part 6 - The Daily Workflow

From now on, at the end of every working session:

```bash
git status
git add .
git commit -m "describe what you did in this session"
git push
```

That is the complete daily loop. Four commands. Run them every time.

---

## What to Do If Push Is Rejected

If GitHub rejects your push with `failed to push some refs`:

```bash
git pull origin main --rebase
git push
```

This pulls any changes from GitHub first, applies your commits on top, then pushes.
At prep course level you will not encounter this often, but it is the correct response when you do.
