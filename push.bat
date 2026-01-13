@echo off
echo Initializing Git repository...
git init
git add .
git commit -m "Update deployment paths to gravity-3-"
git branch -M main
echo Adding remote origin...
git remote add origin https://github.com/tjwhddbjs-coder/gravity-3-.git
echo Pushing to GitHub...
git push -u origin main
echo Done!
pause
