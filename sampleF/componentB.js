let template = '<div>STUB</div>';

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

    static get templatePath() { return '/sampleF/componentB.html'; }
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

