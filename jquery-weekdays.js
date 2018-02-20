$(function($){
    $.fn.weekdays = function(options){
                        var _options = options ? options : {};
                        var _days = _options.days ? _options.days : $.fn.weekdays.days;
                        var _listClass = _options.listClass ? _options.listClass : 'weekdays-list';
                        var _itemClass = _options.itemClass ? _options.itemClass : 'weekdays-day';
                        var _itemSelectedClass = _options.itemSelectedClass ? _options.itemSelectedClass : 'weekday-selected';
                        var html = $("<ul class="+_listClass+">");

                        $(this).data({ days:_days});

                        $($(this).data().days).each(function(index, item){
                            var li = $("<li id="+index+" class="+_itemClass+">"+item + "</li>");

                            li.on('click',function(item){
                                var _li = $(item.target);
                                var _selected = !_li.prop('selected')
                                _li.prop('selected', _selected);
                                _li.toggleClass(_itemSelectedClass);
                            });

                            html.append(li);
                        });

                        $(this).append(html); 	
                    };

    $.fn.weekdays.days = ['Sun',"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
    $.fn.selectedIndexs = function(){
        var _list = $(this).find('li').filter(function(indice, a){ return a.selected; });
        return _list.map(function(index, item){ return item.id; });
    };
    $.fn.selectedDays = function(){
        var _list = $(this).find('li').filter(function(indice, a){ return a.selected; });
        var _this = $(this);

        return _list.map(function(index, item){ 
            return _this.data().days[item.id]; 
        });
    }; 
});
