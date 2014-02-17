function loadImages(map, onload) {
  "use strict";

  var i,
    img, readyCallback, errorCallback,
    loaded, total,
    loadedImages = {};

  loaded = total = 0;

  for(i in map) {
    total++;
  }

  readyCallback = function() {
    loadedImages[this.title] = this;
    loaded++;
    if (loaded == total) {
      onload(loadedImages);
    }
  };

  errorCallback = function() {
    total--;
    if (loaded == total) {
      onload(loadedImages);
    }
  };

  for(i in map) {
    img = new Image();

    img.title = i;
    img.onload = readyCallback;
    img.onerror = img.onabort = errorCallback;

    img.src = map[i];
  }
}

window.loadImages = loadImages;

