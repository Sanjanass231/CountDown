const endDate = "08 August 2023 12:02 AM";
document.getElementById("end-date").innerHTML=endDate;
const input = document.querySelectorAll("input") ;
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    // convert seconds into millisecond 
    const diff = (end-now)/1000;   
    // second into days 
    if(diff<0) return;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff%60);

}
clock();
setInterval(
    () => {
        clock()
    },1000
)