/*let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    console.log("button is clicked");
    alert("button is clicked");
};
for(btn of btns){
btn.onclick=sayhello;
btn.onmouseenter=function(){
    console.log("you entered a anumber");
};
console.dir(btn);
}
function sayhello(){
alert("hello");
}
// event listner= they donot have  a limit
btn.addEventListener("click",function(){
    console.log("button is clicked");
});

// event listner
btn.addEventListener("click", sayhello);
btn.addEventListener("click", sayname);
btn.addEventListener("db click", function(){
    console.log("you doubleclick heree")
});
function sayhello(){
    alert("hello");
    }
    function sayname(){
        alert("apna coolage");
        }*/

        // code for that html and css
        let btn=document.querySelector("button");
        btn.addEventListener("click",function(){
            let h3=document.querySelector("h3");
            let randomcoolr=getrandomcolor();
            h3.innerText=randomcoolr;
            let div=document.querySelector("div");
            div.style.background=randomcoolr;
            console.log("color updated");
        });
        function getrandomcolor(){
            let red=Math.floor(Math.random()*255);
            let green=Math.floor(Math.random()*255);
          let blue=Math.floor(Math.random()*255);
        let color=`rgb(${red},${green},${blue})`;
        return color;
        }
