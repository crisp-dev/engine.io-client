export default (() => {
    if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();
