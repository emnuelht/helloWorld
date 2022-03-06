
// vai mostrar o alerta
function mostra() {
   let vazio = document.getElementById('element').value;
   if(vazio == "") {
       alert('[ERROR] Campo vazio');
   } else {
    let pus = document.getElementById('element').value;
    alert(pus);
    document.getElementById('alet').style.display = 'block';
    document.getElementById('consu').style.display = 'none';
   }
}
// vai mostrar algo digitado no console
function con() {
    let vazio = document.getElementById('element').value;
    if(vazio == ""){
        alert('[ERROR] Campo vazio');
    } else {
        let pus = document.getElementById('element').value;
        console.log(pus);
        document.getElementById('consu').style.display = 'block';
        document.getElementById('alet').style.display = 'none';
    }
}
// display block do nutton eu ja
function aparecerJ() {
    document.getElementById('ja').style.display = 'block';
    document.getElementById('ainda_nao').style.display = 'none';
}
// display none do button eu ja
function sumirJ() {
    document.getElementById('ja').style.display = 'none';
}
// display block do button eu ainda nao
function aparecerN() {
    document.getElementById('ainda_nao').style.display = 'block';
    document.getElementById('ja').style.display = 'none';
}
// display none do button eu ainda nao
function sumirN() {
    document.getElementById('ainda_nao').style.display = 'none';
}
