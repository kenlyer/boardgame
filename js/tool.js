var a = document.getElementById("container-menu");
a.addEventListener("click",()=>{
    window.location.href="product.html";
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getDatabase, ref, push, set, onValue, remove, off } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk3Em0_JBTybLZCRtOg1NX2hj70hu5Fz4",
    authDomain: "arata-b2152.firebaseapp.com",
    projectId: "arata-b2152",
    storageBucket: "arata-b2152.appspot.com",
    messagingSenderId: "963625471598",
    appId: "1:963625471598:web:a30360f5036c288149e07f",
    measurementId: "G-D2V89HSNY8",
    databaseURL: "https://arata-b2152-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
////database
const db = getDatabase();
////tao 1 node de luu du lieu toi database voi name   
//const reference = ref(db,"cost_day/01_23");


//writedata("andreaw",datachange);

////read 
// const distanceRef = ref(db,"users/");
// onValue(distanceRef,(snapshot)=>{
//     const data = snapshot.val();

//     Object.values(data).forEach(item=>{
//         console.log(item);
//     });//object
// })
////delete
// var data ;
// onValue(reference,(snapshot)=>{
//     data = snapshot.val();
//     console.log(data)
// })

// if(data == null){
//     remove(reference)
// }
// else{
//     console.log("none");
// }

////test
////test button
// let buttontest = document.getElementById("testbutton");
//     buttontest.addEventListener("click",()=>{
//         var inputvale = "testdemo";
//         writedata("andreaw",datachange);
//         console.clear();
//     })

/////////////////////////////////////take_data///////////////////////////////////////////

//funtion take data 
/*demo
function take_data(){
    const reference = ref(db, "boardgame/" + "list");
    var data;
    let outitem = document.getElementById("cbp-body");
    var datas ; 
    var typess ;
    onValue(reference,(snapshot)=>{
        data = snapshot.val();

        if (data != null) {
            //data = Object.entries(data);//doi ve array
            Object.values(data).forEach(item=>{
                //console.log(item);
                var types = Object.entries(item.types);
                types.forEach(a=> {
                    //console.log(a[0]);
                })
                //take 
                datas = item ; 
                //
                var typeHTML =  types.map(function(type) {
                    //console.log(type[0]);
                    return '<p>' + type[0] + '</p> ';
                })
                var stringHTML = typeHTML.join("");
                //take
                typess = stringHTML ; 
                //console.log(stringHTML);
                //console.log(types[0][0]);       
            });//object
            outitem.innerHTML += '<div class="item" id="item1"> <div class="item-head"> <div class="item-head-image"> <img src="images/'+datas.img+'.jpg" alt="'+datas.img+'"> </div> <div class="item-head-filter"> <div class="numberplayer"> <p title="'+datas.playermin+' - '+datas.playermax+'" ><i class="fas fa-users"></i> '+datas.playermin+' - '+datas.playermax+'</p> </div> <div class="timeplay"> <p title="'+datas.times+'m" ><i class="fas fa-stopwatch"></i> '+datas.times+'m</p> </div> <div class="ageplay"> <p title="'+datas.ages+'+" ><i class="fas fa-users-cog"></i> '+datas.ages+'+</p> </div> <div class="weightplay"> <p title="'+datas.weight+'/5" ><i class="fas fa-weight"></i> '+datas.weight+'/5</p> </div> </div> <div class="item-head-type"> <div>'+ typess+'</div> </div> </div> <div class="item-bottom"> <p title="'+datas.des+'">'+datas.des+'</p></div> </div>'
        }
        else{
            console.log("ko co du lieu")
        }
    })
}*/

///
//document.getElementById("demotest").addEventListener("click",()=>{take_data();})
/////////////////auto take data//////////////////
const reference = ref(db, "boardgame/" + "list");
var data;
let outitem = document.getElementById("cbp-body");
var datas ; 
var typess ;
var ArrayGame = [];//danh sach game tat ca 
var ArraySort = [];
onValue(reference,(snapshot)=>{
    data = snapshot.val();
    if (data != null) {
        //clear table data
       var div  =  document.getElementById('cbp-body') ;
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        //data = Object.entries(data);//doi ve array
        Object.values(data).forEach(item=>{

            ArrayGame.push(item);
            ArraySort.push(item);
            //console.log(item);
            var types = Object.entries(item.types);
            types.forEach(a=> {
                //console.log(a[0]);
            })
            //take 
            datas = item ; 
            //
            var typeHTML =  types.map(function(type) {
                //console.log(type[0]);
                return '<p>' + type[0] + '</p> ';
            })
            var stringHTML = typeHTML.join("");
            //take
            typess = stringHTML ; 
            //console.log(stringHTML);
            //console.log(types[0][0]);    
            
            outitem.innerHTML += '<div class="item" id="item1"> <div class="item-head"> <div class="item-head-image"> <img src="images/'+datas.img+'.jpg" alt="'+datas.img+'"> </div> <div class="item-head-filter"> <div class="numberplayer"> <p title="'+datas.playermin+' - '+datas.playermax+'" ><i class="fas fa-users"></i> '+datas.playermin+' - '+datas.playermax+'</p> </div> <div class="timeplay"> <p title="'+datas.times+'m" ><i class="fas fa-stopwatch"></i> '+datas.times+'m</p> </div> <div class="ageplay"> <p title="'+datas.ages+'+" ><i class="fas fa-users-cog"></i> '+datas.ages+'+</p> </div> <div class="weightplay"> <p title="'+datas.weight+'/5" ><i class="fas fa-weight"></i> '+datas.weight+'/5</p> </div> </div> <div class="item-head-type"> <div>'+ typess+'</div> </div> </div> <div class="item-bottom"> <p title="'+datas.des+'">'+datas.des+'</p></div> </div>'
            
        });//object
       
        console.log(ArrayGame);
        off(reference);//tranh viec thay doi ben database anh huong den ben clients
    }
    else{
        console.log("ko co du lieu")
    }
})
/////////////////auto take data//////////////////
/////////////////Filter//////////////////////////
/////////////////ALL Filter///////////////////


const nplayer = document.getElementById('nplayer');
const nTime = document.getElementById('ntime');
const nAge = document.getElementById('nage');
const nweight = document.getElementById('nweight');
const cta = document.getElementById('ncategory');
const cta_ip = cta.querySelectorAll('input');
const nresetButton = document.getElementById('reset_filter');


/*RESET FILTER*/
nresetButton.addEventListener("click",()=>{
    nplayer.value = "";
    nTime.value = 120;
    nAge.value = 14;
    nweight.value = 0.01;
    cta_ip.forEach(element => {
        element.checked = false;
    });
    nfilter_search();
})
/**/

//////////////////*FILTER FUNCTION*////////////////
/*PLAEYER FUNCTION*/
function Player_setting(){

    if(nplayer.value < 0 || nplayer.value > 20){
        nplayer.value = "";
        alert("Number player must > 0 and < 20");
    }
    else {
        //console.log(nplayer.value)
        nfilter_search()
        //nplayer_change(nplayer.value)
    }
}
/*TIME FUNCTION*/
function Time_setting(){
    nfilter_search()
}
/*AGE FUNCTION*/
function Age_setting(){
    nfilter_search()
}
/*WEIGHT FUNCTION*/
function Weight_setting(){
    nfilter_search()
}
/*TYPE FUNCTION*/
function Type_setting(){
    nfilter_search()
}

////////////////*VAN DUNG FUNCTION*/////////////////
/*PLAEYER FUNCTION*/
nplayer.addEventListener('change',Player_setting);
/*TIME FUNCTION*/
nTime.addEventListener('change',Time_setting);
/*AGE FUNCTION*/
nAge.addEventListener('change',Age_setting)
/*WEIGHT FUNCTION*/
nweight.addEventListener('change',Weight_setting)
cta_ip.forEach(element => {
    element.addEventListener('change',Type_setting)
});







//////////////////*FUNCTION FILTER*//////////////////
function filter_change(item , Ntime , Nage , Nweight , Ntypes){
    var sort = [];
    var div  =  document.getElementById('cbp-body') ;
    while(div.firstChild){div.removeChild(div.firstChild);} // clear 

    //switch_player 
    const switch_player = document.getElementById("filter-cbs-player");
    //switch_time 
    const switch_time = document.getElementById("filter-cbs-time");
    //switch_age
    const switch_age = document.getElementById("filter-cbs-age");
    //switch_weight
    const switch_weight = document.getElementById("filter-cbs-weight");
    //switch_type
    const switch_type = document.getElementById("filter-cbs-type");

    ArraySort.forEach(datas=>{
        if(datas.playermax >= item || switch_player.checked == true  ){
            if(datas.times <= Ntime || switch_time.checked == true ){
                console.log(Ntime);
                if(Nage >= datas.ages || switch_age.checked == true ){
                    if(datas.weight >= Nweight || switch_weight.checked == true ){
                        //sort.push(a)  
                        var types = Object.entries(datas.types);
                        var cateTypes = types.map(function(subArray){
                            return subArray[0];
                        })
                        //console.log(cateTypes);
                        var typeHTML =  types.map(function(type) {
                        //console.log(type[0]);
                        return '<p>' + type[0] + '</p> ';
                        })
                        var stringHTML = typeHTML.join("");
                        var typess = stringHTML ; 

                        if(Ntypes == "" || switch_type.checked == true ){
                            outitem.innerHTML += '<div class="item" id="item1"> <div class="item-head"> <div class="item-head-image"> <img src="images/'+datas.img+'.jpg" alt="'+datas.img+'"> </div> <div class="item-head-filter"> <div class="numberplayer"> <p title="'+datas.playermin+' - '+datas.playermax+'" ><i class="fas fa-users"></i> '+datas.playermin+' - '+datas.playermax+'</p> </div> <div class="timeplay"> <p title="'+datas.times+'m" ><i class="fas fa-stopwatch"></i> '+datas.times+'m</p> </div> <div class="ageplay"> <p title="'+datas.ages+'+" ><i class="fas fa-users-cog"></i> '+datas.ages+'+</p> </div> <div class="weightplay"> <p title="'+datas.weight+'/5" ><i class="fas fa-weight"></i> '+datas.weight+'/5</p> </div> </div> <div class="item-head-type"> <div>'+ typess+'</div> </div> </div> <div class="item-bottom"> <p title="'+datas.des+'">'+datas.des+'</p></div> </div>'

                        }
                        else{
                            var checktype = Ntypes.some(function(item){
                                return cateTypes.includes(item);
                            })
                            if(checktype || switch_type.checked == true ){
                                outitem.innerHTML += '<div class="item" id="item1"> <div class="item-head"> <div class="item-head-image"> <img src="images/'+datas.img+'.jpg" alt="'+datas.img+'"> </div> <div class="item-head-filter"> <div class="numberplayer"> <p title="'+datas.playermin+' - '+datas.playermax+'" ><i class="fas fa-users"></i> '+datas.playermin+' - '+datas.playermax+'</p> </div> <div class="timeplay"> <p title="'+datas.times+'m" ><i class="fas fa-stopwatch"></i> '+datas.times+'m</p> </div> <div class="ageplay"> <p title="'+datas.ages+'+" ><i class="fas fa-users-cog"></i> '+datas.ages+'+</p> </div> <div class="weightplay"> <p title="'+datas.weight+'/5" ><i class="fas fa-weight"></i> '+datas.weight+'/5</p> </div> </div> <div class="item-head-type"> <div>'+ typess+'</div> </div> </div> <div class="item-bottom"> <p title="'+datas.des+'">'+datas.des+'</p></div> </div>'
                        
                            }
                        }

                    }          
                }
            }
        }
        else{
        }
    })
}
/////////////////*TRUYEN THAM SO VAO FUNCTION FILTER CHANGE*////////
function nfilter_search(){
    var intNumPlayer = document.getElementById("nplayer");
    if(intNumPlayer == "" ){
        intNumPlayer = 0 ;
    }
    console.log(intNumPlayer.value);
    var intTime = document.getElementById("ntime");
    //console.log(intTime.value);
    var intAge = document.getElementById("nage");
    //console.log(intAge.value);
    var intWeight = document.getElementById("nweight");
    //console.log(intWeight.value);
    var listCategory = [];
    //console.log(listCategory);

    var takeCategory = document.getElementById("ncategory");
    var intputs = takeCategory.querySelectorAll("input");
    //console.log(intputs);
    intputs.forEach(item =>{
        if(item.checked){
            listCategory.push(item.value);
        }
    })
    //console.log(listCategory);/**/
    //
    filter_change(intNumPlayer.value , intTime.value , intAge.value , intWeight.value , listCategory );
}



/*SWITCH-ALL thay doi switch khi an , thay doi cach filter*/
//Player 
const switch_player = document.getElementById("filter-cbs-player");
switch_player.addEventListener("click",()=>{
    const regime = document.getElementById("switch-cbs-player");
    if(switch_player.checked == true ){
        regime.innerHTML = "ON";
        nfilter_search();
        nplayer.removeEventListener('change',Player_setting);//loai bo
        nplayer.readOnly = true ;
        document.getElementById("opeticy-cbs-player").style.display = "block";
        
    }
    else{
        regime.innerHTML = "OFF";
        nplayer.addEventListener('change',Player_setting);//them lai
        document.getElementById("nplayer").value = "";
        nplayer.readOnly = false ;
        document.getElementById("opeticy-cbs-player").style.display = "none";
        nfilter_search();
    }
})

//TIME 
const switch_times = document.getElementById("filter-cbs-time");
switch_times.addEventListener("click",()=>{
    const regime = document.getElementById("switch-cbs-time");
    if(switch_times.checked == true){
        regime.innerHTML = "ON";
        nfilter_search();
        nTime.removeEventListener('change',Time_setting);
        nTime.disabled  = true; 
        document.getElementById("opeticy-cbs-time").style.display = "block";
    }
    else{
        regime.innerHTML = "OFF";
        nTime.addEventListener('change',Time_setting);
        nTime.disabled  = false; 
        document.getElementById("opeticy-cbs-time").style.display = "none";
        nfilter_search();
    }
})

//AGE 
const switch_age = document.getElementById("filter-cbs-age");
switch_age.addEventListener("click",()=>{
    const regime = document.getElementById("switch-cbs-age");
    if(switch_age.checked == true){
        regime.innerHTML = "ON";
        nfilter_search();
        nAge.removeEventListener('change',Age_setting);
        nAge.disabled=true;
        document.getElementById("opeticy-cbs-age").style.display = "block";
    }
    else{
        regime.innerHTML = "OFF";
        nAge.addEventListener('change',Age_setting);
        nAge.disabled=false;
        document.getElementById("opeticy-cbs-age").style.display = "none";
        nfilter_search();
    }
})
//Weight 
const switch_weight = document.getElementById("filter-cbs-weight");
switch_weight.addEventListener("click",()=>{
    const regime = document.getElementById("switch-cbs-weight");
    if(switch_weight.checked == true){
        regime.innerHTML = "ON";
        nfilter_search();
        nweight.removeEventListener('change',Weight_setting);
        nweight.disabled=true;
        document.getElementById("opeticy-cbs-weight").style.display = "block";
    }
    else{
        regime.innerHTML = "OFF";
        nweight.addEventListener('change',Weight_setting);
        nweight.disabled=false;
        document.getElementById("opeticy-cbs-weight").style.display = "none";
        nfilter_search();
    }
})

//categpry
const switch_type = document.getElementById("filter-cbs-type");
switch_type.addEventListener("click",()=>{
    const regime = document.getElementById("switch-cbs-type");
    if(switch_type.checked == true){
        regime.innerHTML = "ON";
        nfilter_search();
        cta_ip.forEach(element => {
        element.removeEventListener('change',Type_setting)
        });
        cta_ip.forEach(element => {
            element.disabled = true 
        });
        document.getElementById("opeticy-cbs-type").style.display = "block";
    }
    else{
        regime.innerHTML = "OFF";
        cta_ip.forEach(element => {
            element.addEventListener('change',Type_setting)
        });
        cta_ip.forEach(element => {
            element.disabled = false 
        });
        document.getElementById("opeticy-cbs-type").style.display = "none";
        nfilter_search();
    }
})


