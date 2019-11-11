mapsendiri=(arr,fn)=>{
    output=[]
    for(i=0;i<arr.length;i++){
        output.push(fn(arr[i]))
    }
    return output
}
var w = [1,4,9,16,25]
var x = w.map(Math.sqrt)
var y = w.map((val)=> val * 2)
console.log(y)
console.log(mapsendiri(w,(val)=>val*2))