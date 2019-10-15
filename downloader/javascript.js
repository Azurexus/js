let input = document.querySelector('#input');
let sort = document.querySelector('.sort');
let boxes = document.querySelector('#sortable');
let box = document.querySelector('.ui-state-default');

input.style.opacity = 0;

let inputFile = document.querySelector('#input');

function handleFiles(files) {

    let imageType = /image.*/;
    for (let file of files) {
        if (file.type.match(imageType)) {
            let reader = new FileReader();

            reader.onload = function handleFiles(e) {

                let li = document.createElement("li");
                boxes.appendChild(li);

                let img = new Image();
                img.src = reader.result;


                li.appendChild(img);
                img.setAttribute("class", "images");
                document.getElementById('progressBar').value = 0;
                document.getElementById('progPer').innerText = '';

            }
            reader.onprogress = function handleFiles(e) {
                let math = Math.round((e.loaded / e.total) * 100);
                document.getElementById('progressBar').value = math;
                document.getElementById('progPer').innerText = math + '%';
            }

            reader.readAsDataURL(file);
        } else {
            boxes.innerHTML = "File not supported!"
        }
    }
}

inputFile.addEventListener('change', function(e) {
    handleFiles(e.target.files)
});

let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('enter');
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();

}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number > 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number > 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}

$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );
