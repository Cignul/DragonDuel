import Champion from "../../../models/Champion";

//saving the dictionary champions we get from the api
let allChampions = {}

// the selected champion for this game
let myChampion = {}

export default class ChampionService {

  //add selected champion to the game
  drawChampion(id) {
    let allChampions = fetch("https://dragon-duel.herokuapp.com/api/champions/")
    let myChampion = allChampions[id]
    return myChampion
  }
  //maybe draw 
  //add attacks as buttons
  championAttack(attack) {
    this.attack = myChampion.attacks
    return myChampion.hp
  }
  //maybe draw
  endCondition() {
    if (myChampion.hp == 0)
      return "game over"
    //signal end of game _/
    //update as game progresses_?
    //reset or redraw _?
    //call game end / restart from server_?
  }



}

