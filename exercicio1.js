const exercicioUm = (arr, soma) => {
    const arrayRetorno = []
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === soma){
                arrayRetorno.push(arr[i], arr[j])
            }
        }
    }
    return arrayRetorno.length > 0 ? arrayRetorno : []
}