var univers;
var score = 0;
var atomeClick = 0;

function init() {
    creerUnivers();
    atomeAleatoire();

    let div_jeu = document.getElementById("jeu");
    let dom_table = document.createElement("table");
    dom_table.setAttribute("align", "center");
    dom_table.setAttribute("cellpadding", "0px");
    dom_table.setAttribute("cellspacing", "0px");
    div_jeu.appendChild(dom_table);

    let validate = document.getElementById("validate");
    validate.style.display = "none";
    validate.addEventListener("click", () => {
        let p = document.createElement("p");
        p.textContent = "Votre score est de " + score;
        document.getElementsByTagName("body")[0].append(p);
    });

    
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
            dom_td.style.height ="30px";
        }
    }

    document.addEventListener("keypress", (ev) => {
        if(ev.key = "d"){
            for(i = 0; i<10; i++){
                for(j = 0; j<10; j++){
                    let cell = univers[i][j];
                    cell.dom.style.backgroundColor = cell.atome ? (cell.dom.style.backgroundColor == "green" ? "white" : "green") : cell.dom.style.backgroundColor;
                }
            }
        }
    })
}

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




function resultatDuTir(cellule, vl, vc) {
    var s = univers[cellule.li + vl][cellule.co + vc];
    if (!s.grille) {
        return s; // Tir normal
    }
    if (s.atome) {
        return null; // Absorption
    }
    if (vc === 0) {
        if (univers[s.li][s.co - 1].atome) {
            if (!cellule.grille) {
                return cellule;
            }
            return resultatDuTir(cellule, 0, 1); // Déviation vers la droite colonne
        }
        if (univers[s.li][s.co + 1].atome) {
            if (!cellule.grille) {
                return cellule;
            }
            return resultatDuTir(cellule, 0, -1); // Déviation vers la gauche colonne
        }
    }
    if (vl === 0) {
        if (univers[s.li - 1][s.co].atome) {
            if (!cellule.grille) {
                return cellule;
            }
            return resultatDuTir(cellule, 1, 0); // Déviation vers la droite ligne
        }
        if (univers[s.li + 1][s.co].atome) {
            if (!cellule.grille) {
                return cellule;
            }
            return resultatDuTir(cellule, -1, 0); // Déviation vers la gauche ligne
        }
    }
    return resultatDuTir(s, vl, vc);
}

function atomeAleatoire() {
    var i = 0;
    for (i = 0; i < 5; i++) {
        var cell;
        let l = Math.floor(Math.random() * (univers.length - 2) + 1);
        let c = Math.floor(Math.random() * (univers.length - 2) + 1);
        cell = univers[l][c];
        cell.atome = true;
    }
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
            this.dom.addEventListener("click", that.score);
        }
        this.dom.style.backgroundColor = couleur;
        this.dom.style.border = "2px solid black"
    };

    this.couleurAleatoire = function () {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }


    this.cote = function () {
        if (that.etat = -1) {
            that.dom.style.backgroundColor = that.couleurAleatoire();
            that.etat = 1;
            var t;
            if (that.co == 0) {
                t = resultatDuTir(that, 0, 1);
            }
            if (that.co == 9) {
                t = resultatDuTir(that, 0, -1);
            }
            if (that.li == 0) {
                t = resultatDuTir(that, 1, 0);
            }
            if (that.li == 9) {
                t = resultatDuTir(that, -1, 0);
            }
            score++;
            if (t != null) {
                if (t != that) {
                    score++;
                }
                t.dom.style.backgroundColor = that.dom.style.backgroundColor;
                t.etat = 1;
            }
        }
    }

    this.score = function () {
        if (that.etat == -1 || that.etat == 0) {
            let div = document.createElement("div");
            div.style.backgroundColor = "red";
            div.style.borderRadius = "50%"
            div.style.width = "100%";
            div.style.height = "100%";
            that.dom.append(div);
            that.etat = 1;
        } else {
            that.dom.removeChild(that.dom.firstElementChild)
            that.etat = 0;
        }

        if (!that.atome) {
            score += 5;
        }

        if (++atomeClick >= 5) {
            document.getElementById("validate").style.display = "inline-block"
        }
    }
}




