/**
 * Created by developer-01 on 9/2/16.
 */

var ws = require("nodejs-websocket");

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received "+str);
        conn.sendText(str.toUpperCase()+"!!!")
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001);

$('.list-box').on('click', function(){
    var slug = $(this).closest('li').attr('id');
    console.log(id);
});

$(document).on('hidden.bs.modal', function (e) {
    $(e.target).removeData('bs.modal');
});

/**
 *
 * @param slug
 */
function getBooking(slug){



}

/**
 *
 */
function getNewBookings(){



}

/**
 *
 * @param slug
 * @param count
 */
function sendBooking(slug, count){

}