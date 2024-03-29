function makeshapeAppear()
{
    function getRandomColor()
    {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i=0; i < 6 ;i++)
        {
            color+= letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    var top=Math.random()*400; 
    var left=Math.random()*400;  
    var width= (Math.random()*400)+50;
    var random=Math.random();

    if(Math.random() > 0.5)
    {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else
    {
        document.getElementById("shape").style.borderRadius = "0";
    }

    
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.height = width + "px";  
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px"; 
  document.getElementById("shape").style.display = "block";

  start = new Date().getTime();
}                
function appearafterdelay(){
    setTimeout(makeshapeAppear, Math.random()*1000);
}

appearafterdelay();
document.getElementById("shape").onclick = function()
{  
  document.getElementById("shape").style.display = "none";

  var end = new Date().getTime();

  var time = (end - start)/1000;

  document.getElementById("timetaken").innerHTML = time + "s";

  appearafterdelay();
}
