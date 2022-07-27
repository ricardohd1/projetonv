const [inputLogin, inputSenha] = document.querySelectorAll("input")
let btn = document.querySelector(".btn-log")

function ativar(){
  if(inputLogin.value.length >= 8 && inputSenha.value.length >= 8){
    btn.classList.add("but")
    btn.removeAttribute("disabled")
  } else{
    btn.setAttribute("disabled", "disabled")
    btn.classList.remove("but")
  }
}

inputLogin.addEventListener("input", ativar)
inputSenha.addEventListener("input", ativar)



