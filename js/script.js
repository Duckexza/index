      var init;
      
      function Loading() {
        init = setTimeout(showInit, 1500);
      }
      
      function showInit() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }
    
