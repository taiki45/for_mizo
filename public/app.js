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
            elem.disableRest = function(num){
                this.filter(function(index, elem){
                    return jQuery(elem).val() == num;
                }).attr("disabled", true);
                this.filter(function(index, elem){
                    return jQuery(elem).val() != num;
                }).attr("disabled", false);
            };
        });
        radios.forEach(function(elem){
            elem.change(function(){
                if(group_a.is(':checked')){
                    group_b.disableRest(group_a.pickChecked().val());
                    if(group_b.is(':checked')){
                        group_c.disableRest(group_b.pickChecked().val());
                    };
                };
            });
        });
    });
}());
