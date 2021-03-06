define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/05/letterman/data/data.json";

    }

    return {
        data: {},
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data.dresses = data;

                _.each(_this.data.dresses, function(dataObj) {
                    

                    dataObj.tribute_text = _this.smartQuotify(dataObj.tribute_text);
                    dataObj.photo_url = _this.base_url + dataObj.photo_filename;
                });

                
                Backbone.trigger("data:ready", this);

            });
        },
        organizeTags: function() {
            var _this = this;
            var tags = [
                {
                    tagName: 'iapp-liked',
                    tagPretty: 'liked'
                },
                {
                    tagName: 'iapp-disliked',
                    tagPretty: 'disliked'
                },
            ];
            _.each(_this.data.dresses, function(dataObj) {
                    
                //split tags string into array
                if (dataObj.tags !== "") {
                    dataObj.tags = dataObj.tags.toLowerCase();
                    dataObj.tags = dataObj.tags.split(", ");
                    dataObj.tags = _.without(dataObj.tags, "");
                }

                _.each(dataObj.tags, function(tag) {
                    //add each tag to master tags array

                    var tagObj = {
                        tagName: tag.replace(/\s+/g, '-'),
                        tagPretty: tag
                    };
                    
                    
                    tags.push(tagObj);
                });

                dataObj.tags = _.map(dataObj.tags, function(tag) {
                    
                    return tag.replace(/\s+/g, '-');
                });



            });

            //remove duplacate tags from array
            var uniqueTags = _.uniq(tags, function(tag) {
                return tag.tagName;
            });
            
            this.data.tags = uniqueTags;
        },
        userName: '',
        base_url: 'http://www.gannett-cdn.com/experiments/usatoday/2015/05/letterman/img/',
        smartQuotify: function(a) {
            a = a.replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018");       // opening singles
            a = a.replace(/'/g, "\u2019");                            // closing singles & apostrophes
            a = a.replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c"); // opening doubles
            a = a.replace(/"/g, "\u201d");                            // closing doubles
            return a;
        }
    };


});
