(function(){
    jQuery(function(){
        var group_a = jQuery(':radio[name="one"]');
        var group_b = jQuery(':radio[name="two"]');
        var group_c = jQuery(':radio[name="three"]');
        var radios = [group_a, group_b, group_c];
        radios.forEach(function(elem){
            elem.pickChecked = function(){
                return this.filter(':checked');
            };
            elem.disableRest = function(case_num){
                switch(case_num){
                    case '1':
                        $(this).filter(function(){
                            this.val() == '1'
                        }).attr("disabled", "disabled");
                        break;
                    case '2':
                        $(this).filter(function(){
                            this.val() == '2'
                        }).attr("disabled", "disabled");
                        break;
                    case '3':
                        $(this).filter(function(){
                            this.val() == '3'
                        }).attr("disabled", "disabled");
                        break;
                };
            };
        });
        $(radios).change(function(){
            if(group_a.is(':checked')){
                group_b.disableRest(group_a.pickChecked());
                if(group_b.is(':checked')){
                    group_c.disableRest(group_b.pickChecked());
                };
            };
        });
    });
}());
