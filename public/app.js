(function(){
    jQuery(function(){
        var group_a = jQuery(':radio[name="a"]');
        var group_b = jQuery(':radio[name="b"]');
        var group_c = jQuery(':radio[name="c"]');
        var radios = [group_a, group_b, group_c];
        radios.forEach(function(elem){
            elem.pickChecked = function(){
                return this.filter(':checked');
            };
            elem.doDisable = function(value){
                this.filter(function(_, elem){
                    return jQuery(elem).val() == value;
                }).attr("disabled", true);
                this.filter(function(_, elem){
                    return jQuery(elem).val() != value;
                }).attr("disabled", false);
            };
        });
        radios.forEach(function(elem){
            elem.change(function(){
                if(group_a.is(':checked')){
                    group_b.doDisable(group_a.pickChecked().val());
                    if(group_b.is(':checked')){
                        group_c.doDisable(group_b.pickChecked().val());
                    };
                };
            });
        });
    });
}());
