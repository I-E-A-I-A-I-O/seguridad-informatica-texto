#include "launcher.h"
#include <Windows.h>
#include <shellapi.h>

void launchProgram(char executableName[]) {
	ShellExecuteA(NULL, "open", executableName, NULL, NULL, 0);
}

