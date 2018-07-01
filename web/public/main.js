const {app, BrowserWindow} = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

  let currWin;

  function createWindow() {
    currWin = new BrowserWindow({width: 900, height: 680});
    if (isDev) {
      currWin.loadURL("http://localhost:3000");
    }
    else {
      currWin.loadURL("file://${path.join(__dirname, "../build/index.html")}");
    }

    // app.setAboutPanelOptions({
    //   applicationName: "TVM",
    //   applicationVersion: "0.0.1",
    // })

    currWin.on("closed", () => currWin = null);
  }

  app.on("ready", createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
      app.quit()
    }
  });

  app.on('activate', () => {
    if (currWin === null) {
      createWindow()
    }
  });
