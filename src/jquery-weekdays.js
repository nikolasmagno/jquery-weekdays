/*Created By Nikolas Magno - https://github.com/nikolasmagno/jquery-weekdays*/
$(function($){
    $.fn.weekdays = function(options){
        options = consolideOptions(options);

        var $this =  $(this);
        var $html = $("<ul class="+options.listClass+">");

        $this.data({
            days: options.days
        });

        $($this.data().days).each(function(index, item){
            var $liElement = $("<li data-day="+index+" class="+options.itemClass+">"+item + "</li>");

            $liElement.on('click',function(item){
                if(options.singleSelect)
                   singleSelectMode(options, $html);

                var $li = $(item.target); 
                toggleSelection($li, options);
            });

            $html.append($liElement);
        });

        $this.append($html); 	
    };

    $.fn.weekdays.days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    $.fn.selectedIndexes = function(){
        return $(this).find('li')
            .filter(function(index,a){
                return a.selected; 
            })
            .map(function(index,item){
                return $(item).attr("data-day"); 
            });
    };

    $.fn.selectedDays = function(){
        var $this = $(this);

        return $(this).find('li')
            .filter(function(index,a){ 
                return a.selected; 
            })
            .map(function(index,item){ 
                return $this.data().days[$(item).attr("data-day")]; 
            });
    }; 

    function consolideOptions(options){
        options = options ? options : {};
        options.days = options.days ? options.days : $.fn.weekdays.days;
        options.listClass = options.listClass ? options.listClass : 'weekdays-list';
        options.itemClass = options.itemClass ? options.itemClass : 'weekdays-day';
        options.itemSelectedClass = options.itemSelectedClass ? options.itemSelectedClass : 'weekday-selected';
        options.singleSelect = options.singleSelect ? options.singleSelect : false;

        return options;
    }

    function singleSelectMode(options, $html){
         $html.find('li')
              .each(function(index,item){ 
                       var $li = $(item);

                       $li.prop('selected', false);
                       $li.removeClass(options.itemSelectedClass);
                   });
    }

    function toggleSelection($li, options){
         var selected = !$li.prop('selected')

         $li.prop('selected', selected);
         $li.toggleClass(options.itemSelectedClass);
    }
});
