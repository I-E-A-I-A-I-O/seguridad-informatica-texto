@echo off

mkdir test

FOR /R "C:\" %%f IN ("*.txt") DO  (
    echo copying %%f to test
    copy "%%f" test
)
 