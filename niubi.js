var button1;
var button2;
var deviceidhehehe;
var deviceidxixixi;


//<script src="https://blocklypro.webduino.io/node_modules/jquery/dist/jquery.min.js?rev=2f6b11a7e914718e0290410e85366fe9"></script>
//<script src="https://blocklypro.webduino.io/dist/lib/webduino-all-0.4.20.min.js?rev=4426739c00d85325cb2d3d701fa50666"></script>
//<script src="https://blocklypro.webduino.io/dist/webduino-blockly.min.js?rev=b1ada5fdae699e60af615c060e786d60"></script>
//<script src="https://blocklypro.webduino.io/dist/lib/firebase.min.js?rev=c0bfd493efd477d098a4ae9e92b13880"></script>
//<script src="https://blocklypro.webduino.io/dist/lib/runtime.min.js?rev=683a69503433786202911b4d9f766100"></script>
//<script src="https://blocklypro.webduino.io/dist/webduino-blockly.min.js?rev=6e074ceb23d12d1f7cf2ec95cd5a4150"></script>
//<script src="niubi.js"></script>

function green1(){
  rgbled1.setColor('#33cc00');
}
function green2(){
  rgbled2.setColor('#33cc00');
}
function red1(){
  
  rgbled1.setColor('#ff0000');
}
function red2(){
  
  rgbled2.setColor('#ff0000');
}
function black1(){
  rgbled1.setColor('#000000');
}
function black2(){
  rgbled2.setColor('#000000');
}
function set_deviceID1(){
deviceidhehehe = prompt('輸入DeviceID','')
boardReady({board: 'Smart', device: deviceidhehehe , transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled1 = getRGBLedCathode(board, 15, 12, 13);
  button1 = getPullupButton(board, 4);
  
  
  button1.on('pressed', function () {
    c2_callFunction("p1shoot")
    c2_callFunction("p1rocket")
  });
    
  
});
}
function set_deviceID2(){
deviceidxixixi = prompt('輸入DeviceID','')
boardReady({board: 'Smart', device: deviceidxixixi , transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled2 = getRGBLedCathode(board, 15, 12, 13);
  button2 = getPullupButton(board, 4);
    
    
  button2.on('pressed', function () {
    c2_callFunction("p2shoot")
    c2_callFunction("p2rocket")
  });
      
    
});
}