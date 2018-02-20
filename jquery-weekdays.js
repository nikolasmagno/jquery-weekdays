$(function($){
    $.fn.weekdays = function(options){
        options = options ? options : {};
        options.days = options.days ? options.days : $.fn.weekdays.days;
        options.listClass = options.listClass ? options.listClass : 'weekdays-list';
        options.itemClass = options.itemClass ? options.itemClass : 'weekdays-day';
        options.itemSelectedClass = options.itemSelectedClass ? options.itemSelectedClass : 'weekday-selected';

        var html = $("<ul class="+options.listClass+">");

        $(this).data({ days: options.days});

        $($(this).data().days).each(function(index, item){
            var liElement = $("<li data-day="+index+" class="+options.itemClass+">"+item + "</li>");

            liElement.on('click',function(item){
                var li = $(item.target);
                var selected = !li.prop('selected')
                li.prop('selected', selected);
            li.toggleClass(options.itemSelectedClass);
            });

            html.append(liElement);
        });

        $(this).append(html); 	
    };

    $.fn.weekdays.days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    $.fn.selectedIndexes = function(){
        return $(this).find('li')
            .filter(function(a){ return a.selected; })
            .map(function(item){ return item["data-day"]; });
    };

    $.fn.selectedDays = function(){
        var $this = $(this);

        return $(this).find('li')
            .filter(function(a){ return a.selected; })
            .map(function(item){ 
                return $this.data().days[item["data-day"]]; 
            });
    }; 
});
