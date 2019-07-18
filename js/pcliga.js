/* global $, document , alert*/

$(document).ready(function () {

    "use strict";

    var clau;
    var fitxa;
    
    // CLÀUSULA


    $("#boto").on("click", function () {

        clau = $("#clau").val();

        var calcul = parseInt(clau * 0.1499) + parseInt(clau);

        var resultat = $("<p></p>").text(" La clàusula és: " + calcul);
        $(".clausula").append(resultat);
        buidar();

    });
    

    // FITXA

    $("#boto_f").on("click", function () {

        fitxa = $("#fitxa").val();
        var res;

        var opcio = parseInt(prompt("Clàusula:\n\t1. <30.000.000 \n\t2. Entre 30.000.001 i 50.000.000 \n\t3. Entre 50.000.001 i 70.000.000 \n\t4. Entre 70.000.001 i 90.000.000 \n\t5. >90.000.000"));

        switch (opcio) {

            case 1:

                res = parseInt(fitxa * 0.18035) + parseInt(fitxa);
                break;

            case 2:

                res = parseInt(fitxa * 0.230104) + parseInt(fitxa);
                break;

            case 3:

                res = parseInt(fitxa * 0.280044) + parseInt(fitxa);
                break;

            case 4:

                res = parseInt(fitxa * 0.330023) + parseInt(fitxa);
                break;

            case 5:

                res = parseInt(fitxa * 0.38) + parseInt(fitxa);
                break;

            default:
                alert(" Aquesta opció no existeix");
                break;


        }
        var resultat2 = $("<p></p>").text(" La fitxa és: " + res);
        $(".fitxa").append(resultat2);
        buidar();


    });


    function buidar() {
        clau = $("#clau").val("");
        fitxa = $("#fitxa").val("");
    }


});
