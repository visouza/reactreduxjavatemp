System.register(["angular2/platform/browser", "./customer.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, customer_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (customer_component_1_1) {
                customer_component_1 = customer_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(customer_component_1.Customer);
        }
    }
});
//# sourceMappingURL=customer_main.js.map