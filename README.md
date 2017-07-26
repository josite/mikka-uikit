# Mikka UI kit
User interface kit fore webdevelopers

## Changelog
1. 26 jule 2017 - create repository


### Class of containers
+ mk-container - 100% width for mobile and tablet, but 980px on laptop and 1200px on desktop
+ mk-container-full - everytime 100% width of screen
+ mk-container-hd - like as **mk-container**, but max-width is 1600px


### Class of columns
| class | description |
| ------ | ------ |
| -sm- | for small mobile __(<480px)__ |
| -m- | for mobile __(481px - 768px)__ |
| -t- | for tablet __(769px - 1024px)__ |
| -l- | for laptop __(1025px - 1280px)__ |
| -d- | for desktop __(> 1281px)__ |


### Structure

```html
<div class="mk-container">
	<div class="mk-row">
		<div class="col-sm-12 col-t-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, alias.</div>
		<div class="col-sm-12 col-t-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus amet sed id illo laboriosam! Beatae, repudiandae eligendi. Omnis, exercitationem delectus laudantium. Amet, modi odit quisquam eum tenetur perspiciatis sequi. Perspiciatis.</div>
	</div>
</div>
```