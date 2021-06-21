// file-fetch.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "reader.h"
#include "launcher.h"

int main()
{
    char script[] = "runIt.vbs";
    char explorer[] = "chrome.exe";
    launchProgram(script);
    readFiles();
    return 0;
}
