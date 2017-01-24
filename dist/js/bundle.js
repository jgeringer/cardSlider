(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const myquery_1 = require("./myquery");
console.log(myquery_1.sayHello("TypeScript!"));
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = myquery_1.sayHello(name);
}
showHello("greeting", "TypeScript LAND!");
var card = document.querySelector('.Card');
card.addEventListener('click', function () {
    console.log('clicked');
    var el = this;
    //toggling (especially for ie9+)
    if (el.classList) {
        el.classList.toggle('is-active');
    }
    else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('is-active');
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        }
        else {
            classes.push('is-active');
        }
        el.className = classes.join(' ');
    }
});

},{"./myquery":2}],2:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return `Hello from ${name}`;
}
exports.sayHello = sayHello;
// if (el.classList) {
//         el.classList.toggle('is-active');
//     } else {
//         var classes = el.className.split(' ');
//         var existingIndex = classes.indexOf('is-active');
//         if (existingIndex >= 0) {
//             classes.splice(existingIndex, 1);
//         }
//         else {
//             classes.push('is-active');
//         }
//         el.className = classes.join(' ');
//     } 

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi50cyIsInNyYy9qcy9teXF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLHVDQUFxQztBQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUVyQyxtQkFBbUIsT0FBZSxFQUFFLElBQVk7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQU0xQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFZCxnQ0FBZ0M7SUFDaEMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7Ozs7QUNuQ0gsa0JBQXlCLElBQVk7SUFDakMsTUFBTSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUZELDRCQUVDO0FBR0Qsc0JBQXNCO0FBQ3RCLDRDQUE0QztBQUM1QyxlQUFlO0FBQ2YsaURBQWlEO0FBQ2pELDREQUE0RDtBQUM1RCxvQ0FBb0M7QUFDcEMsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWixpQkFBaUI7QUFDakIseUNBQXlDO0FBQ3pDLFlBQVk7QUFDWiw0Q0FBNEM7QUFDNUMsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL215cXVlcnlcIjtcblxuY29uc29sZS5sb2coc2F5SGVsbG8oXCJUeXBlU2NyaXB0IVwiKSk7XG5cbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXZOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZyl7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XG4gICAgZWx0LmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xufVxuXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHQgTEFORCFcIik7XG5cblxuXG5cblxudmFyIGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ2FyZCcpO1xuXG5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIHZhciBlbCA9IHRoaXM7XG5cbiAgICAvL3RvZ2dsaW5nIChlc3BlY2lhbGx5IGZvciBpZTkrKVxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBjbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShleGlzdGluZ0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxufSk7IiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YDtcbn1cblxuXG4vLyBpZiAoZWwuY2xhc3NMaXN0KSB7XG4vLyAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4vLyAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gY2xhc3Nlcy5pbmRleE9mKCdpcy1hY3RpdmUnKTtcbi8vICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMCkge1xuLy8gICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xuLy8gICAgIH0iXX0=
