var name = prompt ("comment tu t'appelles?");

longName(name);

function longName(name){
  if((name.length > 1) && (name.length < 10))
  {
    alert(`Bonjour, ${name}`);
  }
  else{
    alert('T'es pas dans la bande !');
  }
}
