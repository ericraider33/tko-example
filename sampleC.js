let counter = 0;

class MyComponent extends ko.Component 
{
    /**
     * The ko.Component extends the LifeCycle
     */
    constructor ({x, y, message}) 
    {
        super()
        Object.assign(this, {x, y, message})
        this.z = this.computed('computeZ');
        this.message = ko.observable('NULL: ' + counter);
        
        console.log('Constructor: ' + counter++);
    }

    /**
     * Return the custom element name for this component
     */
    static get elementName () {
        return 'my-component' // In DOM as <my-component>
    }

    /**
     * Overload `static get template` to minic the Knockout
     * `template` parameter to view registration.
     */
    static get template () { return '<div>Eric Was Here:{{x}}*{{y}}={{z}}<br/>Component Loaded Event: {{message}}</div>' }

    /**
     * Return true when a component should be loaded
     * synchronously; false otherwise.
     */
    static get sync () {
        return true;
    }

    computeZ() 
    {
        return this.x * this.y
    }

    koDescendantsComplete()
    {
        this.message("Fuck yeah, component is bound and an async event is triggered " + counter);
        console.log('koDescendantsComplete: ' + counter++);
    }
}

MyComponent.register(/* custom-name */)

let node = document.querySelector("#page-root");
let viewModel = {
    loaded: ko.observable(false)
};

ko
    .applyBindings(viewModel, node)
    .then(() =>
    {
        node.style.display = "block";
        console.log('applyBindings promise: ' + counter++);
        viewModel.loaded(true);
    });
