const exercicioUm = (arr, x) => {
    const memoization = {}
    for(let i=0; i<arr.length-1; i++){
        let resto = x - arr[i]
        if(resto in memoization){
            return [memoization[resto], arr[i]]
        } else {
            memoization[arr[i]] = arr[i]
        }
    }
    return []
}