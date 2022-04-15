document.addEventListener("keydown", function(event) {
    if(event.code == "KeyA") {
        let audio = new Audio("Virtual Piano/task/src/keys/A.mp3");
        audio.play();
        }else if(event.code == "KeyS")
        {
            let tuneS = new Audio("Virtual Piano/task/src/keys/S.mp3");
            tuneS.play();
        }else if(event.code == "KeyD")
        {
            let tuneD = new Audio("Virtual Piano/task/src/keys/D.mp3");
            tuneD.play();
            //console.log("The 'D' key is pressed.");
        }else if(event.code == "KeyF")
        {
            let tuneF = new Audio("Virtual Piano/task/src/keys/F.mp3");
            tuneF.play();
            //console.log("The 'F' key is pressed.");
        }else if(event.code == "KeyG")
        {
            let tuneG = new Audio("Virtual Piano/task/src/keys/G.mp3");
            tuneG.play();
            //console.log("The 'G' key is pressed.");
        }else if(event.code == "KeyH")
        {
            let tuneH = new Audio("Virtual Piano/task/src/keys/H.mp3");
            tuneH.play();
            //console.log("The 'H' key is pressed.");
        }else if(event.code == "KeyJ")
        {
            let tuneJ = new Audio("Virtual Piano/task/src/keys/J.mp3");
            tuneJ.play();
            //console.log("The 'J' key is pressed.");
         }else if(event.code == "KeyW")
    {
        let tuneW = new Audio("Virtual Piano/task/src/BLACK-KEYS/W.mp3");
        tuneW.play();
        //console.log("The 'J' key is pressed.");
    }else if(event.code == "KeyE")
    {
        let tuneE = new Audio("Virtual Piano/task/src/BLACK-KEYS/E.mp3");
        tuneE.play();
        //console.log("The 'J' key is pressed.");
    }else if(event.code == "KeyT")
    {
        let tuneT = new Audio("Virtual Piano/task/src/BLACK-KEYS/T.mp3");
        tuneT.play();
        //console.log("The 'J' key is pressed.");
    }else if(event.code == "KeyY")
    {
        let tuneY = new Audio("Virtual Piano/task/src/BLACK-KEYS/Y.mp3");
        tuneY.play();
        //console.log("The 'J' key is pressed.");
    }else if(event.code == "KeyU")
    {
        let tuneU = new Audio("Virtual Piano/task/src/BLACK-KEYS/U.mp3");
        tuneU.play();
        //console.log("The 'J' key is pressed.");
    } else{
            console.log("Warning this key is out of bound");
        }
});