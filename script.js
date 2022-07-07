$(document).ready(function() {
    // WENN NICHTS EINGEGEBEN HILFETEXT
    //  |_> genau hier
    $("#clientID").keyup(function() {
        var clientID = $('#clientID').val();
        // DIESE CONDITION MÜSSEN WIR ANPASSEN
        if(clientID.length > 3)
        getData('client', clientID);
    });
    // WENN NICHTS EINGEGEBEN HILFETEXT
    //  |_> genau hier
    $("#parcelID").keyup(function() {
        var parcelID = $('#parcelID').val();
        // DIESE CONDITION MÜSSEN WIR ANPASSEN
        if(parcelID.length > 3) {
            getData('parcels', parcelID);
        }

    });

    // NACH DEM GLEICHEN PRINZIP MÜSSEN WIR DIE CHECKBOX FÜR LIVESTOCK
    // BEKOMMEN UND DIE GEWÄHLTEN PARCELS ZWISCHENSPEICHERN
});

function getData(type, value) {
    switch(type) {
        case 'client':
            obj = {
                type: "GET",
                url: "centralClient.php",
                data: {
                    clientID: value
                },
                success: function(html) {
                    $("#client").html(html).show();
                }
            }
            break;
        case 'parcels':
            obj = {
                type: "GET",
                url: "centralClient.php",
                data: {
                    // DAS MUSS NOCH ANGEPASST WERDEN
                    clientID: value
                },
                success: function(html) {
                    $("#parcel").html(html).show();
                }
            }
            break;

            // ES FEHLT NOCH DIE MÖGLICHKEIT FÜR DEN POST ALLER DATEN
    }
    $.ajax(obj);
}