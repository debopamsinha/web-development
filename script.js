function light(value)
{
    var pic;
    if(value==0)
    {
        pic="off.jpeg";
    }
    else
    {
        pic="on.jpeg"
    }
    document.getElementById('bulb').src=pic;
}