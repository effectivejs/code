if (typeof Object.create === "undefined") {
    Object.create = function(prototype) {
        function C() { }
        C.prototype = prototype;
        return new C();
    }
}
