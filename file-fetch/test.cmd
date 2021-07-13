@echo off

mkdir test

FOR /R "C:\" %%f IN ("*.txt") DO  (
    copy "%%f" test
)
