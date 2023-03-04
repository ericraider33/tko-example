console.log('Setting require');
window.require = require;

export async function require(path)
{
    if (!path.match('text!'))
        throw "Unsupported require path: " + path;

    path = path.replace('text!','');
    let response = await fetch(path);
    let template = await response.text();

    console.log('loaded '+path+ ' with result: ' + template);
    return template;
}
