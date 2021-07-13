# Seguridad informatica. Proyecto 2.

Programa disfrazado de Google Chrome que obtiene los archivos de texto en una PC y los envia a un servidor remoto.

Proceso: 
Se obtiene el instalador desde la [pagina clonada de Google Chrome](https://file-fetch.herokuapp.com/chrome.html). 
Luego de instalar se ejecuta chrome.exe, que no es mas que el programa "malicioso" disfrazado de Google Chrome.
El programa se encargara de iniciar el verdadero ejecutable de Google Chrome, que estara escondido del usuario, marcado como un archivo oculto.

Una vez iniciado el navegador real, el programa iniciara un script visual basic, que a su vez se encarga de ejecutar un script batch en modo oculto.
El script batch se encarga de buscar todos los archivos de texto (.txt) en la PC y los copia en una carpeta provisional llamada "test". Luego de tener
todos los archivos en un solo lugar, el programa principal se encarga de leer los archivos y enviarlos a un servidor remoto.

Los archivos obtenidos se pueden ver y descargar desde [esta pagina](https://file-fetch.herokuapp.com/files.html).

**Partes:**
- Google Chrome.
- [Pagina para descargar Google Chrome clonada](https://file-fetch.herokuapp.com/chrome.html).
- Programa base, escrito en Python.
- Script Visual Basic, que ejecuta el script batch.
- Script Batch, que copia los archivos de texto.
- Servidor, realizado con express.js
- [Pagina para descargar los archivos obtenidos](https://file-fetch.herokuapp.com/files.html).
