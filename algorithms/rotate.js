//Write a function 'rotatArray(arr, k)' that takes an arryy 'arr' and an interger 'k', and rotates the array to the right by 'k' steps in place.




function rotatArray(arr,k){
    if(k<0 || k > arr.length) {
        return "Invaliud input: k must be a non-negative interger less than ;length of the arry.";

    }
    const firstpart = arr.slice(0,k);
    const secondpart = arr.slice(k, arr.lenth);



    console.log("firstpart:",firstpart);
    console.log("secondpart:",secondpart);


    return secondpart.concat(firstpart);
}

const res = rotatArray([1,2,3,4,5],3);
console.log ("final results:",res);





