//Array sort 
let thisPage = 1 ; 
let limit = 3 ; 
let Totalpage ;
//ArrayCache , ArrayTypes
let ArrayCaches ; 
let ArrayTypess ;

let outitem = document.getElementById("cbp-body");
document.getElementById("CurrentPage").innerText = thisPage ;

//Function
let Previousbutton = document.getElementById("Previous_button") ; 
let Nextbutton = document.getElementById("Next_button") ; 
Previousbutton.addEventListener("click",loadPagePrevious)
Nextbutton.addEventListener("click",loadPageNext);


export function loadPage (ArrayCache,ArrayTypes){
    
    ArrayCaches = ArrayCache ; 
    ArrayTypess = ArrayTypes ;
    //console.log(ArrayCaches)
    let BeginPage = limit * (thisPage - 1 );
    let EndPage = BeginPage + limit ;
    console.log(ArrayCache.length);
    Totalpage = Math.ceil((ArrayCaches.length) / limit);
    //console.log(Totalpage);
    document.getElementById("EndPage").innerText = Totalpage;

    console.log(BeginPage);
    console.log(EndPage);
    /**/for(let i = BeginPage ; i < EndPage ; i ++ ){

        if(ArrayCaches[i]==null){
            break;
        }

        var datas = ArrayCaches[i];
        var typess = ArrayTypess[i];
       // console.log(datas);
       // console.log(typess);

       outitem.innerHTML += '<div class="item" id="item1"> <div class="item-head"> <div class="item-head-image"> <img src="images/'+datas.img+'.jpg" alt="'+datas.img+'"> </div> <div class="item-head-filter"> <div class="numberplayer"> <p title="'+datas.playermin+' - '+datas.playermax+'" ><i class="fas fa-users"></i> '+datas.playermin+' - '+datas.playermax+'</p> </div> <div class="timeplay"> <p title="'+datas.times+'m" ><i class="fas fa-stopwatch"></i> '+datas.times+'m</p> </div> <div class="ageplay"> <p title="'+datas.ages+'+" ><i class="fas fa-users-cog"></i> '+datas.ages+'+</p> </div> <div class="weightplay"> <p title="'+datas.weight+'/5" ><i class="fas fa-weight"></i> '+datas.weight+'/5</p> </div> </div> <div class="item-head-type"> <div>'+ typess+'</div> </div> </div> <div class="item-bottom"> <p title="'+datas.des+'">'+datas.des+'</p></div> </div>'
        
       //console.log();
    }
    
    
   //console.log(ArrayCache[0]);       
}
export function ResetNumber(){
    document.getElementById("CurrentPage").innerText = 1 ;
    thisPage = 1 ;
}


export function loadPageNext(){
    let check = thisPage +1 ;
    if(check > Totalpage){

    }
    else{
        thisPage += 1 ;
        document.getElementById("CurrentPage").innerText = thisPage; 
        outitem.innerHTML = "";
        loadPage(ArrayCaches,ArrayTypess);
    }
}

export function loadPagePrevious(){
    let check = thisPage -1 ;
    if(check < 1 ){

    }
    else{
        thisPage -= 1 ;
        document.getElementById("CurrentPage").innerText = thisPage; 
        outitem.innerHTML = "";
        loadPage(ArrayCaches,ArrayTypess);
    }
 
}


