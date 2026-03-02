const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

ipcMain.handle('print-html', async (_event, html) => {
  const ts = Date.now();
  const tmpHtmlPath = path.join(os.tmpdir(), `minimal-calendar-print-${ts}.html`);
  const tmpPdfPath  = path.join(os.tmpdir(), `minimal-calendar-${ts}.pdf`);
  fs.writeFileSync(tmpHtmlPath, html, 'utf8');

  const printWin = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });

  try {
    // Wait for the page to fully load
    await new Promise((resolve, reject) => {
      printWin.webContents.once('did-finish-load', resolve);
      printWin.webContents.once('did-fail-load', (_e, _code, desc) => reject(new Error(desc)));
      printWin.loadFile(tmpHtmlPath);
    });

    // Extra delay so web fonts (Work Sans) finish rendering
    await new Promise(r => setTimeout(r, 600));

    // preferCSSPageSize honours the @page { size: landscape/portrait } rule
    // already embedded in the HTML, so no need to detect orientation here.
    const pdfData = await printWin.webContents.printToPDF({
      printBackground: true,
      preferCSSPageSize: true,
    });

    printWin.destroy();
    try { fs.unlinkSync(tmpHtmlPath); } catch (_) {}

    fs.writeFileSync(tmpPdfPath, pdfData);

    // Open in the system PDF viewer (Preview on macOS) so the user can
    // print, adjust settings, or save.
    await shell.openPath(tmpPdfPath);

    return { success: true };
  } catch (err) {
    if (!printWin.isDestroyed()) printWin.destroy();
    try { fs.unlinkSync(tmpHtmlPath); } catch (_) {}
    return { success: false, failureReason: err.message };
  }
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
