# Deployment & Rollback — NakshiKantha (PythonAnywhere)

## Environment
- Host: PythonAnywhere (WSGI)
- Python: 3.10
- Virtualenv: ~/venvs/venv  (example)
- App dir: ~/NakshiKantha  (example)
- DB: SQLite file `sarees.db` in repo root

## First-time setup (one-off)
1) Create virtualenv  
   `mkvirtualenv venv --python=/usr/bin/python3.10`
2) Install deps  
   `pip install -r requirements.txt`
3) Set FLASK_APP = run.py (or app entry) in PA WSGI file if needed.
4) Initialize DB (if using migrations)  
   `flask db upgrade`  
   `python populate_db.py`
5) Reload the web app from **Web** tab (PythonAnywhere dashboard).

## Normal deploy
1) **Backup DB** (before pulling):  
   `bash scripts/backup_db.sh`
2) Pull latest code:  
   `cd ~/NakshiKantha && git pull`
3) Install/update deps:  
   `workon venv && pip install -r requirements.txt`
4) **Tag last known good** (done locally before push)  
   `git tag -f last-good && git push -f origin last-good`
5) Reload the web app from the **Web** tab.

## Rollback (if the new deploy breaks)
1) **Code rollback**  
   In app dir: `git fetch --tags && git checkout last-good`  
   Reload the app from **Web** tab.
2) **Data rollback (if needed)**  
   `bash scripts/rollback_last_backup.sh`
3) Verify key pages, then review logs (see below).

## Monitoring / Logs
- PythonAnywhere **Error log** and **Server log** (Web tab) show WSGI/runtime errors.
- App also writes to `app.log` (see logging setup) for error traces.
- After each deploy, check last 50 lines:  
  `tail -n 50 app.log`
