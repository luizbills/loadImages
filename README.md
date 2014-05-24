loadImages
==========
simple JS image loader function.

###Usage

```js
var map = {
  // uniqueKey: ImageUrl
  'ball': 'images/ball.png',
  'paddle': 'images/paddle.png',
  'background': 'images/background.png'
};

loadImages(map, function(loadedImages) {
  /*
  loadedImages = {
    'ball': ImageElement,
    'paddle': ImageElement,
    'background': ImageElement
  }
  */

  // save the loaded images
  window.images = loadedImages;

  // render a loaded image
  document.body.appendChild( images['background'] );

});


```
