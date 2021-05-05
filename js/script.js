/* - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 - Cambiare il colore del testo cliccando su dei bottoni
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare la classe del testo scrivendola dentro a un input ma il cambio deve avvenire solo quando viene premuto invio */

const app = new Vue ({

    el :`#miocontainer`,

    data : {
      /* qui inseriso i miei dati per le variabili */
      testo_stampato: "Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aspernatur veniam fugiat nemo quo illo velit",
      messaggio_input: "giuseppe",
      colore_testo: "colore_default",
      immagine: "sfondo.jpg",
      flag: false,
      flagimg: false,
      visibile: "invisibile"
      
    },
     
    methods : {
      funzione(colore_bottone){
        if(this.flag === false){
          this.colore_testo = colore_bottone;
          this.flag = true;
        /* !this.flag */
        }else{
          this.colore_testo = "colore_default";
          this.flag = false;
        } 
      },

      /* immagine(){
        if(this.flagimg === false){
          this.visibile = "active"
          this.flagimg = true;
        }else{
          this.visibile = "";
          this.flagimg = false;
        }
      } */
    }

    
    

  });
  
