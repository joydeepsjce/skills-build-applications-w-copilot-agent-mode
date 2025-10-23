# OctoFit Tracker backend

This folder contains the Django backend for OctoFit Tracker.

Create a Python virtual environment and install dependencies (do not change directories; use absolute paths):

```bash
python3 -m venv /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
pip install -r /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/requirements.txt
```

Notes:
- Use Django's ORM for data modeling.
- If you run MongoDB locally, use `ps aux | grep mongod` to verify the service.
