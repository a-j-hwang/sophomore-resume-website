

//================================================

var gradientSpeed = 0.0005;
var colors = new Array(
  [161, 34, 78],
  [112, 32, 130],
  [138, 136, 255],
  [0, 178, 169]
 );

var step = 0;
var colorIndices = [0,1,2,3];
    

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
   background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }

  window.setTimeout(updateGradient, 10);
}





document.addEventListener('mousemove', function () {
	gradientSpeed = 0.02;
	setTimeout(function(){
	gradientSpeed = 0.0015;
	}, 80);	
	
});




updateGradient();

$(window).scroll(function(){
  $(".img-containerFadeout").fadeOut("6000");
  var scroll = $(window).scrollTop();
	if (scroll==0){
    $(".img-containerFadeout").fadeIn("6000");
}
	if (scroll>600){
	  $( ".vl" ).animate({            
            height: "1150px"
        });

	if (scroll>1600 || scroll==$(window).height()){
	  $( "#graph1" ).animate({            
            width: "700px"
        });

	  $( "#graph2" ).animate({            
            width: "700px"
        });
	  $( "#graph3" ).animate({            
            width: "700px"
        });
	  $( "#graph4" ).animate({            
            width: "500px"
        });
	  $( "#graph5" ).animate({            
            width: "700px"
        });
	  $( "#graph6" ).animate({            
            width: "900px"
        });
	  $( "#graph7" ).animate({            
            width: "500px"
        });
	  $( "#graph8" ).animate({            
            width: "600px"
        });
	  $( "#graph9" ).animate({            
            width: "600px"
        });
	  $( "#graph10" ).animate({            
            width: "900px"
        });
	}
	
	if (scroll>2200 || scroll==$(window).height()){
	  $( "#graph11" ).animate({            
            width: "300px"
        });

	  $( "#graph12" ).animate({            
            width: "900px"
        });
	  $( "#graph13" ).animate({            
            width: "900px"
        });
	}
}
});

