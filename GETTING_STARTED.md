# Getting Started: Put the Course on Your Computer

This guide assumes you have never downloaded a GitHub project, used Git, opened a terminal in a folder, or started JupyterLab.

You do not need to understand every command yet. Follow one step at a time, in order. Do not skip the checks.

## What you are going to do

You will:

1. make a folder for the course;
2. put the complete course inside it;
3. open a terminal in the correct folder;
4. create a private Python environment;
5. install the course tools;
6. start JupyterLab; and
7. run a notebook that checks everything works.

The course contains HTML pages to read and Jupyter notebooks to use. Keep the whole course together. Do not move individual notebooks or the `datasets` folder elsewhere.

---

## Before you begin

You need:

- an internet connection;
- a web browser;
- Python 3 installed; and
- enough permission to create folders and install Python packages on your computer.

If you use the Git method, you also need Git installed. If you do not know whether Git is installed, that is fine: the guide includes a check.

You will see commands in boxes like this:

```bash
example command
```

Type or paste only the command. Do not type the word `bash`, the three backticks, or any text shown before the command in your terminal.

---

## Step 1 — Choose Git or ZIP

There are two ways to put the course on your computer. Choose one.

### Git method

Choose Git if you want to practise Git and GitHub. Git can also make future course updates easier.

### ZIP method

Choose ZIP if you do not have Git or want the simplest download. You will receive the same course files, but the folder will not be connected to GitHub.

You do not need to do both methods.

---

## Step 2 — Create one empty course folder

First choose where the course will live. Your Documents folder is a sensible place.

1. Open your computer's file manager:
   - **Fedora/KDE:** open **Dolphin**.
   - **macOS:** open **Finder**.
   - **Windows:** open **File Explorer**.
2. Open **Documents**, or another place you can find again.
3. Create a new folder.
4. Name it `Learn Python Data`.
5. Open that folder.

The folder must be empty before you continue. Do not use the general Downloads folder as the course folder.

---

## Step 3A — Git method: open a terminal before cloning

If you chose ZIP, skip to **Step 3B**.

A terminal is a window where you give the computer written commands. The Git command will not work until the terminal is open.

You must open the terminal inside the empty `Learn Python Data` folder you just created.

### Fedora/KDE Plasma

1. Open the empty `Learn Python Data` folder in Dolphin.
2. Right-click an empty part of the folder window. Do not right-click a file.
3. Choose **Open Terminal Here**.

If that choice is not shown, press **F4** in Dolphin. A terminal panel opens at the bottom of the folder window.

### macOS

Use either method below.

**Method 1: Finder menu**

1. Find the `Learn Python Data` folder in Finder.
2. Right-click the folder.
3. Choose **Services → New Terminal at Folder** if that choice is available.

**Method 2: drag the folder into Terminal**

1. Open the **Terminal** application.
2. Type `cd` followed by one space. Do not press Enter yet.
3. Drag the `Learn Python Data` folder from Finder into the Terminal window.
4. The folder location appears after `cd `.
5. Press **Enter**.

### Windows

Use either method below.

**Method 1: right-click inside the folder**

1. Open the empty `Learn Python Data` folder in File Explorer.
2. Right-click an empty part of the folder window.
3. Choose **Open in Terminal**.

**Method 2: use the address bar**

1. Open the empty `Learn Python Data` folder in File Explorer.
2. Click the address bar at the top of the window.
3. Type `powershell`.
4. Press **Enter**.

A blue or black terminal window should open. Leave the File Explorer window open too.

### Check that the terminal is in the empty folder

On Fedora, macOS, or Git Bash, run these commands one at a time:

```bash
pwd
ls -la
```

On Windows PowerShell, run:

```powershell
Get-Location
dir -Force
```

The location shown should end with your `Learn Python Data` folder. The file list should not contain another project.

If the location is wrong, close the terminal and repeat the platform instructions above. Do not run the clone command until the location is correct.

### Check that Git is installed

Run:

```bash
git --version
```

If you see a Git version number, continue.

If you see `command not found`, `git is not recognized`, or a similar message, Git is not installed. Install Git, reopen the terminal in this folder, and repeat the check. You can use the ZIP method instead.

### Clone the course

Copy the complete command below, paste it into the terminal, and press **Enter**:

```bash
git clone https://github.com/TidyWeb/tidyweb-learn-python-data-preparation.git .
```

The dot at the very end is part of the command. It means: put the course inside the folder I am already in.

Wait until the terminal finishes. You know it has finished when you can type another command and the normal prompt has returned.

If Git says the destination is not empty, stop. Do not force it and do not delete unknown files. Start again with a new empty folder.

Now continue to **Step 4**.

---

## Step 3B — ZIP method: download and extract the course

If you completed the Git method, skip to **Step 4**.

### Download the ZIP from GitHub

1. Open the course repository page in your browser:
   [tidyweb-learn-python-data-preparation](https://github.com/TidyWeb/tidyweb-learn-python-data-preparation)
2. Find the green **Code** button near the top of the page.
3. Click **Code**.
4. Click **Download ZIP**.
5. Wait for the download to finish.

The downloaded file will usually be in your Downloads folder. Its name will end in `.zip`.

### Move the ZIP into your course folder

1. Open Downloads in your file manager.
2. Find the downloaded ZIP file.
3. Move it into the empty `Learn Python Data` folder you created in Step 2.
4. Open the `Learn Python Data` folder.

### Extract the ZIP

The ZIP is a compressed package. You must extract it before using the course.

- **Fedora/KDE:** right-click the ZIP and choose **Extract → Extract Archive Here**.
- **macOS:** double-click the ZIP.
- **Windows:** right-click the ZIP, choose **Extract All**, check the destination, then click **Extract**.

Extraction may create a long-named folder inside `Learn Python Data`. That is normal.

Open the extracted folder. Keep opening folders until you see all of these items together:

```text
requirements.txt
datasets
notebooks
start_jupyter_lab.sh
start_jupyter_lab.bat
```

This is the course folder. From now on, whenever this guide says “course folder,” it means this exact folder, not the ZIP and not the folder above it.

### Open a terminal in the extracted course folder

The next steps use written commands, so open a terminal in this exact folder.

- **Fedora/KDE:** right-click an empty area in the folder and choose **Open Terminal Here**. If needed, press **F4** in Dolphin.
- **macOS:** right-click the folder and choose **Services → New Terminal at Folder**. If that is unavailable, use the drag-the-folder method explained in Step 3A.
- **Windows:** right-click an empty area and choose **Open in Terminal**. You can also click the File Explorer address bar, type `powershell`, and press **Enter**.

The folder is no longer empty because it now contains the course. That is correct for the ZIP method.

---

## Step 4 — Prove you are in the correct course folder

Do this check whether you used Git or ZIP.

On Fedora, macOS, or Git Bash, run:

```bash
pwd
ls
```

On Windows PowerShell, run:

```powershell
Get-Location
dir
```

The list must include:

```text
requirements.txt
datasets
notebooks
```

If you cannot see `requirements.txt`, stop. You are in the wrong folder. Do not run any Python setup commands yet.

Use your file manager to find the folder containing `requirements.txt`, open a new terminal in that folder, and repeat this check.

---

## Step 5 — Create the course's private Python environment

A Python environment keeps this course's tools separate from other Python work on your computer.

You create it once. You do not create it again every time you study.

### Fedora or macOS

Run:

```bash
python -m venv .venv
```

If the terminal says `python` cannot be found, run this instead:

```bash
python3 -m venv .venv
```

### Windows

Run:

```powershell
py -m venv .venv
```

Wait for the command to finish. It creates a hidden folder named `.venv` inside the course folder. Do not move, rename, or edit that folder.

---

## Step 6 — Activate the environment

Activation tells the terminal to use the private environment you just created.

### Fedora or macOS

Run:

```bash
source .venv/bin/activate
```

### Windows PowerShell

Run:

```powershell
.venv\Scripts\Activate.ps1
```

### Windows Command Prompt

Run:

```bat
.venv\Scripts\activate.bat
```

When activation works, `(.venv)` normally appears near the start of the terminal line.

Do not continue until the environment is active.

---

## Step 7 — Install the course tools

Check that `(.venv)` is visible in the terminal. Then run:

```bash
python -m pip install -r requirements.txt
```

The computer now downloads and installs JupyterLab and the other tools used by the course. This may take several minutes.

Lines of text will move through the terminal. That is normal. Wait until the normal terminal prompt returns.

If the message says `requirements.txt` cannot be found, stop. Return to Step 4 because the terminal is in the wrong folder.

---

## Step 8 — Start JupyterLab

Keep the terminal open. Check that `(.venv)` is still visible.

### Fedora or macOS

Run:

```bash
./start_jupyter_lab.sh
```

If the terminal says `Permission denied`, run:

```bash
bash start_jupyter_lab.sh
```

### Windows

Run:

```bat
start_jupyter_lab.bat
```

You can also double-click `start_jupyter_lab.bat` in the course folder.

JupyterLab should open in your web browser. Keep the terminal running in the background. Closing that terminal will stop JupyterLab.

A web page cannot start JupyterLab for you. Start JupyterLab first, then use notebook links in the course pages.

---

## Step 9 — Run the environment check notebook

In the left side of JupyterLab:

1. double-click the `notebooks` folder;
2. double-click `00_environment_check.ipynb`;
3. click the first code cell; and
4. press **Shift + Enter** to run it and move to the next cell.

Continue pressing **Shift + Enter** until every cell has run.

The setup is working when:

- there are no red error messages;
- the course libraries are found; and
- you see `Dataset found: True`.

If you see that result, the difficult setup part is finished.

---

## Step 10 — Open the course bookshelf

JupyterLab runs the notebooks on your computer. The course bookshelf contains the HTML lessons that explain what to do in those notebooks.

You can use either the hosted bookshelf or the downloaded bookshelf. Both versions can open notebooks through the JupyterLab server running on your computer.

### Option A — Use the hosted bookshelf

Open this address in your browser:

[https://tidyweb.github.io/tidyweb-learn-python-data-preparation/](https://tidyweb.github.io/tidyweb-learn-python-data-preparation/)

This is the course website hosted by GitHub Pages. It requires an internet connection and normally shows the latest published version of the HTML lessons.

### Option B — Use the downloaded bookshelf

1. Open your course folder in your file manager.
2. Find the file named `index.html`.
3. Double-click `index.html`.
4. If your computer asks which program to use, choose your normal web browser.

The local address will begin with `file://`. That is normal. This version works without an internet connection and matches the files currently downloaded to your computer.

### Keep the lesson and notebook visible separately

The easiest arrangement is to use two browser windows:

- **Window 1 — Course bookshelf:** keep the HTML explanation open here.
- **Window 2 — JupyterLab:** keep the matching notebook open here.

You can place the windows side by side or switch between them. Read a section in the HTML lesson, then perform that step in the notebook without losing your place.

Keep the Konsole or terminal that started JupyterLab open in the background. The notebook window will stop working if you close that terminal.

---

## Step 11 — Stop JupyterLab safely

Save any notebook work first.

Return to the terminal that is running JupyterLab. Hold **Ctrl** and press **C** once.

If the terminal asks whether to shut down the server, type `y` and press **Enter**.

You can now close the browser tab and terminal window. Your course files and saved notebook work remain in the course folder.

---

## What to do every later study session

Do not download the course again. Do not create `.venv` again. Do not reinstall the packages unless the course tells you to.

1. Open the existing course folder.
2. Open a terminal in that folder.
3. Activate the existing environment.
4. Start JupyterLab.
5. Open either the hosted bookshelf or the downloaded `index.html`.
6. Keep the bookshelf and JupyterLab in separate browser windows.

### Fedora or macOS

Run these commands one at a time:

```bash
source .venv/bin/activate
./start_jupyter_lab.sh
```

### Windows PowerShell

Run these commands one at a time:

```powershell
.venv\Scripts\Activate.ps1
start_jupyter_lab.bat
```

---

## Common problems

### The terminal opened, but I do not know where it is

Run `pwd` on Fedora or macOS. Run `Get-Location` in Windows PowerShell. Compare the result with the course folder shown in your file manager.

### I cannot see `requirements.txt`

You are not in the course folder. The ZIP method often creates an extra folder level. Find the folder containing `requirements.txt`, `datasets`, and `notebooks`, then open a new terminal there.

### `git` is not recognized or `git: command not found`

Git is not installed or the terminal has not noticed a new installation. Install Git and reopen the terminal, or use the ZIP method.

### Git says the destination is not empty

Do not clone over existing files. Create a different empty folder, open a terminal there, check its location, and run the clone command again.

### `python: command not found`

On Fedora or macOS, try:

```bash
python3 -m venv .venv
```

On Windows, try:

```powershell
py -m venv .venv
```

### PowerShell will not activate the environment

Make sure the terminal is in the course folder and the `.venv` folder exists. Then try the Windows PowerShell activation command again.

If PowerShell reports that running scripts is disabled, open Command Prompt in the course folder and use:

```bat
.venv\Scripts\activate.bat
```

### `requirements.txt: No such file or directory`

The terminal is in the wrong folder. Return to Step 4. Do not copy `requirements.txt` into the wrong folder.

### `start_jupyter_lab.sh: No such file or directory`

The terminal is in the wrong folder. Find the folder containing `start_jupyter_lab.sh`, open a terminal there, activate `.venv`, and try again.

### `Permission denied` when starting JupyterLab

On Fedora or macOS, run:

```bash
bash start_jupyter_lab.sh
```

### JupyterLab cannot find a notebook or dataset

JupyterLab was probably started from the wrong folder. Save your work, stop JupyterLab, open a terminal in the correct course folder, activate `.venv`, and use the included launcher again.

### Port 8888 is already in use

Another Jupyter server may already be running. Do not stop it until you have saved any open notebook work.

To list running Jupyter servers, run:

```bash
jupyter server list
```

To stop an old server using port 8888, run:

```bash
jupyter server stop 8888
```

Then start JupyterLab again from the correct course folder.

---

## Begin the course

After the environment check passes:

1. open either the [hosted bookshelf](https://tidyweb.github.io/tidyweb-learn-python-data-preparation/) or your downloaded `index.html`;
2. begin with Foundation 1;
3. read the matching HTML chapter before opening its notebook;
4. work through the learner cells slowly; and
5. continue through the Python-to-SQL bridge.

The later visualisation, statistics, full EDA, dashboard, and Git material is optional. You do not need it before the SQL bridge.
