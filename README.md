# cardSlider

##CSS
###Pattern:
*Using [SuitCSS](https://suitcss.github.io/)
*Not [BEM](https://css-tricks.com/bem-101/) yet anyway.

###Handle Type Scaling:
```css
.Tile         { font-size: 1rem; }   //use rems for global
.Tile-title   { font-size: 0.8em; }  //use ems for local

//Modifiers...
.Tile--small  { font-size: 0.625rem; }
.Tile--large  { font-size: 1.3rem; }
```
```html
<div class="Tile">
    <p class="tile__title">Text</p>
</div>
```

##Fonts
[Overpass](https://fonts.google.com/specimen/Overpass?selection.family=Overpass:200,300,400,800)
200 | 300 | 400 | 800

##Local
192.168.0.25/cardSlider/source/

##JS
[TypeScript Gulp Build System](https://www.typescriptlang.org/docs/handbook/gulp.html)

##To Do:
* Add carousel functionality