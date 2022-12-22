module.exports = {
    // WARNING
    // We expand props into the SVG to enable things like click handler passing.
    // We set it to 'start' so our own className handling overrides the built in
    // one despite being set on the element as well.
    expandProps: 'start',
    template: require('@leverage-js/ui/svg-template'),
}
