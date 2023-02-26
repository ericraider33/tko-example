let response = await fetch('componentB.html');
let template = await response.text();
console.log('loaded componentB template')

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

