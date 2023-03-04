window.require = require;

export async function require(path)
{
    let response = await fetch(path);
    let template = await response.text();

    console.log('dev mode: loaded '+path);
    return template;
}
