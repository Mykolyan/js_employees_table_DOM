function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var t,n=document.querySelector("table"),r=document.querySelector("thead"),a=n.querySelector("tbody"),o=function(t){if(Array.isArray(t))return e(t)}(t=n.querySelectorAll("tbody tr"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=r.querySelectorAll("th"),i=!0,l=null;c[0].addEventListener("click",function(){0!==l&&(i=!0,l=0);var e=o.sort(function(e,t){var n=e.querySelector("td:nth-child(1)").textContent.trim(),r=t.querySelector("td:nth-child(1)").textContent.trim();return i?n.localeCompare(r):r.localeCompare(n)});a.innerHTML="",e.forEach(function(e){return a.appendChild(e)}),i=!i}),c[1].addEventListener("click",function(){1!==l&&(i=!0,l=1);var e=o.sort(function(e,t){var n=e.querySelector("td:nth-child(2)").textContent.trim(),r=t.querySelector("td:nth-child(2)").textContent.trim();return i?n.localeCompare(r):r.localeCompare(n)});a.innerHTML="",e.forEach(function(e){return a.appendChild(e)}),i=!i}),c[2].addEventListener("click",function(){2!==l&&(i=!0,l=2);var e=o.sort(function(e,t){var n=e.querySelector("td:nth-child(3)").textContent.trim(),r=t.querySelector("td:nth-child(3)").textContent.trim();return i?n.localeCompare(r):r.localeCompare(n)});a.innerHTML="",e.forEach(function(e){return a.appendChild(e)}),i=!i}),c[3].addEventListener("click",function(){3!==l&&(i=!0,l=3);var e=o.sort(function(e,t){var n=parseInt(e.querySelector("td:nth-child(4)").textContent.trim(),10),r=parseInt(t.querySelector("td:nth-child(4)").textContent.trim(),10);return i?n-r:r-n});a.innerHTML="",e.forEach(function(e){return a.appendChild(e)}),i=!i}),c[4].addEventListener("click",function(){4!==l&&(i=!0,l=4);var e=o.sort(function(e,t){var n=parseInt(e.querySelector("td:nth-child(5)").textContent.trim().replace(/[$,]/g,""),10),r=parseInt(t.querySelector("td:nth-child(5)").textContent.trim().replace(/[$,]/g,""),10);return i?n-r:r-n});a.innerHTML="",e.forEach(function(e){return a.appendChild(e)}),i=!i}),o.forEach(function(e){e.addEventListener("click",function(){o.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})});var d=document.createElement("form");d.classList.add("new-employee-form"),[{label:"Name:",name:"name",type:"text",qa:"name"},{label:"Position:",name:"position",type:"text",qa:"position"},{label:"Age:",name:"age",type:"number",qa:"age"},{label:"Salary:",name:"salary",type:"number",qa:"salary"}].forEach(function(e){var t=document.createElement("label");t.textContent=e.label;var n=document.createElement("input");n.name=e.name,n.type=e.type,n.setAttribute("data-qa",e.qa),t.appendChild(n),d.appendChild(t),d.appendChild(document.createElement("br"))});var u=document.createElement("label");u.textContent="Office:";var m=document.createElement("select");m.name="office",m.setAttribute("data-qa","office"),["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,m.appendChild(t)}),u.appendChild(m),d.appendChild(u),d.appendChild(document.createElement("br")),document.body.appendChild(d);var p=document.createElement("button");function s(e,t){var n=document.createElement("div");n.classList.add("notification",t),n.setAttribute("data-qa","notification");var r=document.createElement("h3"),a=document.createElement("p");r.textContent="error"===t?"Error!":"Success!",a.textContent=e,n.appendChild(r),n.appendChild(a),document.body.appendChild(n),setTimeout(function(){n.remove()},5e3)}p.type="submit",p.textContent="Save to table",d.appendChild(p),d.addEventListener("submit",function(e){e.preventDefault();var t=d.querySelector('input[name="name"]').value.trim(),n=d.querySelector('input[name="position"]').value.trim(),r=parseInt(d.querySelector('input[name="age"]').value.trim(),10),c=parseInt(d.querySelector('input[name="salary"]').value.trim().replace(/[$,]/g,""),10),i=d.querySelector('select[name="office"]').value;if(!t||!n||!i||isNaN(r)||isNaN(c)){s("All fields are required.","error");return}if(t.length<4){s("Name must be at least 4 characters long.","error");return}if(r<18||r>90){s("Age must be between 18 and 90.","error");return}var l=document.createElement("tr");l.innerHTML="\n  <td>".concat(t,"</td>\n  <td>").concat(n,"</td>\n  <td>").concat(i,"</td>\n  <td>").concat(r,"</td>\n  <td>$").concat(c.toLocaleString(),"</td>\n  "),a.appendChild(l),o.push(l),d.reset(),s("Employee added successfully!","success")});
//# sourceMappingURL=index.89662b96.js.map
