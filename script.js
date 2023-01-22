// POPUP na tela
//const mensagem = "Hello!" //#constant não pode mudar o valor
//alert(mensagem)

const form = document.querySelector("#form-habits") //colocar uma variavel no form
const nlwSetup = new NLWSetup(form) //variavel para iniciar a biblioteca
const button = document.querySelector("header button") //a tag button do header  foi  inserida emuma variavel

button.addEventListener("click", add) //Quando o botão receber o evento do clique fazer alguma ação "add"
form.addEventListener("change", save) //para salvar os dias quando tiver alguma modificação

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //add um dia para a variavel do dia atual com nome de today e o slice recorta a data de hoje para pegar apenas DD/MM
  const dayExists = nlwSetup.dayExists(today) //vai ir na nlwSetup e verificar se o dia existe

  if (dayExists) {
    alert("Dia já incluso ⚠")
    return //se o dia ja existe, abre um popup com a mensagem
  }

  alert("Adicionado com sucesso! 🎉")
  nlwSetup.addDay(today) //add o dia da variavel today
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // guarda na memoria do browser alguma informação. Json.stringfy é para mudar um objeto para string (nlwSetup, no caso)
}

/*const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-03"],
  food: ["01-02"],
} inserindo manualmente as checks*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //pega a memoria guardada no browser como string e a ultima modificação realizada e trás para a aplicação como objeto
nlwSetup.setData(data) //esta esperando um objeto
nlwSetup.load() //carrega as informações
