let vehicleList = [];
let baycount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function setBay() {
    let vehicleNo = document.getElementById("vehicleNo").value;
    if (vehicleList.length == 0) {
        vehicleList.push(vehicleNo);
        setBayValues();
        setVehicleList();
        setExitList();
    } else {
        let dup = "Noduplicate";
        for (let idx = 0; idx < vehicleList.length; idx++) {
            if (vehicleList[idx] == vehicleNo) {
                alert(vehicleNo +" is already available in the bay");
                dup = "Duplicate";
                break;
            }
        }
        if (dup == "Noduplicate") {
            vehicleList.push(vehicleNo);
            setBayValues();
            setVehicleList();
            setExitList();
        }
    }
}
function getBay() {
    let list = document.getElementById('vehicleList').value;
    for (let idx = 0; idx < baycount.length; idx++) {
        if (baycount[idx] == list) {
            let bay = idx + 1;
            console.log(list + " occupied " + bay + " bay");
            document.getElementById('bay' + bay).style.backgroundColor = "Orange";
            document.getElementById('bay' + bay).style.color = "white";
            document.getElementById('bay' + bay).innerText = list;
            break;
        }
    }
}
function clearBay() {
    document.getElementById('vehicleList').value = "select";
}
function exitBay() {
    let exList = document.getElementById('exitList');
    for (let idx = 0; idx < vehicleList.length; idx++) {
        console.log(baycount[idx]);
        console.log(baycount);
        if (baycount[idx] == exList.value) {
            console.log(exList);
            baycount[idx] = idx;
            console.log(vehicleList);

            console.log(vehicleList);
            let bay = idx + 1;
            document.getElementById('bay' + bay).style.backgroundColor = "lightgray";
            document.getElementById('bay' + bay).style.color = "Black";
            document.getElementById('bay' + bay).innerText = "Bay" + bay;
            vehicleList.splice(idx, 1);
            if (vehicleList.length < 10) {
                if (document.getElementById("vehicleNo").disabled) {
                    document.getElementById("vehicleNo").disabled = "False";
                }
            }
            break;
        }
    }
    let vehList = document.getElementById('vehicleList')
    //console.log(exList.length);
    //console.log(typeof exList);
    for (let idx = 0; idx < exList.length; idx++) {
        if (exList.options[idx].value == exList.value) {
            exList.remove(idx);
            vehList.remove(idx);
            document.getElementById('exitList').value = "select";
        }
    }
}
function setVehicleList() {
    let vehicleNoo = document.getElementById("vehicleNo").value;
    let list = document.getElementById('vehicleList');
    for (let idx = 1; idx < list.length; idx++) {
        //console.log(list.length);
        if (list.options[idx].text == "") {
            list.options[idx].text = vehicleNoo;
            break;
        }
    }
}
function setBayValues() {
    let vehicleNo = document.getElementById("vehicleNo").value;
    if (vehicleList.length <= 10) {
        console.log(vehicleList);
        for (let idx = 0; idx < vehicleList.length; idx++) {
            if (baycount[idx] == idx) {
                baycount[idx] = vehicleNo;
                let bay = idx + 1;
                document.getElementById('bay' + bay).style.backgroundColor = "Green";
                document.getElementById('bay' + bay).style.color = "white";
                document.getElementById('bay' + bay).innerText = "Occupied";
                break;
            }
        }
    } else {
        alert("Bay is full");
        vehicleList.pop();
        document.getElementById("vehicleNo").value = "Slot is full";
        document.getElementById("vehicleNo").disabled = "true";
    }
}
function setExitList(){
    let vehicleNo = document.getElementById("vehicleNo").value;
    if (vehicleList.length <= 10) {
        let getExitList = document.getElementById('exitList');
        let option2 = document.createElement('option');
        option2.text = vehicleNo;
        option2.value = vehicleNo;
        getExitList.appendChild(option2);
    }
}