Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
    Webcam.set({
        width: 350,
        height:300,
        image_format:'png',
        png_quality: 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function take_snapshot(){
        Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        })
    
    }
    
    console.log("ml5 version:" , ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vfmi4XHwR/model.json", Jay);
    
    function Jay()
    {
        console.log("Model is loaded");
    }
    
    function check()
    {
        img = document.getElementById("captured_image");
        classifier.classify(img , Lloyd);
    }
    
    
    
    function Lloyd(error , result)
    {
        if (error) 
        {
           console.error(error);
        } 
        else 
        {
          console.log(result);
          document.getElementById("Object_Name").innerHTML = result[0].label;
          document.getElementById("Object_Accuracy").innerHTML = result[0].confidence.toFixed(3);
        }
    }
    
    
    
}

console.log("ml5 version:" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z0N9FZ2g-/model.json", Jay);

function Jay()
{
    console.log("Model is loaded");
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img , Lloyd);
}



function Lloyd(error , result)
{
    if (error) 
    {
       console.error(error);
    } 
    else 
    {
      console.log(result);
      document.getElementById("Object_Name").innerHTML = result[0].label;
      document.getElementById("Object_Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}


