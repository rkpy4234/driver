const body = document.querySelector("body"),
       header = document.querySelector("header"),
       nav = document.querySelector("nav"),
       modeToggle = document.querySelector(".dark-light"),
       searchBox = document.querySelector(".searchBox"),
       open = document.querySelector(".open"),
       close = document.querySelector(".close");
      

       // nav bar scroll up and down with windows

       let prevScrollpos = window.pageYOffset;
       window.addEventListener("scroll", ()=>{
           let currentScrollpos = window.pageYOffset;
       if(prevScrollpos < currentScrollpos){
            header.classList.add("hide");
            arrowTop.classList.add("show");
       }else{
            header.classList.remove("hide");
            arrowTop.classList.remove("show");
       }
       prevScrollpos = currentScrollpos;
       })
       

        // for always selector dark or light mode
        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode"){
         body.classList.add("dark");
        }

//js code to toggle dark and light mode
       modeToggle.addEventListener("click",()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //    for always dark or light mode    
    
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }else{
            localStorage.setItem("mode", "dark-mode");
        }

       });

       //toggle for nav bar
       searchBox.addEventListener("click", ()=>{
              searchBox.classList.toggle("active");
              // nav.classList.add("active");
          });
      
      
      //for side bar
      
      open.addEventListener("click",()=>{
          nav.classList.add("active");
      })
      body.addEventListener("click", e =>{
          let clickedElm = e.target;
      
          if(!clickedElm.classList.contains("open") && !clickedElm.classList.contains("menu")){
              nav.classList.remove("active");
              searchBox.classList.remove("active");
          }
      })

      //header closed

       //fullname display
    //    document.addEventListener('DOMContentLoaded', function () {
    //     var fullName = localStorage.getItem('fullName');
    //     if (fullName) {
    //         document.getElementById('fullName').textContent = fullName;
    //     } else {
    //         alert('No user information found.');
    //         window.location.href = "index.html";
    //     }
    // });

   //end of header

   //calculation

   var totalHours = 0;
   var totalMinutes = 0;

   function recordTime() {
       var hours = parseInt(document.getElementById('hours').value);
       var minutes = parseInt(document.getElementById('minutes').value);

       if (isNaN(hours)) {
           hours = 0;
       }
       if (isNaN(minutes)) {
           minutes = 0;
       }

       var table = document.getElementById("timeTable");
       var row = table.insertRow(-1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       cell1.innerHTML = hours;
       cell2.innerHTML = minutes;

       totalHours += hours;
       totalMinutes += minutes;

       // Adjust total time
       totalHours += Math.floor(totalMinutes / 60);
       totalMinutes = totalMinutes % 60;

       document.getElementById('totalTime').innerHTML = 'Total Time: ' + totalHours + ' Hours, ' + totalMinutes + ' Minutes';

       document.getElementById('hours').value = '';
       document.getElementById('minutes').value = '';
   }

   function calculateCost() {
       var rate = parseFloat(document.getElementById('rate').value);

       if (isNaN(rate)) {
           alert('Please enter a valid rate');
           return;
       }

       var totalTimeInHours = totalHours + (totalMinutes / 60);
       var totalCost = totalTimeInHours * rate;

       document.getElementById('totalCost').innerHTML = 'Total Rs: ' + totalCost.toFixed(2);
   }

   function clearPage() {
       location.reload();
   }
   