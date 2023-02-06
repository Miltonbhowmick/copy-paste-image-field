<h1 align="center">COPY IMAGE - PASTE IMAGE </h1>
<p align="center">A mini tricks between <b>input field</b> and <b>img tag</b> in html to show an image.</p>

### How it works
<img src="images/demo.gif" align="center">


### Which logic helps
I have taken `event.clipboardData` or `event.originalEvent.clipboardData`. Then, i just check which kind of data items having. If the item is `file` type of all items, blob value has been stored inside a `img` tag of html file. Then copy image and paste image and BOOM!!!. 


