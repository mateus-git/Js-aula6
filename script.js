/* WHILE

let cont = 0
while (cont < 11){
    document.write('O valor é :' +cont + '<br>');
    cont++;
}

//DO WHILE

let cont1 = 0
do{
    document.write('<br>')
    document.write('O valor do while  é: ' +cont1)
    document.write('<br>')
    cont1++
}while(cont1 == 0)

*/

function mudar(){
    let novo = document.getElementById('idNome')
    document.getElementById('titulo').innerHTML = novo.value;
}