var mots = ['joie', 'cheval', 'pain', 'poule', 'abri','fleur', 'robe', 'film', 'jouet', 'moustique',
    'hiver', 'cahier', 'sortie', 'estomac', 'bosquet', 'lutin', 'voiture', 'craquelin','monsieur',
    'lagon', 'clapier', 'chemin', 'chamois', 'saxophone', 'vitesse', 'trampoline', 'galette', 'tempete',
    'migration', 'voliere', 'crayon', 'couleur','orange','sifflet', 'coquelicot'];



    var numMotAleatoire = Math.floor(Math.random()*mots.length);
    var motAleatoire = mots[numMotAleatoire];

    var spanMotAleatoire = document.getElementById('spanMotAleatoire');
    spanMotAleatoire.innerHTML=motAleatoire;

    var nbLettres = motAleatoire.length;

    var leMot = document.getElementById('leMot');
    leMot.innerHTML='Le mot mystère contient '+nbLettres+' lettres.';




    for (var i=0; i<nbLettres; i++){
        var newPara = document.createElement('p');
        //newPara.innerHTML = motAleatoire[i];
        newPara.className= motAleatoire[i];
        tirets.appendChild(newPara);
        var idTiret= 'tiret'+i;
        console.log(idTiret);
        newPara.id=idTiret;
    }

    var inputLettre;
    var position;
    var spanLettresErreur;

    var essais = 11;
    var spanEssais = document.getElementById('spanEssais');
    spanEssais.innerHTML=essais;

    var texteReponse = document.getElementById('texteReponse');
    var trouve = 0;
    var texteGagne = document.getElementById('texteGagne');

    function decrementer() {
        essais=essais-1;
        spanEssais.innerHTML=essais;
    }


    var boutonValider = document.getElementById('boutonValider');

    boutonValider.addEventListener('click', function () {
        inputLettre = document.getElementById("inputLettre").value;
        document.getElementById("inputLettre").value = "";
        position = motAleatoire.indexOf(inputLettre);
        spanLettresErreur = document.getElementById('spanLettresErreur');

        if (position === -1) {
            spanLettresErreur.innerHTML += ' ' + inputLettre + ', ';
            decrementer();
        }

        else if (position>=0) {
            console.log(inputLettre);
            var els = document.getElementsByClassName(inputLettre);
            for(var i=0; i<els.length; i++)
            {
                els[i].innerHTML = inputLettre;
                trouve++;
            }

            //document.getElementById("tiret"+position);
            //selectionner l'element
            //ecrire la lettre dans l'élément

        }

        if (essais<=0){
            texteReponse.innerHTML='Vous avez perdu';
            texteReponse.style.color='red';
            var solution = document.getElementById('solution');
            solution.innerText='Le mot mystère était '+motAleatoire;
            var etapeDix = document.getElementById('etape10');
            var etapeOnze = document.getElementById('etape11');
            etapeDix.style.visibility='hidden';
            etapeOnze.style.visibility='visible';
        }



        else if(essais===10){
            var etapeUn = document.getElementById('etape1');
            etapeUn.style.visibility='visible';
        }

        else if(essais===9){
            var etapeUn = document.getElementById('etape1');
            var etapeDeux = document.getElementById('etape2');
            etapeUn.style.visibility='hidden';
            etapeDeux.style.visibility='visible';
        }

        else if(essais===8){
            var etapeDeux = document.getElementById('etape2');
            var etapeTrois = document.getElementById('etape3');
            etapeDeux.style.visibility='hidden';
            etapeTrois.style.visibility='visible';
        }

        else if(essais===7){
            var etapeTrois = document.getElementById('etape3');
            var etapeQuatre = document.getElementById('etape4');
            etapeTrois.style.visibility='hidden';
            etapeQuatre.style.visibility='visible';
        }

        else if(essais===6){
            var etapeQuatre = document.getElementById('etape4');
            var etapeCinq = document.getElementById('etape5');
            etapeQuatre.style.visibility='hidden';
            etapeCinq.style.visibility='visible';
        }

        else if(essais===5){
            var etapeCinq = document.getElementById('etape5');
            var etapeSix = document.getElementById('etape6');
            etapeCinq.style.visibility='hidden';
            etapeSix.style.visibility='visible';
        }

        else if(essais===4){
            var etapeSix = document.getElementById('etape6');
            var etapeSept = document.getElementById('etape7');
            etapeSix.style.visibility='hidden';
            etapeSept.style.visibility='visible';
        }

        else if(essais===3){
            var etapeSept = document.getElementById('etape7');
            var etapeHuit = document.getElementById('etape8');
            etapeSept.style.visibility='hidden';
            etapeHuit.style.visibility='visible';
        }

        else if(essais===2){
            var etapeHuit = document.getElementById('etape8');
            var etapeNeuf = document.getElementById('etape9');
            etapeHuit.style.visibility='hidden';
            etapeNeuf.style.visibility='visible';
        }

        else if(essais===1){
            var etapeNeuf = document.getElementById('etape9');
            var etapeDix = document.getElementById('etape10');
            etapeNeuf.style.visibility='hidden';
            etapeDix.style.visibility='visible';
        }


        if (trouve===nbLettres){
            texteGagne.innerHTML='Vous avez gagné';
            texteGagne.style.color='green';
        }

    });




var boutonNouvellepartie=document.getElementById('boutonNouvellePartie');
boutonNouvellepartie.addEventListener('click', function () {
console.log(boutonNouvellepartie);
    location.reload();
});



/*

   if (position === -1) {
            spanLettresErreur.innerHTML += ' ' + inputLettre + ', ';
            decrementer()
        } else if (position === 0) {
            tiretUn.innerHTML = inputLettre;
        } else if (position === 1) {
            tiretDeux.innerHTML = inputLettre;
        } else if (position === 2) {
            tiretTrois.innerHTML = inputLettre;
        } else if (position === 3) {
            tiretQuatre.innerHTML = inputLettre;
        } else if (position === 4) {
            tiretCinq.innerHTML = inputLettre;
        } else if (position === 5) {
            tiretSix.innerHTML = inputLettre;
        } else if (position === 6) {
            tiretSept.innerHTML = inputLettre;
        } else if (position === 7) {
            tiretHuit.innerHTML = inputLettre;
        } else if (position === 8) {
            tiretNeuf.innerHTML = inputLettre;
        }




        position = motAleatoire[i].indexOf(inputLettre);
alert(position);



if (position===-1){
        decrementer();
    }

    else if (position>=0){
        alert (position);

        for (var i=0; i<nbLettres;i++) {
            spanLettresErreur.innerHTML+=position;

    }

    }

 */

/*
var tiretUn = document.getElementById('tiret0');
var tiretDeux = document.getElementById('tiret1');
var tiretTrois = document.getElementById('tiret2');
var tiretQuatre = document.getElementById('tiret3');
var tiretCinq = document.getElementById('tiret4');
var tiretSix = document.getElementById('tiret5');
var tiretSept = document.getElementById('tiret6');
var tiretHuit = document.getElementById('tiret7');
var tiretNeuf = document.getElementById('tiret8');
*/