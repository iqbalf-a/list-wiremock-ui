const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openSaveDialog: () => ipcRenderer.invoke('save-dialog'),
  exportToCsv: (ip, port, path) => ipcRenderer.invoke('export-to-csv', { ip, port, path })

});
