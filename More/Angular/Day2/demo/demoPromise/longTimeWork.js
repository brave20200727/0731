function longTimeWork() {
    var now = (new Date()).getTime();
        while ((new Date()).getTime() - now <= 1000) {
    }
    postMessage("Done");
}

longTimeWork();