//Mobile
document.write('            <button id="mobileShow" onclick="showMobileNav()" style="border-style:solid; border-width:0px; background-color:#ffffff00; opacity:0.5; width:50px;" id="mobileNav"><img src="/subfolder/stylised_icons/icons/hamburgerMenu.svg"></button>')
document.write('            <div class="mobileNavbarMenu" id="mobileNavDisplay" style="display:none;"> <a href="/index.html">Blog</a><br> <a href="/about.html">About</a><br> <a href="/shop.html">Shop</a><br> <a href="/minecraft.html">Minecraft Server</a><br> </div>')
//Desktop
document.write('<div class="navbar"> <navSelection><a href="/index.html"><image src="/subfolder/logos/circle.svg" id="lightModeLogo" height="40px"></a></navSelection>           <navSelection><a href="/index.html">Blog</a></navSelection>                      <navSelection><a href="/about.html">About</a></navSelection>                      <navSelection><a href="/shop.html">Shop</a></navSelection>                      <navSelection><a href="/minecraft.html">Minecraft Server</a></navSelection>           </div>')
function showMobileNav() {
    var mobileNavDisplay = document.getElementById("mobileNavDisplay");
    if (mobileNavDisplay.style.display === "block") {
        mobileNavDisplay.style.display = "none";
    } else {
        mobileNavDisplay.style.display = "block";
    }
  }

