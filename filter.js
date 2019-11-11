filtersendiri=(arr,fn)=>{
    output=[]
    for(i=0;i<arr.length;i++){
        if(fn(arr[i])){
            output.push(arr[i])
        }
    }
    return output
}
w=[1,4,9,16,25]
console.log(filtersendiri(w,(val)=>val%2==0))