Set oShell = CreateObject ("Wscript.Shell")
Dim strArgs
strArgs = "cmd /c test.cmd"
oShell.Run strArgs, 0, false