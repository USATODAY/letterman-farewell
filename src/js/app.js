define([
  'require',
  'jquery',
  'isotope',
  'underscore',
  'lib/BackboneRouter',
  'models/config',
  'views/appView',
  'dataManager',
  'jquery_ui_touch_punch'
  ], 
  function(require, jQuery, Isotope, _, Backbone, config, appView, dataManager) {


  return {
    init: function() {
      require( [ 'jquery-bridget/jquery.bridget' ],
        function() {
          // make Isotope a jQuery plugin
          $.bridget( 'isotope', Isotope );


          if (config.isTablet || config.isMobile) {
            $('.iapp-page-wrap').addClass('iapp-touch-device');
          }

          $(window).on('resize', function(e) {
            Backbone.trigger('window:resize');
          });

          $(window).on('scroll', function() {
            Backbone.trigger('window:scroll');
          });


          //Make data request
          
          dataManager.getData();

          appview = new appView();

          //set global callback for Brightcove videos to use
        window.onTemplateReady = function(evt) {
            console.log("video ready handler window");
            var APIModules = brightcove.api.modules.APIModules;
            var player = brightcove.api.getExperience(evt.target.experience.id);
            var videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
            var experience = player.getModule(APIModules.EXPERIENCE);



            Backbone.trigger("video:ready", {
                player: videoPlayer,
                experience: experience
            });

            //trigger Backbone event and pass object with Brightcove player and experience objects as arguments
            videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function(e) {
                Backbone.trigger("video:ended", {
                    player: videoPlayer,
                    experience: experience
                });
            });

            videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, function(e) {
                console.log("play triggered");
                Backbone.trigger("video:play");
            });
            videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, function(e) {
                console.log("pause triggered");
                Backbone.trigger("video:pause");
            });
        };
          
        }
      );   
    }
  };
});
