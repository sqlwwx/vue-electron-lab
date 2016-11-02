const electron = require('electron')
const { app, Menu } = electron

let template = [{
  label: app.getName(),
  submenu: [{
    label: '退出',
    accelerator: 'Command+Q',
    click () {
      return app.quit()
    }
  }]
}, {
  label: '编辑',
  submenu: [{
    label: '撤销',
    accelerator: 'CmdOrCtrl+Z',
    selector: 'undo:'
  }, {
    label: '恢复',
    accelerator: 'Shift+CmdOrCtrl+Z',
    selector: 'redo:'
  }, {
    label: '剪切',
    accelerator: 'CmdOrCtrl+X',
    selector: 'cut:'
  }, {
    label: '复制',
    accelerator: 'CmdOrCtrl+C',
    selector: 'copy:'
  }, {
    label: '粘贴',
    accelerator: 'CmdOrCtrl+V',
    selector: 'paste:'
  }, {
    label: '全选',
    accelerator: 'CmdOrCtrl+A',
    selector: 'selectAll:'
  }]
}]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))
