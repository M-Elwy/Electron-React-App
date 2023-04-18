const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  togglePin: (isPinned) => {
    ipcRenderer.send('togglepin', isPinned)
  },
})