from subprocess import call
from os import path, sys, listdir
from shutil import rmtree
import requests

def sendFiles():
    url = "https://file-fetch.herokuapp.com/"
    basepath = "test/"
    for entry in listdir(basepath):
        filepath = path.join(basepath, entry)
        if path.isfile(filepath):
            files = {'file': open(filepath, "rb")}
            res = requests.post(url, files=files)
            print(res.text)
    rmtree(basepath, True)

def executeProgram(programName: str):
    call(programName)
    sendFiles()

def main():
    script = "test.cmd"
    executeProgram(script, False)

if __name__ == "__main__": 
    main()