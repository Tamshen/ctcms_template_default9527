function myclick(str){
    if ( document.getElementById("dizhi").value=="")   
    {
        alert('请输入解析地址!');   
        return false;  
    } 
var value = document.getElementById("dizhi").value;
document.getElementById("WANG").src = (str) + (value);
document.getElementById("jx").style = "display: block";
return false;
};
function myclick2(str){

if ( document.getElementById("dizhi2").value=="")   
{  
    alert('请输入解析地址!');   
    return false;  
}  
var value = document.getElementById("dizhi2").value;
document.getElementById("WANG2").src = (str) + (value);
return false;
};
  function replaceSpace(obj) {
    obj.value = obj.value.replace(/\s/gi, '')
  };
