var univers;

function creerUnivers() {
    var li, co, ligne;
    univers = [];
    for (li = 0; li < 10; li += 1) {
    ligne = [];
    for (co = 0; co < 10; co += 1) {
    ligne.push(new cellule(li, co));
    }
    univers.push(ligne);
    }
   }


function init() {
    creerUnivers();
    let div_jeu = document.getElementById("jeu");
    let dom_table = document.createElement("table");
    dom_table.setAttribute("align", "center");
    dom_table.setAttribute("cellpadding", "0px");
    dom_table.setAttribute("cellspacing", "0px");
    div_jeu.appendChild(dom_table);
    for (let i = 0; i < 10; i++) {
        let dom_tr = document.createElement("tr");
        dom_tr.style.height = "30px";
        dom_table.appendChild(dom_tr);
        for (let j = 0; j < 10; j++) {
            let dom_td = document.createElement("td");
            dom_tr.appendChild(dom_td);
            
            
            
            univers[i][j].dom = dom_td;
            univers[i][j].initialiser();
            dom_td.style.width = "30px";
        }
    }
}


function test(i,j){
    alert(i,j);
}

function cellule(li, co) {
    this.li = li;
    this.co = co;
    this.etat = -1;
    this.atome = false;
    this.dom = null;
    this.grille = (li > 0) && (li < 9) && (co > 0) && (co < 9);
    var that = this;

    this.initialiser = function () {
        var couleur = "";
        if ((this.li === 0 && this.co === 0) ||
            (this.li === 0 && this.co === 9) ||
            (this.li === 9 && this.co === 0) ||
            (this.li === 0 && this.co === 0) ||
            (this.li === 9 && this.co === 9)) { // les 4 coins
            couleur = 'grey';
        } else if (this.li === 0 || this.co === 0 || this.li === 9 || this.co === 9) { // les boutons latéraux ou les pions joué
            couleur = 'darkgrey';
            this.dom.addEventListener("click", that.cote);
        }
        else {
            couleur = "white";
            this.dom.addEventListener("click", that.rond);
        }
        
        this.dom.style.backgroundColor = couleur;
        this.dom.style.border = "2px solid black"

    };

    this.couleurAleatoire = function(){
        return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    }


    this.cote = function() {
        if(that.etat = -1){
            that.dom.style.backgroundColor = that.couleurAleatoire();
            that.etat=1;
        }
    }

    this.rond = function() {
        if(that.etat==-1){
            let r = document.createElement("div")
            r.style.borderRadius="50%";
            r.style.width="25px";
            r.style.height="25px";
            r.style.backgroundColor="red"
            that.dom.appendChild(r);
            that.etat=1;

        } else {
            that.dom.removeChild(that.dom.firstElementChild)
            that.etat=-1;
        }
      
    }

    
}


