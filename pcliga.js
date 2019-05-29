/* global $, document , console*/

$(document).ready(function () {

    "use strict";


    $("#boto").on("click", function () {

        var clau = $("#clau").val();



        var calcul = parseInt(clau * 0.1499) + parseInt(clau);

        var resultat = $("<p></p>").text(" La clàusula és: " + calcul);
        $(".clausula").append(resultat);
        buidar();

    });


    $("#boto_f").on("click", function () {

        var fitxa = $("#fitxa").val();


        var opcio = parseInt(prompt("Clàusula:\n\t1. <30.000.000 \n\t2. Entre 30.000.001 i 50.000.000 \n\t3. Entre 50.000.001 i 70.000.000 \n\t4. Entre 70.000.001 i 90.000.000 \n\t5. >90.000.000"));

        switch (opcio) {

            case 1:

                var res = parseInt(fitxa * 0.18035) + parseInt(fitxa);
                break;

            case 2:

                var res = parseInt(fitxa * 0.230104) + parseInt(fitxa);
                break;

            case 3:

                var res = parseInt(fitxa * 0.280044) + parseInt(fitxa);
                break;

            case 4:

                var res = parseInt(fitxa * 0.330023) + parseInt(fitxa);
                break;

            case 5:

                var res = parseInt(fitxa * 0.38) + parseInt(fitxa);
                break;

            default:
                alert(" Aquesta opció no existeix");
                break;


        }
        var resultat2 = $("<p></p>").text(" La fitxa és: " + res);
        $(".clausula").append(resultat2);
        buidar();


    });


    function buidar() {
        var clau = $("#clau").val("");
        var fitxa = $("#fitxa").val("");
    }







});
