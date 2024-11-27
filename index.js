var bookmarkername = document.getElementById('bookmarkerName');
var Bookmarkersite = document.getElementById('BookmarkerSite');
var allusers =  [];
var y = '';
if (JSON.parse(localStorage.getItem("loginInfo")) !== null){
    allusers = JSON.parse(localStorage.getItem("loginInfo"));
   
}
var cartona = `   <h4>Index</h4><span id="indexconatiner"></span>
<h4>Website Name</h4> <span  id="webname"></span>
<button  class="btn "  id="btnvisit"  >Visit</button>
 <button class="btn"  id="btndelete"  onclick="sitedelete()">delete</button>

`;


    
function submitfun(){
    var user;
    user = {
        bookname :bookmarkername.value,
        booksite : Bookmarkersite.value, 
    }
    allusers.push(user);
    displaySite();
    clear();
    console.log(allusers);
    localStorage.setItem('loginInfo',JSON.stringify(allusers)) 
}


function clear(){
    bookmarkername.value = null;
    Bookmarkersite.value = null;
}
function  displaySite(){
   
     var numindex = '';
     var nameindex = '';
    if(allusers.length > 0){

        for(var i = 0 ; i<allusers.length ; i++){
            numindex = i;
           nameindex = allusers[i].bookname;
           siteurl = allusers[i].booksite;
           
           cartona =`
           <h4>Index</h4><span id="indexconatiner">${numindex}</span>
         <h4>Website Name</h4> <span  id="webname">${ nameindex}</span>
         <button  class="btn "  id="btnvisit"  onclick="visitesite('${siteurl}')"   >Visit</button>
          <button class="btn"  id="btndelete"  onclick="sitedelete(${numindex})">delete</button>
     
          
          `;
          }
        
          
    }
    document.getElementById('displayInfo').innerHTML = cartona;

    
}
document.getElementById('displayInfo').innerHTML = cartona;

function sitedelete(index){
     
     allusers.splice(index,1);
    //  console.log(allusers);
     displaySite();
     localStorage.setItem('loginInfo',JSON.stringify(allusers)) 
}



function visitesite(url) {
    if (url && url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        alert('Invalid URL. Please ensure the URL starts with http or https.');
    }
}