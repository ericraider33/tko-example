let template = await require('./componentB.html');
console.log('loaded componentB template')

import { require as _r } from './require.js';

export class ComponentB extends ko.Component
{
    constructor({x, y})
    {
        super();
        Object.assign(this, {x, y});

        console.log('Parsed component B');
    }

    static get elementName()
    {
        return 'component-b';
    }

    static get template () { return template; }
    static set template (x) { template = x; }

    static get sync()
    {
        return true;
    }

    koDescendantsComplete()
    {
        console.log('koDescendantsComplete: ComponentB');
    }
}

console.log('Registered component B');
ComponentB.register('component-b');

