// ----------------------------------------
// ---------- MY FOOTABLE PLUGIN ----------
// ----------------------------------------
/*
 * Description: what does your footable plugin do?
 */

(function ($, w, undefined) {
    
    if (w.footable === undefined || w.footable === null) {
        throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');
    }    

    // Plugin options here, example:
    var defaults = {
        footablePlugin: true
    };
    // This would allow you to access this option using ft.options.footablePlugin.enabled

    function footablePlugin() {
        var p = this;
        p.name = 'My Footable Plugin';
        p.init = function(ft) {
            
            if (ft.options.footablePlugin === true) {

                $(ft.table).bind({
            
                    // Bind to relevant events here to modify/add functionality to Footable, example:
                    'footable_initialized': function(e){
                        alert('Hello World from ' + p.name);
                    }
                    // This would listen for the 'footable_initialized' event and when called check if the plugin is enabled and if it is alert 'Hello World' to the user.
            
                });

            }

        };
    }
  
    w.footable.plugins.register(footablePlugin, defaults);
  
})(jQuery, window);