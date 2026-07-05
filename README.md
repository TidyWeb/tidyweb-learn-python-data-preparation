TidyWeb's Learn Python Data Preparation
=======================================

## Read this first

This project has two parts:

- the live HTML site is the reading experience
- the GitHub repo is the full project package

That means:

- you can read the HTML notes online in the browser
- the Jupyter notebooks are companion working files and are not meant to run on the live website
- to use the notebooks properly, download or clone the repo so the notebooks and datasets stay together locally
- if you are not sure how to clone a GitHub repo, use the live guide here: [Git and GitHub Reference](https://tidyweb.github.io/tidyweb-learn-python-data-preparation/notes/git_and_github/git_and_github_reference.html#commands)

This is the clean Git-facing branch of the `Learn_Python_Data` project.

This project is built around personal preparation for Code Institute's Data Analyst with AI Bootcamp, a 16-week course. It is intended for the time before that course begins, so the learner can arrive already grounded in how Python is used in data analysis.

It is not a general Python programming course.

## What this project is for

This project teaches the Python-and-data-analysis side of early preparation for the Code Institute Skills Bootcamp, but it should also work well for any data-analysis bootcamp learner who wants a stronger starting point.

It focuses on the practical habits and concepts that make the later course easier to absorb:

- concept notes in HTML
- companion Jupyter notebooks
- bundled datasets used by those notebooks

What it teaches includes:

- reading table-shaped data with pandas
- filtering, cleaning, grouping, and inspecting datasets
- chart use and basic visual reasoning
- statistics foundations in plain English
- full exploratory data analysis habits
- companion Git and GitHub concepts for project workflow

The bootcamp this work is preparing for is here:

- [Code Institute: Data Analyst with AI Bootcamp](https://codeinstitute.net/global/data-analytics-and-ai-bootcamp/)

The HTML side is the primary public experience.

The notebooks are companion working materials:

- they can be downloaded
- they can be opened locally in Jupyter
- they are included in the repo so learners do not need to hunt for datasets elsewhere

## What you will need

To read the HTML book itself, you only need:

- internet access
- a web browser

To use the notebook side properly, you will also need:

- a local Python installation
- Jupyter Notebook or JupyterLab
- the core Python libraries used by the notebooks, especially `pandas`
- for the chart notebooks, the plotting libraries used in the project environment
- a local copy of this repo so the notebooks and datasets stay together

Useful official starting points:

- Python downloads: [python.org/downloads](https://www.python.org/downloads/)
- Jupyter installation guide: [jupyter.org/install](https://jupyter.org/install)
- JupyterLab installation documentation: [JupyterLab installation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)
- pandas installation guide: [pandas installation](https://pandas.pydata.org/docs/getting_started/install.html)

In plain English:

- the HTML notes can be read online
- the notebooks are companion working files and are meant to be run locally
- the datasets needed by those notebooks are bundled inside the repo

This project is designed so learners do not need to search the internet for the datasets. The main extra requirement is a local notebook environment.

## Project shape

- `index.html` is the bookshelf landing page
- `notes/` contains the HTML chapter pages
- `notebooks/blocks_1_10/` contains the notebook companions
- `datasets/` contains the CSV files used by the notebooks
- `docs/` contains supporting course and dataset documentation

## Important publishing rule

This Git branch is intended to be portable.

That means:

- no machine-specific clutter
- no backup debris
- no dependence on files that live only in the workshop branch

Some notebooks still contain local absolute paths from the working environment. Those should be converted to repo-relative paths before final publication or wider reuse.

## Public-facing intent

The intended experience is:

1. Read the HTML chapter.
2. Open the matching notebook.
3. Use the bundled datasets.
4. Work through the exercises without needing outside downloads.

## Notes on outputs

Some notebooks ask the learner to create new files such as cleaned CSV outputs.

Those are learner-generated exercise results, not required starting files for the repo. You build them yourself by working on the supplied datasets.
