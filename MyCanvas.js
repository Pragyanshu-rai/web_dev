function dolime()
{
    var sheet = document.getElementById("draw");
    sheet.style.backgroundColor="lime";
    var context = sheet.getContext("2d");
    context.fillStyle='blue';
    context.fillRect(10,10,40,40);
    context.fillStyle='red';
    context.font='35px Arial';
    context.fillText("Hi",10,100);
}
function dored()
{
    var sheet = document.getElementById("draw");
    sheet.style.backgroundColor="red";  
    var context = sheet.getContext("2d");
    context.fillStyle='yellow';
    context.fillRect(10,10,40,40);
    context.fillStyle='lime';
    context.font='35px Arial';
    context.fillText("Hi",10,100);
}
var image, imagegr, imageor;
function upload()
{
    var pic = document.getElementById("finput");
    var can = document.getElementById("fupload1");
    image = new SimpleImage(pic);
    image.drawTo(can);
}
function uploadgr()
{
    var pic = document.getElementById("grscr");
    var can = document.getElementById("greenscreen");
    imagegr = new SimpleImage(pic);
    imagegr.drawTo(can);
}
function uploador()
{
    var pic = document.getElementById("orig");
    var can = document.getElementById("original");
    imageor = new SimpleImage(pic);
    imageor.drawTo(can);
}
function grayscale()
{
    for(var pixel of image.values())
    {
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var can = document.getElementById("fupload2");
    image.drawTo(can);
}
function greenscreen()
{
    var can = document.getElementById("result");
    if( imagegr == null || !imagegr.complete())
    {
        alert("Green screen image not loaded");
        return;    
    }
    if( imageor == null || !imageor.complete())
    {
        alert("Original image not loaded");
        return;    
    }
    var result = new SimpleImage(imagegr.getWidth(),imagegr.getHeight());
    for(var pixel of imagegr.values())
    {
        var x=pixel.getX(), y=pixel.getY();
        //if(x < 801)
        //{
            if (pixel.getGreen() > 230)// && pixel.getRed() == 20 && pixel.getBlue() == 12)
            {
                var orpx = imageor.getPixel(x, y);
                result.setPixel(x, y, orpx);
            }
            else
                result.setPixel(x, y, pixel);
        //}
    }
    result.drawTo(can);
}
