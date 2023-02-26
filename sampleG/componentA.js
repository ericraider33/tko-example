let response = await fetch('componentA.html');
let template = await response.text();
console.log('loaded componentA template')

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
