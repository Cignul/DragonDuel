
//saving the dictionary champions we get from the api
let allChampions = {}

// the selected champion for this game
let myChampion = {}

export default class ChampionService {

  getChampion(id) {
    let allChampions = fetch("https://dragon-duel.herokuapp.com/api/champions/")
    let myChampion = allChampions[id]
    return myChampion
  }

  //add selected champion to the game move this to controller i think (moved for now)
  // draw() {
  //   let template = ''
  //   template += `
  //   <div class="card" style="width: 18rem;">
  //   <img class="card-img-top" src="${myChampion.imgUrl}" alt="Card image cap">
  //   <div class="card-body">
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //   </div>
  // </div>
  // `
  // }
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

