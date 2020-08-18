// JavaScript source code
$(document).ready(function () {


    doIt = function () {

       

        //document.getElementById("tester").innerHTML = '<table id="example" class="display" style="width:100%"> <thead> <tr> <th>Threads</th> <th>Memory (MB)</th> <th>Run Time</th></tr></thead ></table >';
        if ($.fn.DataTable.isDataTable("#example")) {
            $('#example').DataTable().clear().destroy();
        }

        var orderArrayHeader = ["Threads ", "Memory (Mb)", "Run Time"];
        var th = "";
        for (var i = 0; i < orderArrayHeader.length; i++) {
            th += '<th>' + orderArrayHeader[i] + '</th>';
        }
        var tr = $("<tr>").append($(th));
        $("#example").append($(tr));

        var table = $('#example').DataTable({
            "paging": false,
            "info": false,
            "searching": false,
            "dom": '<"tester"flipt>'

        });


       var samples = $('#samples').val();
       var covar = $('#covar').val();
       var intcov = $('#intcovar').val();
       var exp = $('#exposure').val();
       var ss = $('#ss').val();
       var threads = $('#threads').val();


       for (var i = 1; i <= threads; i++) {
            var threadNum = i.toString();
            var mem = Math.ceil(((8 * i * ss * (intcov + exp + 1) * samples) / 1000000) * 3 + ((8 * (covar+1) * samples) / 1000000) * i);
            table.row.add(
                [threadNum, mem, 'NA']
            ).draw();
        }
    }

});