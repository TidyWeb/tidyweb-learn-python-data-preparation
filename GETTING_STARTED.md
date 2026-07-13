# Start here

This course has two parts: HTML chapters to read in a browser and notebooks to
run on your own computer. The required outcome is to prepare a deliberate
Python table for SQL. Download or clone the whole repository so that the
notebooks stay beside their `datasets` folder.

## Choose how to get the course

### Download a ZIP

On the repository page, choose **Code**, then **Download ZIP**. Extract the ZIP
and open a terminal in the extracted project folder. Keep the folder structure
unchanged; the notebooks expect `datasets/` to stay beside `notebooks/`.
The launcher is inside that extracted project folder. Do not run it from your
home folder, the folder containing the ZIP, or the parent folder.

### Clone with Git

If Git is already familiar, clone the repository and open a terminal in the
cloned project folder. Git is useful, but it is not required for this course.

## 1. Make a small Python environment

Open a terminal in the downloaded project folder and run:

```bash
python -m venv .venv
```

On a system where `python` is not available, try `python3` on macOS or Linux,
or `py` on Windows. Use the same replacement in the later commands.

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

If the terminal says that `pip` or a course library cannot be found, activate
`.venv` again and repeat the install command. The active environment normally
appears as `(.venv)` at the start of the terminal prompt.

## 2. Start the notebook workspace

The HTML book opens directly in a browser. The notebooks need JupyterLab, which
is a local workspace that runs on your computer. Use the included launcher from
the repository root:

### Linux or macOS

```bash
./start_jupyter_lab.sh
```

If the terminal says `bash: start_jupyter_lab.sh: No such file or directory`,
the terminal is in the wrong folder. Use your file manager's **Open Terminal
Here** action on the folder that contains `start_jupyter_lab.sh`, or change to
that folder first. Running `ls` there should show the launcher. Then run the
command above. If `./start_jupyter_lab.sh` says `Permission denied`, run
`bash start_jupyter_lab.sh` from that same folder instead.

### Windows

Double-click `start_jupyter_lab.bat`.

The launcher starts JupyterLab from the repository root, keeps it bound to your
own computer, and opens it without a token prompt. The HTML notebook buttons
then know where `notebooks/` and `datasets/` are. A browser cannot start a
local program by itself, so do not open `.ipynb` files directly from the HTML
file manager view.

If another Jupyter server is already running on port `8888`, stop it in the
terminal that launched it before starting this course launcher. Otherwise the
old server may show a token screen or point at the wrong folder.

If JupyterLab says `Could not find path: notebooks/...`, you are connected to a
Jupyter server whose root is not the downloaded course folder. Run
`jupyter server list`, stop the server listed on port `8888` with
`jupyter server stop 8888`, then start this course launcher from the repository
root. Close the old Jupyter browser tab and use a fresh notebook link.

If the launcher says that Jupyter is not installed, activate the course
environment and run `python -m pip install -r requirements.txt`.

## 3. Check that it worked

Open `notebooks/00_environment_check.ipynb` in JupyterLab and run its cells
from top to bottom. It confirms Python and the course libraries are available
and that the bundled `iris.csv` file can be found.

You are ready when every cell completes without a red error message and the
dataset check reports `Dataset found: True`.

If you prefer to start Jupyter manually, run it from the repository root with:

```bash
jupyter lab --ServerApp.ip=127.0.0.1 --ServerApp.port=8888 --ServerApp.root_dir=. --ServerApp.token='' --ServerApp.password=''
```

## 4. Follow the learning route

1. Open [the bookshelf](index.html).
2. Begin with Foundation 1, unless you already know the Python foundations;
   then begin with Block 1.
3. Read the matching HTML chapter in `notes/` before opening its notebook.
4. Complete the notebook slowly. Keep learner-answer cells empty until you are
   ready to try the task.
5. Open the matching `Refresh Check 1–8` button beside each block. Do not
   reopen the worked example while completing the check.
6. Move on only after you can explain the finding in ordinary language.

The bookshelf marks the Python-to-SQL hand-off and bridge as the end of the
required route. The later visualisation, statistics, EDA, dashboard, and Git
materials are optional continuation work.

The paths inside the notebooks are relative. Keep the repository folder shape
intact; do not move a notebook away from its `datasets` folder.
