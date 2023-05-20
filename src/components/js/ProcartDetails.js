// Example:- 1 jquery code for collepse;

// $(document).ready(function(){
// 	$("button").click(function(){
// 			// $(".main").hide("fast");
// 			$(".main").hide(100,function(){
// 					$("button").click(function(){
// 						$(".main").show()
// 						})
// 					})
// 			});
// 	});

// Example:- 2 simple Java script code for collepse;

// var a=document.getElementById('btn');
// var b=document.getElementsByClassName('main')[0];
// b.style.display='none';
// function toggel(){
// 	if(b.style.display == 'none')
// 	{
// 		b.style.display='block';
		
// 	}
// 	else{
// 		b.style.display='none';
// 	}
// }

// Example:- 3 More simple java script code for collepse;
// setInterval(() => {
//     var t=new Date();
//     var h=t.getHours();
//     var m=t.getMinutes();
//     var sec=t.getSeconds();
//     var en='AM'
//     document.getElementById('clock').innerHTML= h+':'+m+':'+sec+' '+en;
//     if(h < '10')
//     {
//         h = '0'+ h;
//     }
//     if(m < 10)
//     {
//         m = '0'+ m;
//     }
//     if(sec < '10')
//     {
//         sec = '0'+ sec;
//     }
// },1000)
// Example:- This is for change color
//===============================================================================================================

// Start Change theme

// var color1=document.querySelector(':root');
// console.log(color1);
// var color2=getComputedStyle(root);
// console.log(color2);
// var color3= color2.getPropertyValue('--primary');
// color1.style.setProperty('--primary','red');

 // Menu-x Start
 var a=document.getElementsByClassName('user-service')[0];
 a.style.display='none';
var model=document.getElementById('model-boxx');
 model.style.display='none';


function userMenu(){
 
 if(a.style.display=='none'){
     a.style.display='block';
     model.style.display='block';
     console.log(model);
 }
 else{
     a.style.display='none';
     model.style.display='none';
 }
 
}


function menu_x(){
 if(a.style.display=='block'){
     a.style.display='none';
     model.style.display='none'
 }
 else{
     a.style.display='block';
     model.style.display='block';
 }
}


// Menu-x End




function changeColor(){
    var color=document.getElementById('color').value;
    document.documentElement.style.setProperty('--primary',color);
    }
    function changeColorText(){
    var color2=document.getElementById('colorText').value;
    document.documentElement.style.setProperty('--secondry',color2);
    }
    
    // End  Change theme
    
    
    // Start Clock
    
    setInterval(function(){
        var t=document.getElementById('clock');
        let time=new Date();
        t.innerHTML = time.toLocaleTimeString();
    },500)
    
    // Clock End
    
    // Toggle Start
    
    var tog=document.getElementsByClassName('navbar-togglerss')[0];
    var coll=document.getElementById('nav-1');
        coll.style.display='none';
    var menu=document.getElementsByClassName('menu')[0];
    var cross=document.getElementById('cross');
    function toggle(){
        if(coll.style.display=='none'){
            coll.style.display='block';
            menu.style.display='none';
            cross.style.display='block';
        }
        else{
            coll.style.display='none';
        }
    }
    function crossmenu(){
        if(cross.style.display=='block'){
            menu.style.display='block';
            cross.style.display='none';
        }
        else{
            cross.style.display='block';
            
        }
    }
    
    // Toggle End
    
    // Dynamic Product list Start
    
    // var pro = [
    //     {
    //         'id':1,
    //         'img':'img/laptop.png',
    //         'name':'Laptop',
    //         'price':40000,
    //         'discreptions':'Gaming Laptop',
    //         'html_file':'Laptops.html'
    //     },
    //     {
    //         'id':2,
    //         'img':'img/keyboard.png',
    //         'name':'Keyboard',
    //         'price':40000,
    //         'discreptions':'Gaming Keyboard ',
    //         'html_file':'Keyboard.html'
    //     },{
    //         'id':3,
    //         'img':'img/mouse.png',
    //         'name':'Mouse',
    //         'price':40000,
    //         'discreptions':'Gaming Mouse',
    //         'html_file':'Mouse.html'
    //     },{
    //         'id':4,
    //         'img':'img/headphone.png',
    //         'name':'Headphone',
    //         'price':40000,
    //         'discreptions':'Gaming Headphone',
    //         'html_file':'Headphone.html'
    //     },{
    //         'id':5,
    //         'img':'img/chair.png',
    //         'name':'Chair',
    //         'price':40000,
    //         'discreptions':'Gaming Chair',
    //         'html_file':'Chair.html'
    //     },{
    //         'id':6,
    //         'img': 'img/mobile2.png',
    //         'name':'Mobile',
    //         'price':40000,
    //         'discreptions':'Gaming Mobile',
    //         'html_file':'Phone.html'
    //     }
    // ]
    // var p=pro.map((items)=>{
    //     return(
    //         ` <div class='col-md-2 col-sm-4 col-xs-4 all-list ' style='text-decoration: none;'>
    //             <center>
    //             <a href='${items.html_file}' class='anchor'>
    //             <img src='${items.img}' width='100%'>
    //             <p class="i-names">${items.name}</p>
    //             </a>
    //           </center>
    //           </div>
    //          `
    //         )
    // });
    
    // var a=document.getElementById('productall').innerHTML= p.join(" ");
    
    // Dynamic Product list End
    
    // Menu-x Start
    // var a=document.getElementsByClassName('user-service')[0];
    //     a.style.display='none';
    // var model=document.getElementsByClassName('model-box')[0];
    //     model.style.display='block';
    
    // function userMenu(){
        
    //     if(a.style.display=='none'){
    //         a.style.display='block';
    //         model.style.display='block';
    //     }
    //     else{
    //         a.style.display='none';
    //         model.style.display='none';
    //     }
        
    // }
    
    // Menu-x End    
    
    