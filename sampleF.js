console.log('Parsed sampleF');

import { ComponentA } from './sampleF/componentA.js';
import { ComponentB } from './sampleF/componentB.js';

console.log('Done with component.register ' + ComponentA.elementName + ComponentB.elementName);

for (let key in ko.components._allRegisteredComponents)
{
    let component = ko.components._allRegisteredComponents[key];
    let viewModel = component.viewModel;
    let response = await fetch(viewModel.templatePath);
    let actualTemplate = await response.text();
    component.template = actualTemplate;
    viewModel.tempalte = actualTemplate;

    console.log('Component='+ key);
    console.log(component);
}

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

