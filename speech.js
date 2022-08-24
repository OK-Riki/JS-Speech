function TextToSpeech()
{
    //create object of browser speech API 
    const speech = new SpeechSynthesisUtterance();
    //load list of computer voices 
    let voices = speechSynthesis.getVoices();


    //get text from the input filed 
    let convert = document.getElementById("text").value;



    speech.text = convert;

    // these 3 values are required for our application to work.
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // assign voice to speak 
    speech.voice = voices[1];

    window.speechSynthesis.speak(speech);
}
function Clear()
{
    document.getElementById("text").value = "";
}