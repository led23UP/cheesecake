//put the HTML into a testing DOM and do a sanity check
 document.body.innerHTML = html;
 const $ = require('jquery');
 expect($('h1').html()).toBe("Cheesecake Order Form");