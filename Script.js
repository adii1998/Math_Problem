


function SavedButton(){
    // console.log("working save btn")
    var wet =  document.querySelector(".inputBox1").innerHTML;
    var set =  document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(wet,set);
    console.log(localStorage.getItem(set));
    set++;
}

function SearchButton(){
    event.preventDefault();

    console.log("working search btn")
   const problem = document.getElementById('problem-bar').value;
   console.log(problem);
   const category = document.getElementById('CategoryBar').value;

   const encoded = encodeURIComponent(problem);
   console.log(encoded);
   let pro = fetch(`https://newton.now.sh/api/v2/${category}/${encoded}`)
//    console.log(`https://newton.now.sh/api/v2/simplify/${encoded}`)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    var input2 =  value.result;
    document.querySelector(".inputBox2").innerHTML = input2;
   })
   

   const Input1  = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   var set =  document.querySelector(".inputBox1").value;
   var wet =  document.querySelector(".inputBox2").innerHTML;
   localStorage.setItem(set,wet);
}


function delBtn(ele){
    console.log("working delete btn")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
}