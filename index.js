/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600, autoHideMenuBar: true });
  // and load the index.html of the app.
  const local = url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  win.loadURL(isDev ? 'http://localhost:8080' : local);
}


app.on('ready', createWindow);

