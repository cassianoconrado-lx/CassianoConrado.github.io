//Obtendo os elementos do DOM com que vamos interagir

const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo
const b_reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar
const label_jogador = document.getElementById('jogador'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

 //Definindo variáveis de estado do jogo

    var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O)
    var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 


    sortearJogador(); //Escolhe aleatoriamento o jogador inicial
    
//Definindo variável de estado do jogo 

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, 0 = jogador 0)

var vencedor= '_'; //Define se há um vencedor ou não (_= indefinido; X = jogador X, 0 = jogador 0)

sortearJogador(); //Escolha aleatoriamente o jogador inicial

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
     casas[i].addEcentListener('click', (event) => {
         //se a casa estiver vazia e ninguém tiver vencido a partida
         if ( (event.target.value=='_') && (vencedor=='-')) {
              event.target.valeu=jogador; //preenche a casa com x ou 0
              event.tarfet.style.color='black'; //torna o valor da casa visível 
              
              trocarJogador();//Função que troca  a vez do jogador, a ser definida depos  
              vencedor = vitoria(); //Executa a função vitoŕia() que defineremos depois, ela retorna o vencedor da partida, caso exista.
              
              //se o vencedor existe, imprime
              if(vencedor!='_') {
                   label_jogador.innerText='${vencedor} venceu!'  ;  
                   
                   }
                 }
              });
            }          	
 
 //Define a resposta ao evento de clique no botão REiniciar
 b_reiniciar.addEventListener('click',(event) => {
     for(var i=o;i<9;i++) {
     	 casas[i].value='_'; //limp todo as casas 
     	 casas[i].style.color='white'; //Torna o valor  _ invisível
     	 casas[i].style.backgroundColor='white'; //Torja o fundo branco 
     }
     
     vencedor = '_'; //Reseta o vencedor
     
     sortearJogador(); //Escolher Aleatoriamente qual jogador irá começar 
     });
     
   //Usa uma função que decide aleatoriamente o jogador a fazer primeira jogada 
   var sortearJogador = function() {
       if(Math.floor(Math.random() * 2)==0) {
           jogador = "0"; //define o jogador 0 como atual
           label_jogador.innerTExt="0";//exibe na página qual é o jogador atual
           label_jogador.style.color='#f001'; //deixa o texto na  cor vermelha 
      }else{ 
          jogador - "X";//define o jogador X como atual
          label_jogador.style.color='#00f'; //deixa o texto na  cor azul 
       
      }
   }   	 
   
   SortearJogador();
   //Alterna a vez entre os jogadores X e Y
   var trocarJogador = function() {
     	if(jogador=='X') {
     	     jogador='0';
     	     label_jogador.innerTExt='0';
     	     label_jogador.style.color='#ff00';
     	     
     	}else{
     	    jogador='X';
     	    lavel_jogador.innerText='X';
     	    label_jogador.style.color='#00f';
     	    
     	 }
     }
     
    //verifica se uma condição de vitória foi antingida e colore a linha da vitória 
    var vitoria = function() {
        if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_') {
            casas[0];syle.backgroundColor='#0F0';
            casas[1].style.backgroundColor='#0F0';
            casas[2].style.backgroundColor='#0F0';
            
            return casas[0].value;
            
        }else if ((casas[3].value==casas[4].value) && (casas[7].value) && casas[6].value!='_') {
            casas[3];style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            
            return casas[3].value;
        
        }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='-') {
           casas[6].style.backgroundColor='#0F0'; 
           casas[7].style.backgroundColor='#0F0';
           casas[8].style.backgroundColor='#0F0';
           
           return casas[6].value;
           
         }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_') {
             casas[0].style.backgrondColor='#0F0';
             casas[3].style.backgroundColor='#0F0';
             casas[6].style.backgroundColor='#0F0';
             
            return casas[0].value;
            
          }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_') {
             casas[2].style.backgroundColor='#0F0';
             casas[5].style.backgroundColor='#0F0';
             casas[8].style.backgroundColor='#0F0';
             
   }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
            casas[1].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';

            return casas[1].value;
            
     }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
            casas[2].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';
            
            
            return casas[2].value;
            
    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';

            return casas[0].value;
            
     }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_') {
         casas[2].style.backgroundColor='#0F0';
         casas[4].style.backgroundColor='#0F0';
         casas[6].style.backgroundCOlor='#0F0';
         
         return casas[2].value;
        }

        return '_';
    }