@echo off
cd /d "%~dp0"
echo Running "npm run dev" in: %cd%
npm start
if %errorlevel% neq 0 (
    echo.
    echo npm start failed with error %errorlevel%
)
echo.
pause