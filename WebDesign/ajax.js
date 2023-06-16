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