const setpup = document.getElementById('fileForm');

const dragZone = document.querySelector('#fileLabel')

document.addEventListener('dragover', function(e){
    e.preventDefault();
    e.stopPropagation();
    
    fileLabel.style.border = "2px dashed aqua";
}, false);

document.addEventListener('dragenter', function(e){
    e.preventDefault();
    fileLabel.style.border = "2px dashed yellow"; 
}, false);


document.addEventListener('dragleave', function(e){
    fileLabel.style.border = "";
}, false);


document.addEventListener('drop', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer.files);    

    // const reader = new FileReader()
    // reader.onload = function(){
    //     const img = new Image()
    //     img.src = reader.result
    //     document.body.appendChild(img);
    // }

    // reader.readAsDataURL(e.dataTransfer.files);

}, false);
