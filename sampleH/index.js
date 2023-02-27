console.log('Parsed sampleF');

import { ComponentA } from './componentA.js';
import { ComponentB } from './componentB.js';

console.log('Done with component.register ' + ComponentA.elementName + ComponentB.elementName);

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

