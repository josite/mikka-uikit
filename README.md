# Mikka UI kit
User interface kit for webdevelopers

## Changelog
1. 26 jule 2017 - create repository
1. 27 jule 2017 - add grid files (css)


### Class of containers
+ mk-container - 100% width for mobile and tablet, but 980px on laptop and 1200px on desktop
+ mk-container-full - everytime 100% width of screen
+ mk-container-hd - like as **mk-container**, but max-width is 1600px


### Class of columns
| class | description |
| ------ | ------ |
| -sm- | for small mobile **(<480px)** _(A mandatory class for specifying the width of a block regardless of the screen resolution)_ |
| -m- | for mobile **(481px - 768px)** |
| -t- | for tablet **(769px - 1024px)** |
| -l- | for laptop **(1025px - 1280px)** |
| -d- | for desktop **(> 1281px)** |


### Structure

```html
<div class="mk-container">
	<div class="mk-row">
		<div class="col-sm-12 col-t-4">
			Some text!
		</div>
		<div class="col-sm-12 col-t-8">
			Some text. Some text. Some text. Some text. Some text!
		</div>
	</div>
</div>
```