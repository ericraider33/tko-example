﻿class MyComponent extends ko.Component 
{
    /**
     * The ko.Component extends the LifeCycle
     */
    constructor ({x, y, message}) {
        super()
        Object.assign(this, {x, y, message})
        this.z = this.computed('computeZ')
    }

    /**
     * Return the custom element name for this component
     */
    static get elementName () {
        return 'my-component' // In DOM as <my-component>
    }

    /**
     * Use `element` to return:
     *  1. a DOM node ID or a
     *  2. DOM node.
    static get element () {
        return 'ee-template'
    }
     */

    /**
     * Overload `static get template` to minic the Knockout
     * `template` parameter to view registration.
     */
    static get template () { return '<div>Eric Was Here:{{x}}*{{y}}={{z}}</div>' }

    /**
     * Return true when a component should be loaded
     * synchronously; false otherwise.
     */
    static get sync () {
        return true
    }

    computeZ() 
    {
        return this.x * this.y
    }
}

MyComponent.register(/* custom-name */)

ko.applyBindings({})