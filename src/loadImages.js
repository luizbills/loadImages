function loadImages(map, onload) {
  "use strict";

  var i,
    img, readyCallback, errorCallback,
    loaded, total = 0,
    loadedImages = {};

  loaded = 0;

  for(i in map) {
    total++;
  }

  readyCallback = function() {
    loadedImages[this.title] = this;
    loaded++;
    if (loaded == total) {
      onload();
    }
  };

  errorCallback = function() {
    total--;
    if (loaded == total) {
      onload();
    }
  };

  for(i in map) {
    img = new Image();

    img.title = i;
    img.onload = readyCallback;
    img.onerror = img.onabort = errorCallback;

    img.src = map[i];
  }

  return loadedImages;
}
