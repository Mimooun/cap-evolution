@echo off
cd /d "%~dp0"
echo Mise a jour du site CAP EVOLUTION...
git add .
git commit -m "Mise a jour du site"
git push
echo.
echo Termine. Le site sera a jour sur Vercel dans moins d une minute.
pause
