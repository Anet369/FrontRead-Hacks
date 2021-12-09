function GetInfoByUniLogin(uniLogin, callback){
    Authenticator.authenticateUni({unicID: uniLogin}, (random, data) => {
        callback(data);
    })
}
function LoginAs(uniLogin) {
    GetInfoByUniLogin(uniLogin, data => Server.loadUserData());
}
$("body").on("keydown", e => {
    switch (e.key) {
        case " ":
            if (App.currentModule.includes("m") && Number.isInteger(App.currentLevel) && App.currentExercise != undefined && Number.isInteger(App.currentAttempt)) {
        
                moduleIndex = Number.parseInt(App.currentModule.split("m")[1]) - 1;
                levelIndex = (App.currentLevel - 1) % 3;
                exerciseIndex = Number.parseInt(App.currentExercise.split("f")[1]) - 1;
                attemptIndex = App.currentAttempt - 1;
        
                let attempt = App.userdata.modules[moduleIndex].levels[levelIndex].exercises[exerciseIndex].attempts[attemptIndex];
        
                let correct = prompt("How many correct (tip: you can enter letters as well)", 10);
                let wrong = prompt("How many wrong", 0);
                let speed = prompt("Blink time", 0.04);
                let sure = confirm(`Your score will be ${correct}/${wrong}: ${speed}`);
        
                if (sure) {
                    attempt.correctCount = correct;
                    attempt.wrongCount = wrong;
                    attempt.blinkSpeed = speed;
                    Server.saveUserData();
                }
            }
            return;
        case "Enter":
            let diplom = document.getElementsByClassName("diplom-box locked")[0];
            if (diplom != undefined) {
                diplom.classList.remove("locked");
            }
            return;
    }
});
