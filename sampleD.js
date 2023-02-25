console.log('Parsed sampleD');

import { ComponentA } from './sampleD/componentA.js';
import { ComponentB } from './sampleD/componentB.js';

ComponentA.register()
ComponentB.register()

console.log('Done with component.register');

let node = document.querySelector("#page-root");
let viewModel = {
    loaded: ko.observable(false)
};

ko
    .applyBindings(viewModel, node)
    .then(() =>
    {
        node.style.display = "block";
        console.log('applyBindings promise');
        viewModel.loaded(true);
    });

console.log('Done with applyBindings');

