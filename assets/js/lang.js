let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("#link");

let line1 = document.querySelector("#line1"),
    line2 = document.querySelector("#line2"),
    line3 = document.querySelector("#line3");


link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")
         
          line1.textContent = data[attr].line1
          line2.textContent = data[attr].line2
          line3.textContent = data[attr].line3
     
     })
})



let data = {
     english: {
          line1: "How to design a good corporate website to help improve corporate brand value?",
          line2: "Introducing one-page websites and various application cases of one-page web design!",
          line3: "See how foreign web designers design, mind-blowing web design! ",
         
     },
     chinese: {
          line1: "如何设计一个良好的企业网站帮助提高企业品牌价值？",
          line2: "介绍一页式网站以及一页式网页设计的各种应用案例 !",
          line3: "看看外国的网页设计师都怎么玩，令人惊叹的网页设计 !",

     }
}