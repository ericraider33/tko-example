let template = await require('text!componentA.html');
console.log('loaded componentA template')

import { require as _r } from './require.js';

export class ComponentA extends ko.Component
{
    constructor({x, y})
    {
        super();
        Object.assign(this, {x, y});

        console.log('Constructor component A');
    }

    static get elementName() 
    {
        return 'component-a';
    }

    static get template () { return template; }
    static set template (x) { template = x; }

    static get sync() 
    {
        return true;
    }

    koDescendantsComplete()
    {
        console.log('koDescendantsComplete: ComponentA');
    }
}

console.log('Registered component A');
ComponentA.register('component-a');
