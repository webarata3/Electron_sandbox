const electron = require('electron');
const remote = electron.remote;
var dialog = remote.dialog;

function showSelectFileDialog() {
  return dialog.showOpenDialog({
    title: 'ファイル名の取得',
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']},
      {name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
      {name: 'Custom File Type', extensions: ['as']},
      {name: 'All Files', extensions: ['*']}
    ],
    properties: [ 'openFile', 'multiSelections' ]
  });
}

document.getElementById("selectFile").addEventListener('click', () => {
  console.log(showSelectFileDialog());
});
