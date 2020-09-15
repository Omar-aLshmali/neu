function myFunction() {
    var table = document.getElementById("myTable");
    var x = document.getElementById("myTable").rows.length;
    var row = table.insertRow(x-1);
    var Name = row.insertCell(0);
  var Sorte1 = row.insertCell(1);
  var Sorte2 = row.insertCell(2);
  var Sahne = row.insertCell(3);
  Name.innerHTML = document.getElementById("fname").value;
  Sorte1.innerHTML = document.getElementById("fsorte1").value;
  Sorte2.innerHTML = document.getElementById("sorte2").value;

   Sahne.innerHTML =document.getElementById("fsahne").outerHTML;
// document.getElementById("fsahne").value;
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
