// This `view` becomes `$root` in the context (see below)
const view = {
    style: 'background-color: white;',
    observable: ko.observable(''),
    text: 'Text is a constant.'
};

// Add arbitrary values to the view
view.computed = ko.computed(() => view.observable().toUpperCase());

let node = document.querySelector("#page-root");

// Apply the bindings
ko.applyBindings(view, node);
