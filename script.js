function cal_cel(val) {
    // console.log(val)
    var inp2 = document.getElementById("inp2") ;
    var inp3 = document.getElementById("inp3") ;
    val = parseFloat(val) ;
    var out1 = parseFloat((val * (9/5)) + 32).toFixed(3) ;
    var out2 = parseFloat((val + 273.15)).toFixed(3) ;
    inp2.value = out1 ;
    inp3.value = out2 ;
    return true ;
}
function cal_far(val) {
    // console.log(val)
    var inp1 = document.getElementById("inp1") ;
    var inp3 = document.getElementById("inp3") ;
    val = parseFloat(val) ;
    var out1 = parseFloat((val - 32) * (5/9)).toFixed(3) ;
    var out2 = parseFloat((val - 32) * (5/9) + 273.15).toFixed(3) ;
    inp1.value = out1 ;
    inp3.value = out2 ;
    return true ;
}
function cal_kel(val) {
    // console.log(val)
    var inp1 = document.getElementById("inp1") ;
    var inp2 = document.getElementById("inp2") ;
    val = parseFloat(val) ;
    var out1 = parseFloat(val - 273.15).toFixed(3) ;
    var out2 = parseFloat((val - 273.15) * 9/5 + 32).toFixed(3) ;
    inp1.value = out1 ;
    inp2.value = out2 ;
    return true ;
}