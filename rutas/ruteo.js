'use strict';

(function () {
  function init() {
    var router = new Router([
      new Route('cv-spanish', 'spanishCV.html', true),
      new Route('cv-english', 'englishCV.html')
    ]);
  }
  init();
}());