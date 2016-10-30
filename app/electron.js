'use strict'

const electron = require('electron')
const path = require('path')
let {app, BrowserWindow} = electron

let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
}

const createWindow = () => {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    title: config.name,
    show: false
  })

  mainWindow.loadURL(config.url)
  mainWindow.show()

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))

    let installExtension = require('electron-devtools-installer')

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

exports.openConfigWindow = (hash) => {
  let configWindow = new BrowserWindow({width: 400, height: 200, show: false, title: 'config'})
  console.log(config.url + hash)
  configWindow.loadURL(`${config.url + hash}`)
  setTimeout(() => configWindow.show(), 200)
}
