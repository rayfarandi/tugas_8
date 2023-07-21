//sort by tanggal
function sort(){
  document.getElementById("popupSort");
if (popupSort.style.opacity  === "1") {
  popupSort.style.opacity  = "0";
} else {
  popupSort.style.opacity  = "1";
}
}


// tampilkan sub task
function toggleElement() {
    document.getElementById("list");
    if (list.style.opacity  === "1") {
        list.style.opacity  = "0";
    } else {
        list.style.opacity  = "1";
    }
} 	

// Select radio bottom Design Guidelines, garis tengah n berubah warna
      function design() {
        document.getElementById("design").style.textDecoration= "line-through" ;
        document.getElementById("design").style.color = "orange";
      }

// subtask muncul maka task utama baris ke 2-3 akan geser ke bawah
      function flip() {
        document.getElementById("panel").style.position = "relative";
        document.getElementById("panel.a").style.top = "76px";
        document.getElementById("panel1").style.position = "relative";
        document.getElementById("panel1.a").style.top = "115px";
      }



          // $(document).ready(function(){
    //     $("#flip").click(function(){
    //       $("#panel").slideToggle("hide");
    //       $("#panel1").slideToggle("hide");
    //     });
    //   }); buat nanti