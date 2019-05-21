function SyncScroll(sec) {
  var midSec = document.getElementById("overFlowMid");
  var endSec = document.getElementById("overFlowEnd");
   if (sec=="overFlowMid") {
     endSec.scrollTop = midSec.scrollTop;
   }
   else {
     midSec.scrollTop = endSec.scrollTop;
   }
 }