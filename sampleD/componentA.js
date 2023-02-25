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

    static get template () { return '<div>ComponentA x={{x}} y={{y}}</div>'; }

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
ComponentA.register();
