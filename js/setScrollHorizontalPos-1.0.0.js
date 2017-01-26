/*
 setScrollPosRight.js
 Copyright (c) 2017 Shinya Takahashi
 Date : 2017-01-26 13:31:50
*/
;(function(window, $){
    'use strict';
    if(typeof $ !== 'function'){
        return;
    }
    var SetScrollPosLast = function(){
        this.getElements();
        this.setEvents();
    }
    SetScrollPosLast.prototype = {
        getElements: function(){
            this.$nav = $('#breadCrumbScrollNav');
            this.$navLastChild = this.$nav.find('td:last-child')
        },
        setEvents: function(){
            $(window).on('load orientationchange', {_self:this}, this.setOffset);
        },
        setOffset: function(e){
            var self = e.data._self;
            self.$nav[0].scrollLeft = self.$navLastChild.offset().left;
        }
    }
    new SetScrollPosLast();
})(window, window.jQuery);