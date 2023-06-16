function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "pantai.txt", true);
  xhttp.send();
}



        $(document).ready(function(){
            var urlprov = "http://dev.farizdotid.com/api/daerahindonesia/provinsi"
            $.get(urlprov, function(data, status){
                for(i=0;i<data.provinsi.length;i++){
                    var menu = "<option value =" + data.provinsi[i].id + ">" + data.provinsi[i].nama + "</option>"
                    $('#provinsi').append(menu)
                }
            })

            $('#provinsi').change(function(){
                var idprov = $('#provinsi').val();
                var kab = "http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=" + idprov
                $('#kota').empty()
                $.get(kab, function(data, status){
                    for(i=0;i<data.kota_kabupaten.length;i++){
                        var menukota = "<option value =" + data.kota_kabupaten[i].id + ">" + data.kota_kabupaten[i].nama + "</option>"
                        $('#kota').append(menukota)
                    }
                })    
            })

            $('#kota').change(function(){
                var idkot = $('#kota').val();
                var kota = "http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" + idkot
                $('#kecamatan').empty();
                $.get(kota, function(data, status){
                    for(i=0; i<data.kecamatan.length;i++){
                        var kec = "<option value =" + data.kecamatan[i].id + ">" + data.kecamatan[i].nama + "</option>"
                        $('#kecamatan').append(kec)
                    }
                })
            })

            $('#kecamatan').change(function(){
                var iddes = $('#kecamatan').val();
                var desa = "http://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=" + iddes
                $('#kelurahan').empty();
                $.get(desa, function(data, status){
                    for(i=0; i<data.kelurahan.length;i++){
                        var kel = "<option value =" + data.kelurahan[i].id + ">" + data.kelurahan[i].nama + "</option>"
                        $('#kelurahan').append(kel)
                    }
                })
            })
        });

    


FFT = 5000000
DFT = 2550000
BCT = 8000000
ECT = 4000000
PECT = 10000000

var pilihtiket = document.getElementById("jenis tiket")

pilihtiket.addEventListener("change", function(){

    var out = document.getElementById("jenis tiket").value

    if (out == "fft"){
        document.getElementById("subtotal pesanan").value = FFT
    } else if (out == "dft"){
        document.getElementById("subtotal pesanan").value = DFT
    } else if (out == "bct"){
        document.getElementById("subtotal pesanan").value = BCT
    } else if (out == "ect"){
        document.getElementById("subtotal pesanan").value = ECT
    } else if (out == "pect"){
        document.getElementById("subtotal pesanan").value = PECT
    }
})


    
    var member = document.getElementById("membership")
    member.addEventListener("change", function(){
    
      var jumlah = document.getElementById("jumlah pesanan").value
      var harga = document.getElementById("subtotal pesanan").value
      var total = harga * jumlah
      document.getElementById("total pesanan").value = total


    if(member.value == "member"){
    var diskon = total * 0.15
    document.getElementById("diskon").value = diskon
    var bayar = total - diskon
    } else if (member.value == "non"){
    var diskon = 0
    bayar = total
  }
  document.getElementById("total pembayaran").value = bayar
}
)
function clickme(){
Swal.fire(
    'Sukses!',
    'Tiket Anda dalam Proses',
    'Silahkan menunggu 1X24 jam',
  )
}