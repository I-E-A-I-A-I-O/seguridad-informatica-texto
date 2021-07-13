from distutils.core import setup
import py2exe

setup(console=[
    {
        "script": "start.py",
        "icon_resources": [(0, "g-chrome.ico")]
    }
])
