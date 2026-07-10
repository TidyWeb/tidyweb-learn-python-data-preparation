# Start here

This course has two parts: HTML chapters to read in a browser and notebooks to
run on your own computer. Download or clone the whole repository so that the
notebooks stay beside their `datasets` folder.

## 1. Make a small Python environment

Open a terminal in the downloaded project folder and run:

```bash
python -m venv .venv
```

Activate it:

```bash
# macOS or Linux
source .venv/bin/activate

# Windows PowerShell
.venv\Scripts\Activate.ps1
```

Install the course tools:

```bash
python -m pip install -r requirements.txt
```

## 2. Check that it worked

Run:

```bash
jupyter lab
```

Jupyter will open in your browser. Open `notebooks/00_environment_check.ipynb`
and run its cells from top to bottom. It confirms Python and the course
libraries are available and that the bundled `iris.csv` file can be found.

## 3. Follow the learning route

1. Read the matching HTML chapter in `notes/`.
2. Complete the notebook slowly. Keep learner-answer cells empty until you are
   ready to try the task.
3. Do the matching refresh check without reopening the worked examples.
4. Move on only after you can explain the finding in ordinary language.

The paths inside the notebooks are relative. Keep the repository folder shape
intact; do not move a notebook away from its `datasets` folder.
