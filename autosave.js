var saveTimeoutId;
let storePlace = ''

document.addEventListener("DOMContentLoaded", () => {
  // Get the element(s) you want to autosave
  let area = document.getElementById('area');
  let area2 = document.getElementById('area2');
  let area3 = document.getElementById('area3');
  let area4 = document.getElementById('area4');
  

  let allAreas = document.querySelectorAll('.area' , '.area2' ,'.area3' , '.area4')
  // use keyup over keypress so that backspaces will register
  allAreas.forEach(area => {
    console.log(area)
    
    area.addEventListener('keyup', (data) =>{
         storePlace = data.path[0].dataset.storeplace

        // clear save timeout as the user is editing
        if (saveTimeoutId) window.clearTimeout(saveTimeoutId);
        
        // Store the timeout id again
        saveTimeoutId = window.setTimeout(() =>{
         
          // Code for saving here
          window.localStorage.setItem(storePlace , area.value)
        }, 1000); // Configure timeout period to preference
      });
  });
  
  
});