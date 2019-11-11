berapaTahun=(a,b,c,d)=>{
    e=(b/100)*a
    hasil=Math.floor((d-a)/(e+c))
    return hasil
}
console.log(berapaTahun(1000,5,50,1200))
console.log(berapaTahun(1500000,2.5,10000,2000000))