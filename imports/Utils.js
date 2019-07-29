export let matchArrays = (tab1, vrs)=> {
      // body...
      const ln = vrs.length;
      let tr = 0;
      for (let i = vrs.length - 1; i >= 0; i--) {
        if(tab1.indexOf(vrs[i])!=-1){
          tr++;
          //console.log('valeur trouvé jusqu\'à présent', tr);
        }
      }
      return (tr==vrs.length)?true:false;
    }

egalArray=(ar1, ar2)=>{
  let f=0;
  for (let i = ar1.length - 1; i >= 0; i--) {
    if(ar1.indexOf(ar2[i])!=-1){
      f++;
    }
  }
  return (f==ar1.length)?true:false;
}

egalBereens=(a,b)=>{
  let ai={};
    let bi={};
     Object.assign(ai, a);
     Object.assign(bi, b);
    if ((ai._id===bi._id)&&(ai.nom===bi.nom)&&(ai.prenom===bi.prenom)&&(egalArray(ai.stands,bi.stands))&&(egalArray(ai.themes,bi.themes))) {
      return true;
    }
    else {
      return false;
    }
//return (JSON.stringify(a)===JSON.stringify(b));
}


export let differeBereens = (bef, aft)=>{
  let bl=false;
  console.log('I am here');
  if (bef.length!==aft.length) {
    bl=true;
  }
  else{
    for (let i = bef.length - 1; i >= 0; i--) {
        if(!egalBereens(bef[i], aft[i])){
          bl=true;
          break;
        }
      }
  }
  return bl;
}