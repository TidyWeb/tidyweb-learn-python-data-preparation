#!/usr/bin/env bash
set -euo pipefail

# Local-only notebook server: no token is safe here because it is bound to loopback.
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

if [ -x "$ROOT/.venv/bin/jupyter-lab" ]; then
  JUPYTER_LAB=("$ROOT/.venv/bin/jupyter-lab")
elif command -v jupyter-lab >/dev/null 2>&1; then
  JUPYTER_LAB=(jupyter-lab)
elif [ -n "${CONDA_PREFIX:-}" ] && [ -x "$CONDA_PREFIX/bin/jupyter-lab" ]; then
  JUPYTER_LAB=("$CONDA_PREFIX/bin/jupyter-lab")
elif [ -x "$HOME/anaconda3/bin/jupyter-lab" ]; then
  JUPYTER_LAB=("$HOME/anaconda3/bin/jupyter-lab")
elif command -v jupyter >/dev/null 2>&1 && jupyter lab --version >/dev/null 2>&1; then
  JUPYTER_LAB=(jupyter lab)
else
  echo "JupyterLab is not installed in this environment. Run the setup instructions first."
  exit 1
fi

if command -v ss >/dev/null 2>&1 && ss -ltn '( sport = :8888 )' 2>/dev/null | grep -q LISTEN; then
  echo "Course JupyterLab cannot start because port 8888 is already in use."
  echo "Run: jupyter server list"
  echo "If an older Jupyter server is listed, run: jupyter server stop 8888"
  echo "Then run this launcher again. The launcher will not stop another server automatically."
  exit 1
fi

cd "$ROOT"
exec "${JUPYTER_LAB[@]}" \
  --ServerApp.ip=127.0.0.1 \
  --ServerApp.port=8888 \
  --ServerApp.port_retries=0 \
  --ServerApp.root_dir="$ROOT" \
  --ServerApp.token='' \
  --ServerApp.password='' \
  --ServerApp.allow_remote_access=False \
  --ServerApp.open_browser=True
