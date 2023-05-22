function formula(val) {
    var for1 = document.getElementById("for1") ;
    var for2 = document.getElementById("for2") ;
    if(val == 'C')
    {
        for1.innerText = "°F = (°C * 9/5) + 32" ;
        for2.innerText = "K = °C + 273.15"
    }
    else if(val == "F")
    {
        for1.innerText = "°C = (°F - 32) * 5/9"
        for2.innerText = "K = (°F - 32) x (5/9) + 273.15"
    }
    else
    {
        for1.innerText = "°C = K - 273.15" ;
        for2.innerText = "°F = (K - 273.15) x 9/5 + 32"
    }
}
function solve(val , unit)
{
    if(val == "" || val.indexOf('-') > 0 || val.includes('e') || val.includes('+') )
    {
        document.getElementsByClassName("warning")[0].style.display = "block" ;
        return false ;
    }
    var sol = document.getElementsByClassName("solution")[0] ;
    var cont = document.getElementsByClassName("container")[0] ;
    cont.style.display = "none"
    sol.style.display = "grid" ;
    val = parseFloat(val) ;
    var text1  = "" ; 
    var text2 = "" , text3   ;
    if(unit == 'C')
    {
        var ans1 , ans2 ;
        ans1 = val * (9/5) ;
        ans2 = ans1 + 32 ;
        text1 = "F = (" + val + " * 9/5 )+ 32 <br>F = " + parseFloat(ans1).toFixed(2) + "+ 32 <br>F = " +  parseFloat(ans2).toFixed(2);
        ans1 = val + 273.15 ;
        text2 = "K = " + val + " + 273.15 <br>K = " + parseFloat(ans1).toFixed(2) ; 
        text3 = val + "°C is equivalant to : " + parseFloat(ans2).toFixed(2) + "°F , " + parseFloat(ans1).toFixed(2) + "K<br>"
    }
    else if(unit == 'F')
    {
        var ans1 , ans2 ;
        ans1 = val - 32 ;
        ans2 = ans1 * (5/9) ;
        text1 = "C = ( " + val + " - 32 ) * 9/5 <br>C = " + parseFloat(ans1).toFixed(2) + " * 9/5<br>C = " + parseFloat(ans2).toFixed(2) ;
        ans1 = ans2 + 273.15 ;
        text2 = "K = ( " + val + " - 32 ) * 9/5 + 237.15 <br>K = " + parseFloat(ans2).toFixed(2) + " + 273.15 <br>K = " + parseFloat(ans1).toFixed(2) ;
        text3 = val + "°F is equivalant to : " + parseFloat(ans2).toFixed(2) + "°C , " + parseFloat(ans1).toFixed(2) + "K<br>"
    } 
    else
    {
        var ans1 , ans2 , ans3 ;
        ans1 = val - 273.15 ;
        text1 = "C = " + val + " - 273.15 <br>C = " + parseFloat(ans1).toFixed(2) ;
        ans2 = ans1 * (9/5) ;
        ans3 = ans2 + 32 ;
        text2 = "F = (" + val + " - 273.15 ) * 9/5 + 32 <br>F = " + parseFloat(ans1).toFixed(2) + " * 9/5 + 32 <br>F = " + parseFloat(ans2).toFixed(2) + " + 32<br>F = " + parseFloat(ans3).toFixed(2) ;
        text3 = val + "K is equivalant to : " + parseFloat(ans1).toFixed(2) + "°C , " + parseFloat(ans3).toFixed(2) + "°F<br>"

    }
    document.getElementById("inp_val").innerHTML = text3 ;
    document.getElementsByClassName("card")[0].innerHTML = text1 ;
    document.getElementsByClassName("card")[1].innerHTML = text2 ;
} 
function back()
{
    document.getElementsByClassName("solution")[0].style.display = "none" ;
    document.getElementsByClassName("container")[0].style.display = "grid" ;
}
