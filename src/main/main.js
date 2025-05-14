const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const exportToCsv = require('../services/exportToCsv');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });


  win.loadFile('./src/renderer/index.html');
}

app.whenReady().then(() => {
  ipcMain.handle('save-dialog', async () => {
    const result = await dialog.showOpenDialog({
      title: 'Pilih folder untuk menyimpan file',
      properties: ['openDirectory']
    });
    return result.canceled ? null : result.filePaths[0];
  });

  ipcMain.handle('export-to-csv', async (event, { ip, port, path }) => {
    
    try {
      const filePath = await exportToCsv(ip, port, path);
      return { success: true, filePath };
    } catch (err) {
      return { success: false, message: err.message };
    }
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
