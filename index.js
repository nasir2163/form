const main=document.querySelector("#main")
const sec1=document.querySelector("#section1")
const sec2=document.querySelector("#section2")
const sec3=document.querySelector("#section3")
// const arr=["section1","section2","section3"]
main.addEventListener("click",function(e){
    console.log(e.target.id)
    if(e.target.id=="section1"){
        section1()
        document.getElementById("sec1").innerHTML=text()
        document.getElementById("sec2").innerHTML=""
        document.getElementById("sec3").innerHTML=""
    }else if(e.target.id=="section2"){
        section2()
        document.getElementById("sec2").innerHTML=text()
        document.getElementById("sec3").innerHTML=""
        document.getElementById("sec1").innerHTML=""
    }else{
        section3()
        document.getElementById("sec3").innerHTML=text()
        document.getElementById("sec1").innerHTML=""
        document.getElementById("sec2").innerHTML=""
    }
})

window.addEventListener("load",function(){
    document.getElementById("sec1").innerHTML=text()
    sec1.style.border="2px solid #e93589"
    
})

function section1(){
    sec1.style.border="2px solid #e93589"
    // sec1.style.backgroundColor="lightgray"
    sec2.style.border="1px solid lightgray"
    sec3.style.border="1px solid lightgray"
}

function section2(){
    sec2.style.border="2px solid #e93589"
    sec1.style.backgroundColor=""
        sec1.style.border="1px solid lightgray"
        sec3.style.border="1px solid lightgray"
}
function section3(){
    sec3.style.border="2px solid #e93589"
    sec1.style.backgroundColor=""
        sec1.style.border="1px solid lightgray"
        sec2.style.border="1px solid lightgray"
}

function text(){
    return `
    <div style="display: flex;gap: 10px;padding-bottom: 20px;margin-left: 60px;">
            <div style="width: 70px;">
              <p>size</p>
              <select name="" id="" style="width: 100%;padding: 2px;">
                <option value="s">S</option>
              </select>
              <br>
              <select name="" id="" style="width: 100%;margin-top: 5px;padding: 2px;">
                <option value="s">S</option>
              </select>
            </div>
            <div style="width: 70px;">
              <p>colour</p>
              <select name="" id="" style="width: 100%;padding: 2px;">
                <option value="s">Black</option>
              </select>
              <br>
              <select name="" id="" style="width: 100%;margin-top: 5px;padding: 2px;">
                <option value="s">Black</option>
              </select>
            </div>
          </div>
    `
}