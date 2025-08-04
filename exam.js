document.getElementById("btn").addEventListener("click",function(){
     var name = document.getElementById("username").value
     document.write("welcome"+ "  " +name)
     localStorage.setItem('name',name);
     sessionStorage.setItem('name',name);})
