@echo off
setlocal
cd /d "%~dp0"

if exist "%CD%\.venv\Scripts\jupyter-lab.exe" (
  set "JUPYTER_LAB=%CD%\.venv\Scripts\jupyter-lab.exe"
) else (
  where jupyter-lab >nul 2>nul
  if errorlevel 1 (
    where jupyter >nul 2>nul
    if errorlevel 1 (
      echo JupyterLab is not installed in this environment. Run the setup instructions first.
      pause
      exit /b 1
    )
    set "JUPYTER_LAB=jupyter lab"
  ) else (
    set "JUPYTER_LAB=jupyter-lab"
  )
)

%JUPYTER_LAB% --ServerApp.ip=127.0.0.1 --ServerApp.port=8888 --ServerApp.port_retries=0 --ServerApp.root_dir="%CD%" --ServerApp.token="" --ServerApp.password="" --ServerApp.allow_remote_access=False --ServerApp.open_browser=True
pause
