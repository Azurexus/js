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

            reader.onload = function(e) {

                let li = document.createElement("li");
                boxes.appendChild(li);

                let div = document.createElement("div");
                li.appendChild(div);

                let img = new Image();
                img.src = reader.result;


                li.appendChild(div);
                div.appendChild(img);
                div.setAttribute("class", "divs");
                img.setAttribute("class", "images");
                

            }
            reader.onprogress = function(e) {

                let mass = [];
                mass = mass.push(reader);
                for (var i = 0; i < mass.length; i++) {

                    console.log(i);

                }


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
  console.log('over');

}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
console.log('drop');
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
  $( "#sortable" ).sortable({
  revert: true
});

  $( "#sortable" ).disableSelection();
} );
