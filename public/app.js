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
            elem.disableRest = function(case_num){
                switch(case_num){
                    case "1":
                        this.filter(function(){
                            return $(this).val() == "1"
                        }).attr("disabled", "disabled");
                        break;
                    case "2":
                        this.filter(function(){
                            return $(this).val() == "2"
                        }).attr("disabled", "disabled");
                        break;
                    case "3":
                        this.filter(function(){
                            return $(this).val() == "3"
                        }).attr("disabled", "disabled");
                        break;
                };
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
