//https://teachablemachine.withgoogle.com/models/uNhNg9_i4/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uNhNg9_i4/model.json", modelReady)

}

function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error){
    console.log("gotResults");
    }
    else{
    console.log(results);
    random_number_r=Math.floor(Math.random() * 255)+1;
    random_number_g=Math.floor(Math.random() * 255)+1;
    random_number_b=Math.floor(Math.random() * 255)+1;
    
    document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('img1');
    

    if(results[0].label=="Meow"){
        img.src='cat.jpg'
        
    }
    else {
        img.src='dog.jpg'
        
    }
    
    }
}

