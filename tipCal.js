function Display() {
       let Cost = document.getElementById("Total").value;
       let Service = document.getElementById("service").value;
       let Share = document.getElementById("total_Pepole").value;
       let final_Amt = (Cost*Service)/Share;
       alert("Each of you have to pay"+final_Amt);
     }