const bar=document.getElementById('bar'); 
const close=document.getElementById('close'); 
const nav=document.getElementById('navbar'); 

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
function printLetterByLetter(word)
{
    var wordContainer = document.getElementById("word");
    var index = 0;
    var intervalid = setInterval(() => {if (index < word.length) 
        {
            wordContainer.innerHTML += word[index];
            index++;
        }
        else{
            clearInterval(intervalid);
        }
        
        
    }, 500);
}
//printLetterByLetter();
