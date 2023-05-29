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
function formula(val)
{
    var for1 = document.getElementById("for1") ;
    var for2 = document.getElementById("for2") ;
    if(val == 'C')
    {
        for1.innerText = "°F = (°C * 9/5) + 32" ;
        for2.innerText = "K = °C + 273.15" ;
        return true ;
    }
    if(val == 'F')
    {
        for1.innerText = "°C = (°F - 32) * 5/9" ;
        for2.innerText = "K = (°F - 32) x (5/9) + 273.15" ;
        return true ;
    }
    for1.innerText = "°C = K - 273.15" ;
    for2.innerText = "°F = (K - 273.15) x 9/5 + 32" ;
    return true ;
}