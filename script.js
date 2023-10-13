
(function createGridElements()
{
    for(let i=1;i<=60*60;i++)
    {
    const grid = document.querySelector('.grid');
    const pixels = document.createElement('div');
    pixels.setAttribute("class","grid-element");
    
    grid.appendChild(pixels);
    }
    
})();

let mouseDown =  false;
let penColor = "black";
let randomCol = false;
const grid = document.querySelector('.grid');
const clearBtn = document.getElementById('clearBtn');
const eraserBtn = document.getElementById('eraserBtn');
const colorPicker = document.getElementById('colorPicker');
const colorBtn =  document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');


document.body.addEventListener('mousedown',()=>(mouseDown = true));
document.body.addEventListener('mouseup',()=>(mouseDown = false));

function randomColor()
{
    const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
   return `rgb(${randomR}, ${randomG}, ${randomB})`;
  
}


function ChangeButtonColor(val)
{
    let btn = document.querySelectorAll('.controlBtn');

        btn.forEach((item)=>{
            if(item.id==val)
            item.setAttribute("style","background-color: black; color: white");
            else
            item.setAttribute("style","background-color: #E9F1FA; color: black");
            
        })
}




grid.addEventListener('mouseover', function(e){

    if(mouseDown==false)
    return;
    
   if (e.target.className === 'grid-element')
    {
    const el = e.target;
    
    if(randomCol==true)
        el.style.backgroundColor = randomColor();
        else
        el.style.backgroundColor = penColor;
    }
}
)

clearBtn.addEventListener('click',(e)=>{

    ChangeButtonColor("colorBtn");
    penColor = document.getElementById('colorPicker').value;
    randomCol = false;

    let grid = document.querySelectorAll('.grid-element');
    
    grid.forEach((item)=>{
        if(item.style["background-color"]!="white");
        {
        item.setAttribute("style","background-color: white;");
        }
    })
   
})

eraserBtn.addEventListener('click',(e)=>{

    
   penColor = "white";
   randomCol = false;
    ChangeButtonColor("eraserBtn");
   

})

colorPicker.addEventListener('input',(e)=>{

 penColor = e.target.value;
 
 })
 
colorBtn.addEventListener('click',(e)=>{

    penColor = document.getElementById('colorPicker').value;
    randomCol=false;
    ChangeButtonColor("colorBtn");
    
    })



rainbowBtn.addEventListener('click',(e)=>{
    randomCol=true;
    ChangeButtonColor("rainbowBtn");
})

  
