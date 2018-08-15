import ChampionService from "./champion-service.js";


let championService = new ChampionService()
function drawChampions() {
  let template = ''
  for (let i = 0; i < 6; i++) {
    const champion = fetch("https://dragon-duel.herokuapp.com/api/champions/:id");
    console.log(champion)
    template += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${champion}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">placeholder for champion cards hopefully something shows up</p>
    </div>
  </div>
  `
    return template
  }
  document.getElementById("champions").innerHTML = template
}
export default ChampionService