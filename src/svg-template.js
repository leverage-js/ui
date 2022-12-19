const template = ({
    componentName,
    imports,
    interfaces,
    jsx,
}, {tpl}) => {
    // The component name will look like SvgFileName where FileName is the name
    // before .svg
    const parts = componentName.split(/(?=[A-Z])/);

    // Remove the first part Svg
    parts.shift();

    // The default name has Svg at the start but we want to ignore that
    const name = parts.join('');

    // we want our class names to use kebab case so no upper case for you
    const lower = parts.map(part => part.toLowerCase());

    // We treat the final entry in the array as the type for class
    // Eg FileIcon gets class "icon" and class "file-icon"
    const type = lower[lower.length - 1];
    const full = lower.join('-');

    // Insert the class names into the JSX tree
    jsx.openingElement.attributes.push({
        type: 'JSXAttribute',
        name: {
            type: 'JSXIdentifier',
            name: 'className',
        },
        value: {
            type: 'JSXExpressionContainer',
            expression: {
                type: 'Identifier',
                name: 'className',
            },
        }
    });

    // WARNING: The following template is BRITTLE.  Attempting to condense it
    // down breaks the parser for unknown reasons.

    // expandProps is set to 'start' in .svgrrc.js.  This will apply all props
    // including className to the element but then our own className overrides
    // that.  If expandProps is changed, this will break.

    return tpl`
${imports};

${interfaces};

function ${name}(props) {
    const type = '${type}';
    const full = '${full}';
    const classes = type + ' ' + full + ' ';
    const className = classes + (props.className || '');
    return ${jsx};
}
 
export default ${name};
`
}

module.exports = template;
