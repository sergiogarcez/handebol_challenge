@echo off
REM Batch script to resize images in assets\jogos_tabelas to max width 800px preserving aspect ratio
REM Requires ImageMagick installed and added to PATH

setlocal enabledelayedexpansion

set "input_dir=assets\jogos_tabelas"
set "max_width=800"

for %%f in (%input_dir%\*.png) do (
    echo Resizing %%f ...
    magick convert "%%f" -resize %max_width%x "%%f"
)

echo Done resizing images.
pause
