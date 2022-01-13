const blk = document.createElement("div")
const flagimg = document.createElement("img");
flagimg.setAttribute("src","https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg");
flagimg.setAttribute("class","flag");
blk.append(flagimg)
blk.setAttribute("class","bg")
document.body.append(blk)

const texts = ['Population : 323,947,000',"Region : Americas","Capital : Washington, D.C"]

const h1 = document.createElement("h1")
h1.innerText = "United States of America"
blk.append(h1)

for(let text of texts ){
    const para = document.createElement("p")
    para.innerText = text 
    blk.append(para)
}