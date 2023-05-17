
function show(){

    document.getElementById("songs").style.display= "block";
    document.getElementById("showbutton").style.display= "none";
    
}


const songs = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
    ];

    let s = '';

    for (let i=1;i<=songs.length;i++){ 

        i= (i < 10) ? '0' + i.toString() : i.toString();

        let songhtm='<div> <span>'+i+'</span><span>'+songs[i-1]+'</span> </div>';

        s+=songhtm;
        
    }
    document.getElementById("songs").innerHTML=s;

