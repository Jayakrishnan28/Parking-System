let vehicleList = [];
let baycount = [0,1,2,3,4,5,6,7,8,9];
let getexitList =[];
function setBay(){
   let vehicleNo = document.getElementById("vehicleNo").value;
  // console.log(vehicleNo);
   vehicleList.push(vehicleNo);
  // console.log(vehicleList);
   check();
/*   let getVehicleList = document.getElementById('vehicleList');

  // getVehicleList.add(new Option(vehicleNo));
   let option = document.createElement('option');
   option.text = vehicleNo;
   option.value = vehicleNo;
   getVehicleList.appendChild(option);  

   for(let idx=0;idx<baycount.length;idx++){
       if(baycount[idx] == idx){
           baycount[idx] = vehicleNo;
           break;
       } 
   }
 //  console.log(baycount);
 // exitList.push(vehicleNo); */
  let getExitList = document.getElementById('exitList');
  let option2 = document.createElement('option');
  option2.text = vehicleNo;
  option2.value = vehicleNo;
  getExitList.appendChild(option2);  


  
}
function getBay(){
  let list= document.getElementById('vehicleList').value;
  for(let idx=0;idx<baycount.length;idx++){
   if(baycount[idx] == list){
       let bay = idx+1;
       console.log(list+" occupied "+bay+" bay");
       document.getElementById('bay'+bay).style.backgroundColor = "Green";
       document.getElementById('bay'+bay).style.color = "white";
       document.getElementById('bay'+bay).innerText = "Occupied";
       break;
   } 
}
}
function clearBay(){
   let list= document.getElementById('vehicleList').value;
   console.log(vehicleList);
   for(let idx=0;idx<baycount.length;idx++){
       if(baycount[idx] == list){
          // baycount[idx] = idx;
           let bay = idx+1;
           document.getElementById('bay'+bay).style.backgroundColor = "lightgray";
           document.getElementById('bay'+bay).style.color = "Black";
           document.getElementById('bay'+bay).innerText = "Bay"+bay;
           break;
       } 
   }
}
function exitBay(){
   let exList= document.getElementById('exitList');
   for(let idx=0;idx<baycount.length;idx++){
       console.log(baycount[idx]);
       if(baycount[idx] == exList.value){
           console.log(exList);
           baycount[idx]=idx;
           let bay = idx+1;
           document.getElementById('bay'+bay).style.backgroundColor = "lightgray";
           document.getElementById('bay'+bay).style.color = "Black";
           document.getElementById('bay'+bay).innerText = "Bay"+bay;
           break;
       }
   } 
   let vehList= document.getElementById('vehicleList')
   console.log(exList.length);
   console.log(typeof exList);
   for(let idx=0;idx<exList.length;idx++){
       if(exList.options[idx].value == exList.value){
           exList.remove(idx);
           vehList.remove(idx);
           document.getElementById('exitList').value = "--Select--";
       }
   }
}
function check(){
   let vehicleNoo = document.getElementById("vehicleNo").value;
   let che = document.getElementById('vehicleList');
   for(let idx=1;idx<che.length;idx++){
       console.log(che.options[idx])
       if(che.options[idx].text == ""){
           che.options[idx].text = vehicleNoo;
           break;
       }
   }

   console.log(che);

  // console.log(len.length);
 
   }