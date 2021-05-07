      var init;
      
      function Loading() {
        init = setTimeout(showInit, 2000);
      }
      
      function showInit() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
    
