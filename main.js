const electron = require('electron')
const settings = require('electron-settings')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const wsk = require('electron-window-state')
let window
const createWindow = async () => {
  const ws = wsk({
    defaultHeight: 800,
    defaultWidth: 1280
  })
  window = new BrowserWindow({
    width: ws.width,
    height: ws.height,
    x: ws.x,
    y: ws.y
  })
  console.log(`Running in ${process.env.NODE_ENV} mode`)
  if (process.env.NODE_ENV === 'development') {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer')
    await installExtension(REACT_DEVELOPER_TOOLS)
    window.webContents.openDevTools()
    window.loadURL('http://localhost:3000')
  } else {
    // window.webContents.openDevTools()
    window.loadURL(`file://${__dirname}/index.html`)
  }
  window.on('closed', () => {
    window = null
  })
  ws.manage(window)
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
