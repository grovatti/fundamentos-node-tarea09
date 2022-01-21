const iFinaliza = 10;
const color = require("colors/safe")
crearTabla = (iMultiplicador) =>{
    let itera = "";
    
   
    console.log(color.red( `================================`))
    console.log(`           TABLA: ${color.red(color.bold(iMultiplicador) ) }`)
    for(let ifor=1;ifor<=iFinaliza ; ifor++){
        console.log(`${color.green(iMultiplicador)} x ${ifor} = ${color.blue(iMultiplicador*ifor)}`);
    }
    console.log(color.red( `================================`))
}

module.exports = {crearTabla}