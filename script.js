
/*
let obj = {
    modelo : 'Uno',
    ano : 2001,
    motor: ['1.6', '1.0', '1.4']
}
let texto = JSON.stringify(obj)
let obejo = JSON.parse(texto)
console.log(obejo.motor[0])
*/


/*
const ajax = new XMLHttpRequest ();
ajax.open('GET' ,'https://viacep.com.br/ws/01001000/json/');
ajax.send ();

ajax.onload = function () {
 let obj = JSON.parse(this.responseText);
 let estado = obj.localidade
 let logradouro = obj.logradouro
 let uf = obj.uf
 let bairro = obj.bairro
 let ddd = obj.ddd
 let cep = obj.cep



 document.getElementById('texto').innerHTML = 'Cep: '+ cep+ ' <br> Estado: ' + estado + ' <br> Bairro: ' + bairro + '<br> Logradouro: ' +  logradouro + ' <br> UF: ' + uf + '<br> DDD: ' + ddd

} logradouro,bairro,ddd,uf
*/

function buscarCep () {
     let input = document.getElementById('input').value;

     let ajax = new XMLHttpRequest ();
     ajax.open('GET' , 'https://viacep.com.br/ws/'+ input +'/json/');
     ajax.send ();
   

     ajax.onload = function(){
        let obj = JSON.parse(this.responseText);
        let cep = obj.cep
        let rua = obj.logradouro
        let bairro = obj.bairro
        let estado = obj.estado
        let uf = obj.uf
        let ddd = obj.ddd

        document.getElementById('texto').innerHTML = 'CEP: ' + cep + '<br> Rua: ' + rua + '<br> Bairro: ' + bairro +'<br> Estado: ' + estado +
        '  <br> UF: ' + uf + '<br> DDD:' + ddd
     }
 


}