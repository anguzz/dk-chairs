// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

    //20-237 seconds 
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      
      endTime=getRndInteger(10,237)
  
      
      window.addEventListener('load',()=>{
        const container = document.querySelector('#headerPopup')
        var dklink = "https://www.youtube.com/embed/npuuTBlEb1U?autoplay=1&end="+endTime;
        const iframe=document.createElement("iframe")
        iframe.src=dklink
        iframe.width=300
        iframe.height=315
        iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        iframe.allowFullscreen=true
        container.appendChild(iframe)
      })

  
    

      
      
      /* <iframe width="300" height="315" src="#" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/
   
      