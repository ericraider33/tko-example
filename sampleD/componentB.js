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

    static get template () { return '<div>ComponentB x={{x}} y={{y}}</div>'; }

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
ComponentB.register();

