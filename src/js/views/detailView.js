define([
    "jquery", 
    "underscore", 
    "backbone", 
    "analytics", 
    "templates",
    "models/config",
    "router"
    ], 
    function(jQuery, _, Backbone, Analytics, templates, config, router) {
      return Backbone.View.extend({
        tagName: "div",
        className: "modal",
        template: templates["card-back.html"],

        events: {
          "click .close-card": "removeCard",
          "click .facebook-share": "facebookShare",
          "click .twitter-share": "twitterShare",
          "click .iapp-detail-bg": "removeCard",
          'click .iapp-like-button': 'onLikeClick',
          'click .iapp-dislike-button': 'onDislikeClick' 
        },

        initialize: function() {

          // router.navigate("movie/" + this.model.get("rowNumber"));
          this.listenTo(Backbone, "highlight:remove", this.removeCard);
          this.listenTo(this.model, 'change:isLiked', this.onLikeChange);
          this.listenTo(this.model, 'change:isDisliked', this.onDislikeChange);
          // this.listenTo(this.model, 'change:highlight', this.removeCard);
        },
        render: function() {
          this.$el.empty();
          $('body').addClass('iapp-no-scroll');

          if (this.model.get('isLiked')) {
            this.$el.addClass('iapp-liked');
          } else if (this.model.get('isDisliked')) {
            this.$el.addClass('iapp-disliked');
          }

          var vidSize = this.getVideoSize();
          this.$el.html(this.template({content: this.model.attributes, vidSize: vidSize }));   
          this.postRender(this.$el);
          return this;
        },

        postRender: function(element) {

          _.defer(function() {
              brightcove.createExperiences();

            element.addClass("modal-show");
          }, element);
            
        },

        removeCard: function() {
            this.model.set({highlight: false}); 
            $('body').removeClass('iapp-no-scroll');
          
            
            this.$el.removeClass("modal-show");
            var _this = this;
            
            _.delay(function() {
              _this.remove();
            }, 500);
        
          
        },


        removeHighlight: function() {
          this.model.set({"highlight": false});
        },

        onLikeClick: function() {
          this.model.undislike();
            if (!this.model.get('isLiked')) {
              this.model.like();
            } else {
              this.model.unlike();
            }
            
        },

       getVideoSize: function() {
                var fullHeight, fullWidth;
                var numWindowWidth = window.innerWidth;
                if (numWindowWidth >= 600) {
                    fullWidth = numWindowWidth/2;
                    if (fullWidth > 600) {
                        fullWidth = 600;
                    }
                } else {
                    fullWidth = numWindowWidth * 0.8;
                }

                fullHeight = fullWidth * (9/16);
                console.log(fullWidth, fullHeight);
                return {
                    width: fullWidth,
                    height: fullHeight
                };
            }
    });
});
