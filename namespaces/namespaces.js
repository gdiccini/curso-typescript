"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function rectangle(base, height) {
            return base * height;
        }
        Area.rectangle = rectangle;
        function circunference(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunference = circunference;
        ;
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
console.log(Geometry.Area.circunference(5));
console.log(Geometry.Area.rectangle(5, 4));
