# Class Cycle

Small Javascript library I made for a friend. I lack the chutzpah to put what it does into words so it's probably best that I start with an example...

## Example

HTML showing the following...

```HTML
	<div data-cycle-list="red blue green">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
```

becomes... 

```HTML
	<div data-cycle-list="red blue green">
		<div class="red"></div>
		<div class="blue"></div>
		<div class="green"></div>
		<div class="red"></div>
		<div class="blue"></div>
		<div class="green"></div>
		<div class="red"></div>
	</div>
```

...once Class Cycle is called. Better still...

```HTML
	<ul data-cycle-desktop="d1-d3 d4-d5 d6-d9 d10-d12" data-cycle-tablet="t1-t2 t3-t4 t5-t6 t7-t8" data-cycle-mobile="m1-m3 m4-m6">
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item</li>
		<li>Item <a href="#"><link rel="stylesheet" href="">look, it doesn't freak out over child elements</a></li>
	</ul>
```

becomes...

```HTML
<ul data-cycle-desktop="d1-d3 d4-d5 d6-d9 d10-d12" data-cycle-tablet="t1-t2 t3-t4 t5-t6 t7-t8" data-cycle-mobile="m1-m3 m4-m6">
		<li class=" d1-d3 t1-t2 m1-m3">Item</li>
		<li class=" d4-d5 t3-t4 m4-m6">Item</li>
		<li class=" d6-d9 t5-t6 m1-m3">Item</li>
		<li class=" d10-d12 t7-t8 m4-m6">Item</li>
		<li class=" d1-d3 t1-t2 m1-m3">Item</li>
		<li class=" d4-d5 t3-t4 m4-m6">Item</li>
		<li class=" d6-d9 t5-t6 m1-m3">Item</li>
		<li class=" d10-d12 t7-t8 m4-m6">Item</li>
		<li class=" d1-d3 t1-t2 m1-m3">Item</li>
		<li class=" d4-d5 t3-t4 m4-m6">Item</li>
		<li class=" d6-d9 t5-t6 m1-m3">Item</li>
		<li class=" d10-d12 t7-t8 m4-m6">Item <a href="#"><link rel="stylesheet" href="">look, it doesn't freak out over child elements</a></li>
	</ul>
```

Essentially you give a parent diva list of classes to loop through and it will go through the first, second, third etc. class appending it as a class to the first, second, third etc.top-level, child element of the parent node. There are probably a number of analagous tools in different languages but the one that comes to mind for me is [cycle] in Liquid

This can be particularly useful when using layout tools like [gridset] or bootstrap's [grid system] *especially* when you're not sure how many elements your server is going to throw up.

## Plans for the Future
* Pass muster with [Crockford].
* Clean up spaces at the start of added classes. 
* Add a check to processCycle so that it only adds the class if it doesn't already exist.
* Set up with grunt to auto-refresh and minify javascript.
* Get married.
* Buy a house.

## License

Class Cycle is released under the [MIT License].


[cycle]: "http://docs.shopify.com/themes/liquid-basics/logic#cycle
[gridset]: https://gridsetapp.com/
[grid system]: http://getbootstrap.com/css/#grid
[Crockford]: http://www.jslint.com/lint.html
[MIT License]:(http://www.opensource.org/licenses/MIT)