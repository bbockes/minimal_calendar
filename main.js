const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

ipcMain.handle('print-html', async (_event, html) => {
  const tmpPath = path.join(os.tmpdir(), `minimal-calendar-print-${Date.now()}.html`);
  fs.writeFileSync(tmpPath, html, 'utf8');

  const printWin = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  return new Promise((resolve) => {
    printWin.webContents.once('did-finish-load', () => {
      // Brief delay so fonts (e.g. Work Sans) can render before print
      setTimeout(() => {
        printWin.webContents.print({ silent: false }, (success, failureReason) => {
          printWin.destroy();
          try { fs.unlinkSync(tmpPath); } catch (_) {}
          resolve({ success, failureReason });
        });
      }, 300);
    });

    printWin.loadFile(tmpPath);
  });
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Minimal Calendar 2026',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, 'calendar.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
