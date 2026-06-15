function delay() {
  setTimeout(function() {
      // Hide free ads
	    document.getElementById('two').getElementsByTagName('a')[document.getElementById('two').getElementsByTagName('a').length-1].style.display = 'none';;
  }, 400);
}

if (document.readyState == 'complete') {
  delay();
} else {
  document.onreadystatechange = function () {
      if (document.readyState === "complete") {
          delay();
      }
  }
}