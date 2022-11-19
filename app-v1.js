const firstReq = new XMLHttpRequest(); //creating our request
firstReq.addEventListener('load',function(){ 
    console.log(this.responseText); //spit out what came back
    const gData = JSON.parse(this.responseText); //parse what comes back
    console.log(gData); //console.log the new object 
    for(clim of gData){
        
        console.log(clim.climate)}
});
firstReq.addEventListener('error',() =>{
    console.log("ERROR!!!");
}
)
firstReq.open('GET',"https://ghibliapi.herokuapp.com/locations/");
firstReq.send();
console.log("SENDING REQUEST...") //will appear first because above shit will wait for load

