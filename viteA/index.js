let node = document.querySelector("#page-root");
let viewModel = {
    loaded: ko.observable(false),
    message: ko.observable('TKO Example')
};

ko
    .applyBindings(viewModel, node)
    .then(() =>
    {
        node.style.display = "block";
        console.log('applyBindings promise');

        viewModel.message('TKO done with setup')
        viewModel.loaded(true);
    });

console.log('Done with applyBindings');

