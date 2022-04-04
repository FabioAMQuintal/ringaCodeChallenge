const exercicioTres = frase => {
    let count = 1;
    let final = ''
    let current = ''
    for(let i=0; i<frase.length; i++){
        if(frase[i] === frase[i+1]){
            count++
            current = count + frase[i]
            if(count === 9){
                final += current
                current = ''
                count = 0
            }
        } else {
            final += current
            current = ''
            count = 1
        }
    }
    return final
}

/* função para codificar a string para o estado inicial
const reverseTres = frase => {
    let final = ''
    for(let i=0; i<frase.length; i+=2){
        for(let j=0; j<frase[i]; j++){
            final +=frase[i+1]
        }
    }
    return final
*/
