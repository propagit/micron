// Plugin for Micron 21 custom functions which will work in conjuction with bootstrap.js and bootstrap.css
(function( $ ) {
 
 
	// page modal lvl 1
	$.fn.page_modal = function( action ) {
 
        if(action === 'show'){
			// Open modal
			this.modal('show');
			$('.modal-backdrop').addClass('modal-backdrop-alt');	
			$('nav > ul > li > a').addClass('nav-pointer-backdrop');
		}
 
        if ( action === "hide" ) {
            // Close modal
			this.modal('hide');
			$('nav > ul > li > a').removeClass('nav-pointer-backdrop');
        }
 
    };
	
	// page modal lvl 1 action script
	$(document).on('click','.pageModal',function(e){
		var $this = $(this);
		var target = $this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
		if ($this.is('a')) e.preventDefault()
		
		$(target).page_modal('show');
		
	});
	
	$(document).on('click','.closePM',function(e){
		var $this = $(this);
		var target = $this.attr('data-close') || (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
		if ($this.is('a')) e.preventDefault()
		
		$(target).page_modal('hide');
		
	});
	
	// page modal lvl 2
	$.fn.page_modal2 = function( action ) {
 
        if(action === 'show'){
			// Open modal
			this.modal('show');
			$('.modal-backdrop').addClass('modal-backdrop-alt-2');	
			$('.modal-backdrop-alt').removeClass('modal-backdrop-alt-2');
			$('nav > ul > li > a').addClass('nav-pointer-backdrop-2');
		}
 
        if ( action === "hide" ) {
            // Close modal
			this.modal('hide');
			$('nav > ul > li > a').removeClass('nav-pointer-backdrop-2');
        }
 
    };
	
	//page modal lvl 2 action script 
	$(document).on('click','.pageModal2',function(e){
		var $this = $(this);
		var target = $this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
		if ($this.is('a')) e.preventDefault()
		
		$(target).page_modal2('show');
		
	});
	
	$(document).on('click','.closePM2',function(e){
		var $this = $(this);
		var target = $this.attr('data-close') || (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
		if ($this.is('a')) e.preventDefault()
		
		$(target).page_modal2('hide');
		
	});
	
	// action btns
	$.fn.action_button = function(target,class_name){
		class_name = typeof class_name !== 'undefined' ? class_name : 'btn-success';
		var $this = $(this);
		var len = 0;
		var cur_classes = $(target).attr('class');
		console.log(cur_classes);
		$this.on('keyup',function(){
			len = $this.val().length;
			if(len > 0){
				// remove other btn classes
				$(target).removeClass('btn-info').removeClass('btn-default').removeClass('btn-default-alt').removeClass('btn-warning').removeClass('btn-danger').removeClass('btn-success');
				$(target).addClass(class_name);
			}else{
				$(target).removeAttr('class').addClass(cur_classes);
			}
		});
		return this;
		
	};
	
	// action btn action script
	$(document).on('focus','.actionBtn',function(){
		var $this = $(this);
		var target = $this.attr('data-target');
		var append_class = $this.attr('data-class');
		$('.actionBtn').action_button(target,append_class);
	});

	// unify height for similar containers
	$.fn.unify_height = function(){
		var $this = $(this);
		$this.css({'min-height':0});
		var maxHeight = 0;
		$this
		  .each(function() { maxHeight = Math.max(maxHeight, $(this).height()); })
		  .css({'min-height':maxHeight});
		return this;
	};
	
	$.fn.adjust_nav_height = function(){
		$(this).css({'height':$(document).height()});	
	};
	
	

 
}( jQuery ));