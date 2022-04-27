Hax = {
    // InComplete
    inCompleteAllExercises: function() {
        let module = 0;
        for (let level = 1; level <= 9; level++) {
            if ((level - 1) % 3 == 0) {
                module++;
            }

            for (let exercise = 1; exercise <= 4; exercise++) {
                App.execute("entities:exercise:setInComplete", `m${module}`, `${level}`, `f${exercise}`);
            }
        }
    },
    inCompleteAllTests: function() {
        for (let test of App.userdata.tests) {
            test.isComplete = false;
            test.correctCount = 0;
            test.wrongCount = test.objectivesCount;
        }
    },
    lockAllVideos: function() {
        for (let video of App.userdata.videos) {
            video.haveBeenWatched = false;
            video.isUnlocked = false;
        }
    },
    // Complete
    completeAllExercises: function() {
        let module = 0;
        for (let level = 1; level <= 9; level++) {
            if ((level - 1) % 3 == 0) {
                module++;
            }

            for (let exercise = 1; exercise <= 4; exercise++) {
                App.execute("entities:exercise:setComplete", `m${module}`, `${level}`, `f${exercise}`);
            }
        }
    },
    completeAllTests: function() {
        for (let test of App.userdata.tests) {
            test.isComplete = true;
            test.correctCount = test.objectivesCount;
            test.wrongCount = 0;
        }
    },
    unlockAllVideos: function() {
        for (let video of App.userdata.videos) {
            video.haveBeenWatched = true;
            video.isUnlocked = true;
        }
    },
    unlockDiploma: function() {
        this.completeAllExercises();
        this.unlockAllVideos();
        this.completeAllTests();

        Server.saveUserData();
    },
    // Reset
    resetAllExercises: function() {
        for (module of App.userdata.modules) {
            for (level of module.levels) {
                for (exercise of level.exercises) {
                    for (attempt of exercise.attempts) {
                        attempt.wrongCount = 0;
                        attempt.correctCount = 0;
                        attempt.isComplete = false;
                        attempt.blinkSpeed = null;
                    }
                }	
            }
        }
    },
    resetProgress: function() {
        if (confirm("Are you sure, this will delete all progress") === false) 
        return;
        
        this.inCompleteAllExercises();
        this.resetAllExercises();
        this.lockAllVideos();
        this.inCompleteAllTests();

        Server.saveUserData();
    },
    // Impersonate
    impersonate: function(uniLogin){
        Authenticator.authenticateUni({unicID: uniLogin}, () => {
            Server.loadUserData();
            alert("You are now logged in as: " + uniLogin);
        });
    }
}
