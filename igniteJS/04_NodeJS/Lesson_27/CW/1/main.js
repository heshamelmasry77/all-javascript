'use strict'

// импорт значений из модуля sample_module
var module = require('./sample_module.js');


var x = 14,
    y = 5;

// импортируемые значения доступны в качестве свойств загруженного модуля 
module.sum(x, y);