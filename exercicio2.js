const exercicioDois = (blackUniform, orangeUniform) => {
    const blackObj = {}
    const orangeObj = {}
    let countBlack=0;
    let countOrange=0;
    const tamanho = blackUniform.length;
    //Utilizando objetos para aproveitar a ordenação no método Object.values()
    for(let i=0; i<tamanho; i++){
        blackObj[blackUniform[i]] = blackUniform[i]
        orangeObj[orangeUniform[i]] = orangeUniform[i]
    }
    //loop secundário para ter o resultado correto no caso de um array com ordenação crescente e outro array com ordenação decrescente
    for(let i=0; i<tamanho; i++){
        if(Object.values(blackObj)[i] < Object.values(orangeObj)[i]){
            countBlack++
        }
        if(Object.values(blackObj)[i] > Object.values(orangeObj)[i]){
            countOrange++
        }
    }
    return Math.max(countBlack, countOrange) === tamanho ? true : false
}