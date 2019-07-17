function update(id)
{  
	if(window.sessionStorage.getItem("numberOfSeats")!=null)
		
	 {
        window.sessionStorage.setItem("numberOfSeats",id+","+window.sessionStorage.getItem("numberOfSeats"));
        }
} 
window.addEventListener('load',function() {
    var form=document.getElementById("searchride");
	form.addEventListener('submit',function()
        {
		alert("the above entered details should be true upto your knowledge and once entered ");
        var xhr=null;
            try
            {
                xhr=new XMLHttpRequest(); //Chrome, safari, firefox
            }
            catch(err)
            {
                try
                {
                    xhr=new ActiveXObject("MSXML2.XMLHttp.6.0");//IE
                }
                catch(err)
                {
                    console.log("ajax object not created");
                }
            }
        
            xhr.onreadystatechange=function(){
                var response=null;
                response.setContentType("application/json");
                if(xhr.readyState==4) //successful response
                    {
                    response=xhr.responseText;
                     
                    }
                        
            }
            
           
            xhr.open('post','ScheduleUpdateServlet',false); //Userservlet will Initiated dopost
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xhr.send();
          //  return false;
        });
      

})





document.getElementById('row_id').value=row_id;
    document.getElementById('Sid').value=document.getElementById('Sid_'+row_id).value;
    document.getElementById('Ssp').value=document.getElementById('Ssp_'+row_id).value;
    document.getElementById('Sep').value=document.getElementById('Sep_'+row_id).value;
        

