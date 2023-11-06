const body = document.querySelector("body");
const promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    const sucesso = true;
    if(sucesso) {
      resolve("A operação foi um sucesso!");
    }else {
      reject("Ocorreu um erro durante a operação!");
    }
  },2000);
});
promise.then((resultado) => {console.log(resultado)});
promise.catch((erro) => {console.log(erro)});