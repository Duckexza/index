      var myVar;
      
      function Loading() {
        myVar = setTimeout(showPage, 1500);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
    
