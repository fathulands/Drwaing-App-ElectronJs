const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron/main");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: autoUpdater,
    height: autoUpdater,
    resizable: false,
  });
  win.loadFile("index.html");
}