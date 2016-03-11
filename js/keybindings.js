define(['constants', 'storage','tabs'], function(C, storage, tabs){
  'use strict';

  function init() {

    $(window).keydown(function(e){
      switch(e.which){
        case C.KEYCODES.T:
          if (e.ctrlKey) {
            tabs.open_new_tab();
          }
          break;
        case C.KEYCODES.Q:
          if (e.ctrlKey) {
            storage.clear();
          }
          break;
        case C.KEYCODES.W:
          if (e.ctrlKey) {
            tabs.close_current_tab();
            e.preventDefault();
          }
          break;
        case C.KEYCODES.L:
          if(e.ctrlKey) {
            tabs.focus_address_bar();
          }
          break;
        default:
          console.log(e);
      }
    });

  }

  return {
    init: init
  };

});
