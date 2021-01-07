var saveGame = localStorage.getItem('gameSave');
var gameData = {
    // fleet
    corvettes: 1,
    frigates: 0,
    destroyers: 0,
    cruisers: 0,
    battleships: 0,
    dreadnoughts: 0,
    motherships: 0,

    // resources
    credits: 0,
    iron: 0,
    nanofiber: 0,
    antimatter: 0,
    hydrogen: 0,
    researchPts: 0,

    // rates
    creditsRate: 1,
    ironRate: 0,
    nanofiberRate: 0,
    antimatterRate: 0,
    hydrogenRate: 0,
    researchPtsRate: 0,
    lastTick: Date.now()
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

var mainGameLoop = window.setInterval(function() {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now()

    gameData.credits += Math.round(gameData.creditsRate * (diff / 1000))
    update("credits", gameData.credits)
    gameData.iron += Math.round(gameData.ironRate * (diff / 1000))
    update("iron", gameData.iron)
    gameData.nanofiber += Math.round(gameData.nanofiberRate * (diff / 1000))
    update("nanofiber", gameData.nanofiber)
    gameData.antimatter += Math.round(gameData.antimatterRate * (diff / 1000))
    update("antimatter", gameData.antimatter)
    gameData.hydrogen += Math.round(gameData.hydrogenRate * (diff / 1000))
    update("hydrogen", gameData.hydrogen)
    gameData.researchPts += Math.round(gameData.researchPtsRate * (diff / 1000))
    update("research", gameData.researchPts)

}, 1000)

function saveGame() {
    localStorage.setItem('gameSave', JSON.stringify(gameData))
}

var saveGameLoop = window.setInterval(function() {
    saveGame();
}, 15000)

function tab(tab) {
    // hide all your tabs, then show the one the user selected.
    document.getElementById("fleetMenu").style.display = "none"
    document.getElementById("productionMenu").style.display = "none"
    document.getElementById("researchMenu").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}
tab("fleetMenu");

