var va = "e";
var storage = "";
var huh = "";

Webcam.set({
    width: 200,
    height:200,
    image_format: 'png',
    png_quality: 100

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_photo(){
    Webcam.snap(function(data_url){
        va = '<img id="captured_image" src="'+data_url+'"/>';
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
        console.log(va);
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x2P1NJgtm/model.json', modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}

function identify(){
storage = document.getElementById('captured_image');//storage = document.getElementById('captured_image'); Change if doesn't work
classifier.classify(storage, gotResult);//console.log(storage,gotResult); Change if doesn't work
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
