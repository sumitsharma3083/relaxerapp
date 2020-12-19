    
    
        setInterval(() => {
            const mytext = document.querySelector('.my-text')
            var el = document.querySelector('.relaxer_container')
            var outer_relax = document.querySelector('.outer_relax_container')
            var outer = document.querySelector('.outer')
            var st = window.getComputedStyle(el, null);
            var tr = st.getPropertyValue("-webkit-transform") ||
                 st.getPropertyValue("-moz-transform") ||
                 st.getPropertyValue("-ms-transform") ||
                 st.getPropertyValue("-o-transform") ||
                 st.getPropertyValue("transform") ||
                 "fail...";
          
            if( tr !== "none") {
              var values = tr.split('(')[1];
                values = values.split(')')[0];
                values = values.split(',');
              var a = values[0];
              var b = values[1];
              var c = values[2];
              var d = values[3];
          
              var scale = Math.sqrt(a*a + b*b);
              var radians = Math.atan2(b, a);
                if ( radians < 0 ) {
                radians += (2 * Math.PI);
                }
             var angle = Math.round( radians * (180/Math.PI));
          
                } else {
                var angle = 0;
                }
   
                 if(angle >= 0 && angle <= 140){
                    outer_relax.classList.remove('shrink')
                    outer.classList.remove('shrink')
                     outer_relax.classList.add('expand')
                     outer.classList.add('expand')
                     mytext.innerHTML = 'breath in !'
                 } else if(angle > 140 && angle < 190){
                    outer_relax.classList.remove('expand')
                    outer.classList.remove('expand')
                    outer_relax.classList.add('hold')
                    outer.classList.add('hold')
                    mytext.innerHTML = 'hold !'
                }else{
                    outer_relax.classList.remove('hold')
                    outer.classList.remove('hold')
                    outer_relax.classList.add('shrink')
                    outer.classList.add('shrink')
                    mytext.innerHTML = 'breath out !'
                }
        });