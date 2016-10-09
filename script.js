

for(var i=0,t=[];i<document.getElementsByTagName("*").length;i++){
  t[document.getElementsByTagName("*")[i].id]=document.getElementsByTagName("*")[i]
}
var tableau = ['Tu déconnes ? Cest moins >_<', 'moins poto ! moins !', 'ahaha, not even close'];
var has = Math.floor(Math.random()*101);
var plus=1;
 
 //Action sur le bouton "Roll The Dice"
t.go.onclick=function(){
	// 
  if(this.value!="Roll The Dice"){
    t.mess.firstChild.data="Tu veux jouer ? Trouve le nombre mystère entre 1 et 100 :)"
    t.test.value="";
    this.value="Roll The Dice";
    };
  if(!t.test.value || isNaN(t.test.value)){
    return
  };
 // Test de valeur => Elle est inferieur à la prédiction aléatoire
  if(t.test.value < has){
    t.mess.firstChild.data="Pas loin, franchement, mais c'est + ";
    plus++;
  }
 // Test de valeur => Elle est supérieur à la prédiction aléatoire 
  if(t.test.value > has){
    t.mess.firstChild.data=tableau[Math.floor(Math.random()*3)]
    plus++;
  }
  // Test de valeur => Victoire la valeur est égale à la prédiction
  if(t.test.value == has){
  	// Message de fin de partie
    t.mess.firstChild.data="gg bro !";
    // On change le texte du bouton
    this.value="Continuer de try hard ?";
    has = Math.floor(Math.random()*101);
    // On affiche dans une boite de dialogue le nombre de coup
    alert("Bravo, tu as battu le développeur qui a codé ce jeu de ouf. Le FBI va te recruter. Nombre de coups: " + plus);
    plus=1;
  }
}
 
