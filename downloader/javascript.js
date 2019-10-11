let input = document.querySelector('#input');
let sort = document.querySelector('.sort');
let box = document.querySelector('.ui-state-default');

input.style.opacity = 0;

// let image = document.createElement('img');
// let para = document.createElement('p');

// let image = document.createElement('img');

// $('#input').change(function() {
//     if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
//     else $(this).prev().text('Выберите файлы');
// });
// let curFiles = input.files;
// let image = document.createElement('img');
// let para = document.createElement('p');
// $('#input').click(function() {
//
// }

input.addEventListener('change', imgUpdate);

function imgUpdate() {
    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }
    while(sort.firstChild) {
        sort.removeChild(sort.firstChild);
    }
    let curFiles = input.files;
    let image = document.createElement('img');
    let para = document.createElement('p');
    for (var i = 0; i < curFiles.length; i++) {
        para.textContent = 'file name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
        image.setAttribute('width', '80');
        image.src = window.URL.createObjectURL(curFiles[i]);
        para.setAttribute('class', 'democlass');


        box.appendChild(image);
        sort.appendChild(para);
    }
}

//input.addEventListener('change', updateImageDisplay);

// function updateImageDisplay() {
//     while(sort.firstChild) {
//         sort.removeChild(sort.firstChild);
//     }
//     let curFiles = input.files;
//     if (curFiles === 0) {
//         let para = document.createElement('p');
//         para.textContent = 'not not not';
//         sort.appendChild(para);
//     }else {
//         let list = document.createElement('ol');
//         sort.appendChild(list);
//         for (var i = 0; i < curFiles.length; i++) {
//             let listItem = document.createElement('li');
//             let para = document.createElement('p');
            // if (validFileType(curFiles[i])) {
            // para.textContent = 'file name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
            // let image = document.createElement('img');
            // image.setAttribute('width', '80');
            // image.src = window.URL.createObjectURL(curFiles[i]);
            //
            // listItem.appendChild(image);
            // listItem.appendChild(para);

            // }else {
            //     para.textContent = 'File name ' + curFiles[i].name + 'Not valid bleatb';
            //     listItem.appendChild(para);
            // }
//
//             list.appendChild(listItem);
//         }
//     }
// }
// let fileTypes = [
//   'image/jpeg',
//   'image/psd',
//   'image/png'
// ]
// function validFileType(file) {
//     for (var i = 0; i < fileTypes.length; i++) {
//         if (file.type === fileTypes[i]) {
//             return true;
//         }
//     }
//     return false;
// }
function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number > 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number > 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}
// // for (var i = 0; i < curFiles.length; i++) {
// //     let listItem = document.createElement('li');
// //     let para = document.createElement('p');
// //     if (validFileType(curFiles[i])) {
// //         para.textContent = 'file name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
// //         let image = document.createElement('img');
// //         image.setAttribute('width', '80');
// //         image.src = window.URL.createObjectURL(curFiles[i]);
// //
//         listItem.appendChild(image);
//         listItem.appendChild(para);
//
//     }else {
//         para.textContent = 'File name ' + curFiles[i].name + 'Not valid bleatb';
//         listItem.appendChild(para);
//     }
//
//     list.appendChild(listItem);
// }
