#####Pseudo classes

```css
a:link
a:hover
a:visited
div:first-child
div:nth-child()
div:first-of-type
div:empty
```

```html
<ul type="none"></ul>
```

Root element: `document.documentElement`

##### Tranverse the DOM

```js
node.parentNode
node.childNodes
node.firstChild
node.lastChild
node.previousSibling
node.nextSibling
```

##### Node insert / delete

```js
parent.insertBefore(li, old)
parent.appendChild(li)
parent.removeChild(li)
li.textContent = 'Snak' // add text node
```

##### Combinators: CSS selectors that use > 1 selectors

Descendant `li b `, Child `li > b`, Sibling `li ~ b`, Adjacent `li + b`

##### Timeout

```
setTimeout
clearTimeout
```

##### jQuery

```js
$('.something')
    .attr(name, value)
	.html()
	.text()
	.fadeIn()
	.fadeOut()
	.fadeToggle()
	.slideDown()
	.slideUp()
	.slideToggle()
```

##### Images

Bitmaps:

- GIF – old format for images with <=256 colours
- JPEG – best for images of ‘natural’ things (such as photographs of people, places)

- PNG – high compression file format which does not change the pixels; this is the main web format for bitmap images

Vector:

- Flash - has become obsolete now
- Canvas - This is a bitmap system, which has some vector graphics commands
- SVG - This is a markup language for vector graphics

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" 
width="400" height="300">
</svg>
```

###### styles

```html
<svg
    stroke="black"
    fill="grey"
    stroke-width="5"
    text-anchor="middle"
    stroke-dasharray="10,5" <!-- dash lengths -->
	stroke-linejoin="miter" <!-- or round / bevel	 -->
/>
```

###### bitmap

```html
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink">
<image xlink:href="hong_kong.jpg" 
x="10" y="10" width="300" height="300"/>
</svg>
```

###### group

```html
<g id="my_group_name">
<circle cx="100" cy="120" r="30"
style="fill:red"/>
```

###### path

```html
<path d="M100,25 L200,25 L250,125 L50,125 Z" style="fill:pink;stroke:black"/>
```

###### definitions

```html
<defs>
    <linearGradient id="my_gradient">
        <stop offset="0" stop-color="white"/> 
        <stop offset="1" stop-color="black"/>
    </linearGradient>
</defs>
<... fill="url(#my_gradient)" .../>
```

###### gradients

```html
<linearGradient x1="0%" y1="0%" x2="100%" y2="100%"></linearGradient>
<!-- fx, fy: starting point -->
<!-- cx, cy, cr: target circular area -->
<radialGradient fx="60%" fy="60%"
cx="20%" cy="30%" r="80%" ></radialGradient>
```

#### Animate

##### jQuery

```js
$("rect").animate({ x: 450 }, 2000, 'swing'); // 'swing' or 'linear'
```

##### SVG

```html
<rect x="50" y="50" width="100" height="100"
stroke="black" stroke-width="5" fill="white">
    <animate attributeName="x"
    from="50" to="450" dur="2s"
    values="50;450" // same as from and to
    repeatCount="2" // can be "indefinites"
    fill="freeze"/>
</rect>
```

##### CSS

```css
// animation
@keyframes move-rect {
    from { transform: translateX(0px); }
    to   { transform: translateX(400px); }
}
rect {
	animation: move-rect 2s;
    animation-timing-function: ''; /* ease type: linear, ease-in, ease-out, ease-in-out, ease */
    animation-iteration-count: 10; /* can be 'infinite' */
    animation-fill-mode: ; /* ending value */
}

// transform
@keyframes transform-animation {
    0%   {
    	transform: translate(0px, 0px)
    	rotate(0deg);
    }
    50%  {
    	transform: translate(100px, 100px)
    	rotate(720deg)
        scale(0.7, 0.8);
    }
    100% {
    	transform: translate(200px, 200px)
    	rotate(0deg);
    }
}

// transitions
div#red { transition: width 2s 1s, transform 1s; } // 2s duration, 1s delay, then transform transition
#red {transition-delay: 1s}
```

Events: `animationstart`, `animationend`, `transitionrun`, `transitionstart`, `transitionend`

`transitionrun` is before the delay

##### Closure

```js
function greeting(name) {
    return function () {
    console.log("Hi, " +
    	name + "!");
    };
}
```

used for private data, function factory, extensible module

##### Responsive

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no">">
<link rel="stylesheet" href="smallscreen.css" 
media="screen and (max-width: 400px)">
```

```css
@media screen and (max-width: 800px) {
	body { font-size: 14px; }
}
```

fonts:

- em: font size of parent element
- rem: font size of root document `html {font-size: 14px}`

image:

```html
<picture>
    <source media="(max-width: 400px)" 
    srcset="gibson_300w.jpg">
    <source media="(max-width: 600px)" 
    srcset="gibson_500w.jpg">
    <source media="(max-width: 800px)" 
    srcset="gibson_750w.jpg">
    <img src="gibson.jpg" alt="Gibson">
</picture>
```

float: occupy a very tight space of its own and not interfere with how other elements are laid out on the page

###### Flexbox

```css
.container {
	display: flex;
	flex-wrap: wrap; // to make elements go to next row
    flex-grow: 2
    flex-shrink: 1;
}
```

`flex: 2` is same as `flex-grow: 2; flex-shrink: 1; flex-basis: auto`

##### Bootstrap

| .col-xs-$ | Extra Small    | Phones Less than 768px       |
| --------- | -------------- | ---------------------------- |
| .col-sm-$ | Small Devices  | Tablets 768px and Up         |
| .col-md-$ | Medium Devices | Desktops 992px and Up        |
| .col-lg-$ | Large Devices  | Large Desktops 1200px and Up |

visibility: `d-sm-none`, `d-xl-block`

#### PHP

`php -S localhost:8080`

`phpinfo()`

`strlen()`

`<?= ?>`

`foreach ($many as $single) {}`

`header("Location: 06_hello_example.php");`: redirects to different page

######Associative array

`$lang=["zh" => "Chinese", "en" => "English"]`

`foreach($lang as $code => $name){echo "{$code} > {$name}"}`

###### Access global in PHP

```php
$msg1 = "sdf";
function ab () {
    global $msg1;
}
```

```html
<form method="get" action="target.php">
    <input type="text" name="lastname" placeholder="enter something">
    <input type="checkbox" required autofocus>
    <input type="radio" checked>
    <select name="role">
        <optgroup label="Student">
        	<option>Year 1</option>
        </optgroup>
    </select>
    <textarea name="message" cols="80" rows="25">A content</textarea>
    <input type="hidden" name="from"
value="http://www.ust.hk">
    <input type="submit">
</form>
```

other types: email, url, number, range, date, time, color

###### Handle form

```php
$_GET["lastname"];
$_SERVER["QUERY_STRING"];
```

#### XML

```xml
<?xml version="1.0"?>
<?xml-stylesheet href="03_xml_with_styles.css"?>
```

it is case-sensitive

#### AJAX

##### XML

######Vanilla

```js
var request = new XMLHttpRequest()
request.onreadystatechange = function() {
	if (request.readyState == 4 && 
		request.status == 200) {
        documnt.getElementById ('abc').innerHTML = request.	responseXML.getElementsByTagName("pokemon")[0].
textConten
    }
}
request.open("GET", "01_basic_ajax.php", true)
request.send(null)
```

###### jQuery

```js
$.load()
$.get('01_basic_ajax.php', data => {
    $('#pokemon').html(
        $(data).find("pokemon").eq(0).text()
    )
})
$.post()
```

###### PHP

```php
header("Content-Type: text/xml");
echo "<?xml version=\"1.0\"?>\n";
<pokemon>
	<?= $pokemon[array_rand($pokemon)] ?>
</pokemon>
```

##### JSON

###### jQuery

```js
$.getJSON("03_using_json.php", function(data) {
	$("#pokemon").html(data.pokemon);
})

$.post('script.php', {abc: 'abdf'}, data => {console.log(data.pokemon)}, 'json')
```

###### PHP

```php
header("Content-Type: application/json");
$output["pokemon"] = $pokemon[array_rand($pokemon)];
echo json_encode($output);
```

#### Cookie

```js
document.cookie = 'name=PAUL expires=Wed, 01 Jan 2020 00:00:00 GMT'
document.cookie = 'year=2' // name=PAUL; year=2
```

##### PHP

```php
setcookie("monster", "Somecookie");
$_COOKIE["monster"];
```

#### Session

```php
session_start();
echo(session_id());
$_SESSION["message"] = "secrect session";
isset($_GET["name"]); // check if exist
unset($_SESSION["message"]);
session_unset(); // unset all variables
session_destroy(); // delete session
```

#### File upload

```html
<form enctype="multipart/form-data"  
method="post" action="target.php"> 
    <input type="file" name="datafile">
</form>
```

###### PHP

```php
$_FILES["datafile"];
$_FILES["datafile"]["name"]; // "size" "type"
move_uploaded_file(
    $_FILES["datafile"]["tmp_name"],
    "uploads/".$_FILES["datafile
    "]["name"] 
);
```

return file

```php
header("Content-Type: image/gif");
readfile("pixel.gif");
```



#### ReCAPTCHA

```html
<div class="g-recaptcha" data-sitekey="...your site key..."></div>
```

```php
$_POST["g-recaptcha-response"];

$response = $_POST["g-recaptcha-response"];
$secret = "...the secret key...";
$url = "...the Google verification URL...";
$verify = file_get_contents($url."?secret=".$secret."&response=".$response);
$result = json_decode($verify);
if(!$result->success){}
```

#### Canvas

```html
<canvas id="ab" width="600" height="400"></canvas>
<script>
    document.getElementById('ab').getContext('2d')
    $('#ab').get(0).getContext('webgl')
</script>
```

coordinates start from top left corner

```js
context.fillStyle = 'red' // fill color
context.font = "bold 20px Arial";
context.linewidth = 3
context.fillRect(x, y, width, height) // or strokeRect for hollow

context.moveTo() // lineTo for actual path
context.arc(x, y, startAngle, endAngle)
context.fillText(text, x, y) // strokeText
context.measureText(text)

context.drawImage(imageEl, x, y)
context.drawImage(
    image,
    x in source image, 
    y in source image,
    width in source image, 
    height in source image,
    x in canvas, 
    y in canvas,
    width in canvas, 
    height in canvas
);

//another way to make the image el
var image = new Image();
e.onload = function() {
context.drawImage(image, 50, 50);
}
image.src = "pineapple.png";

context.isPointInPath(20,50)
```

###### Path

```js
context.beginPath()

context.arc(300, 100, 40, 10, 2*Math.PI)
context.moveTo(300, 150); context.lineTo(300, 250)
context.stroke() //actually draw the path, fill() for filling whole thing
```

###### click event

```js
var offset = $("canvas").eq(0).offset();
var x = event.pageX - offset.left;
var y = event.pageY - offset.top
```

animation

```js
window.requestAnimationFrame(doFrame)

var last = performance.now();

var spriteInfo = {
	x: 2, y: 418, width: 96, height: 100,
	index: 0, count: 10
}

function doFrame (now) {
    // 1000ms to 60fps
    var timing = 1000 / $("#fps").val();
    
    if (now - last >= timing) {
        // 1. Clear previous sprite from canvas
        context.clearRect(
            300 - spriteInfo.width / 2,
            200 - spriteInfo.height / 2,
            spriteInfo.width, spriteInfo.height
        )

        // 2. Current sprite
        var sx = spriteInfo.x +
        spriteInfo.index * spriteInfo.width;
        var sy = spriteInfo.y;
        /* Draw the sprite */
        context.drawImage(
            image,
            sx, sy, spriteInfo.width, spriteInfo.height,
            300 - spriteInfo.width / 2,
            200 - spriteInfo.height / 2,
            spriteInfo.width, spriteInfo.height,
        );

        /* 3. Move on to next sprite */
        spriteInfo.index++;
        if (spriteInfo.index >= spriteInfo.count)
        spriteInfo.index = 0;

        last = performance.now()
    }
     
    window.requestAnimationFrame(doFrame)
}
```

#### Angular

```html
<html ng-app ng-init="name='COMP4021'">
<head>
	<title>A Simple AngularJS Example</title>
	<script src=".../angular.min.js"></script>
</head>
<body>
	<h1>Hello, {{name}}!</h1>
    <div ng-bind="name"></div>
    <input ng-model="name">
    <script>
        angular.module('myApp', [])
            .run($rootScope => {
            	$rootScope.name = 'COMP4021'
        	})
        
        $http.post('abc.php', {name: 'sdf'})
        	.then(res => console.log(res.data.user))
        	.catch(res => console.error(res.data.error))
    </script>
</body>
</html>
```

###### controller

```html
<div ng-controller="courseController">
    <h2 ng-if="search">{{ code }}: {{ title }}</h2>
    <button ng-click="show(	)">search</button>
    <input ng-show="!hidden" ng-model="search">
    <ul>
        <li ng-repeat="student in students | orderBy: 'firstname' | filter: search | limitTo:limit:begin">
            {{ student.firstname | lowercase }}
            {{ student.lastname }}
        </li>
    </ul>
</div>
<script>
    angular.module("myApp", [])
        .controller("courseController",
        	function($scope) {
                $scope.code = "COMP4021";
                $scope.title = "Internet Computing";
        		$scope.students = []
            });
</script>
```

#### RESTful

Client and server,  Multiple representations,  Stateless,  Cacheable,  Uniform interface

`Accept: application/json, text/plain`

`Cache-Control: no-cache`

Safe and Idempotent: some methods do not change the resources s.t. can be used multiply times and cached. some methods provide same output when run many times s.t. can be safely resent when something fail

###### PHP

```php
$_SERVER["REQUEST_METHOD"];
$_SERVER["PATH_INFO"]; // /books/12
$params = explode('/', trim($_SERVER['PATH_INFO'],'/'));

// POST / PUT
$data = file_get_contents('php://input');
$json = json_decode($data);
```

