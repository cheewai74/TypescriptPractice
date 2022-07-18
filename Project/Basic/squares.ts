function squares(array: number[]){
    const result = array.map( x => x * x);
    console.log(result);
    return result;
}

squares([4,4]);