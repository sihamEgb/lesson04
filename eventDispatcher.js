// this code doesn't work !! - it can't identify the method register
function eventDispatcher(element, eventType) {
    var obj = {
        register: function (filterClass, fun) {
            var children = element.childList;
            for (var item in children) {
                if (typeof filterClass === "undefined") {
                    if (String(element.className).split(/\s/).indexOf(filterClass) >= 0)
                        item.addEventListener(eventType, fun, false);
                }
                else if (item.type === eventType) {
                    item.addEventListener(eventType, fun, false);
                }
            }
        }
    }
    return obj;
}

/*
function eventDispatcher(element, eventType) {

    return {
        register: function (filterClass, fun) {

            if (typeof filterClass === "undefined") {
                var children = element.childList;
                for (var i = 0; i < children.length; i++) {
                    var item = children[i];
                    if (item.type === eventType)
                        item.addEventListener(eventType, fun, false);
                }
            }
            if (typeof filterClass !== "undefined")
                if (element.classList.contains(filterClass))
                    element.addEventListener(eventType, fun, false);
            return this;
        }
    };
}
*/

