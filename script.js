let nota1tri;
let nota2tri;
let resultado;

function caucular(){
      nota1tri = Number (prompt("Digite a nota do primeiro trimestre"));
      nota2tri = Number (prompt("Digite a nota do segundo trimestre"));
      
      resultado = 180 - (nota1tri + nota2tri);

      if(resultado <= 0){
            alert("congratulations you aproved");
      }   else {
       alert("vocé ainda precisa tirar " + resultado + " no terceiro trimestre" );
      }
      }












