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
