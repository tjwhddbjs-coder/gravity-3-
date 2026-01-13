@echo off
echo Installing dependencies...
call npm install
echo Building project (Generating index.html)...
call npm run build
echo Build complete! index.html is located in the 'out' folder.
pause
