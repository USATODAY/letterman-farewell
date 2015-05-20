define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app-view.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <div class="iapp-head-wrap">\n        <h1 class="iapp-page-header">' +
((__t = ( head )) == null ? '' : __t) +
'</h1>\n        <p class="iapp-page-chatter">During his 33 years as a late-night host, the weatherman from Indianapolis has shot the breeze with Bill Murray, Barack Obama and Bruce Willis. Here\'s how his guests, and in some cases friends, remember him.</p>\n\n        <p class="iapp-share-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n        <div class="iapp-share-wrap"></div>\n    </div>\n<div class="iapp-menu"></div>\n<div id="card-wrap" class="iapp-card-wrap"></div>\n\n<div class="iapp-intro-wrap">\n    <div class="iapp-intro-content-wrap">\n        <div class="iapp-intro-icon-wrap">\n        </div> <!-- end iapp-intro-icon-wrap -->\n        <div class="iapp-intro-info">\n            <h2 class="iapp-intro-header">' +
((__t = ( head )) == null ? '' : __t) +
'</h2>\n            <p class="iapp-intro-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n            <div class="iapp-button iapp-begin-button iapp-clickable"><div class="iapp-button-text">Begin</div></div>\n        </div> <!-- end iapp-intro-info -->\n    </div> <!-- end iapp-intro-content-wrap -->\n</div> <!-- end iapp-intro-wrap -->\n\n<div class="iapp-end-modal-wrap"></div>\n\n';

}
return __p
};

this["templates"]["card-back.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '      <div class="card card-detail">\n      \n\n        ';
 if (content.brightcove_id !== "") { ;
__p += '\n        \n        <!-- Start of Brightcove Player -->\n\n        <div style="display:none">\n        Interactives video player with single clip \n        </div>\n\n\n        <object id="myExperience' +
((__t = (content.brightcove_id)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n          <param name="bgcolor" value="#FFFFFF" />\n          <param name="width" value="' +
((__t = ( vidSize.width )) == null ? '' : __t) +
'" />\n          <param name="height" value="' +
((__t = ( vidSize.height )) == null ? '' : __t) +
'" />\n          <param name="playerID" value="4191673832001" />\n          <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6Fnz1-5Tv-uC_zxqKqCr-Phqa" />\n          <param name="isSlim" value="true" />\n          <param name="dynamicStreaming" value="true" />\n            \n          <param name="@videoPlayer" value="' +
((__t = (content.brightcove_id)) == null ? '' : __t) +
'" />\n          <param name="wmode" value="opaque" />\n          <param name="autoStart" value="false" />\n        </object>\n\n\n        <!-- End of Brightcove Player -->\n        ';
 } else {;
__p += '\n            <div class="iapp-detail-quote-wrap">\n                <h3 class="iapp-detail-quote">' +
((__t = (content.tribute_text )) == null ? '' : __t) +
'</h3> \n            </div>\n        ';
 } ;
__p += '\n        <div class="close-card"></div>\n      \n      \n      \n        <div class="iapp-detail-info">\n            <h2 class="card-back-header">' +
((__t = ( content.person_name )) == null ? '' : __t) +
' </h2>\n            ';
 if (content.video_credit !== "") { ;
__p += '\n                <p class="iapp-summary">' +
((__t = ( content.video_credit )) == null ? '' : __t) +
'</p>\n            ';
 } ;
__p += '\n        </div>\n      \n      \n      </div>\n      \n        <div class="iapp-detail-bg"></div> \n\n';

}
return __p
};

this["templates"]["card-front.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-card-front-image-wrap">\n    <img class="cover-img" src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/load.png" data-src=\'' +
((__t = (photo_url)) == null ? '' : __t) +
'\'alt="' +
((__t = ( person_name)) == null ? '' : __t) +
'">\n</div>\n<div class="iapp-card-info">\n    <h2 class="iapp-card-info-header">' +
((__t = ( person_name)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-card-info-text">' +
((__t = ( bio )) == null ? '' : __t) +
'</p>\n    <p class="iapp-card-info-photo-credit">' +
((__t = ( photo_credit)) == null ? '' : __t) +
'</p>\n    \n</div>\n';

}
return __p
};

this["templates"]["menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-menu-panel">\n    \n    \n    <h3 class="iapp-menu-header iapp-menu-header-filters">Sort your closet</h3>\n    <div class="iapp-filters-wrap"></div> \n</div>\n\n<div class="iapp-menu-control-area">\n    <div class="iapp-menu-button iapp-clickable"><div class="iapp-button-text">Sort Closet</div></div>\n    <div class="iapp-top-button iapp-clickable"><div class="iapp-button-text">Top</div></div>\n    <div class="iapp-menu-close iapp-clickable"><div class="iapp-button-text">Close Menu</div></div>\n    <div class="iapp-reset-button iapp-clickable"><div class="iapp-button-text">Reset</div></div>\n    <div class="iapp-menu-scoreboard">\n\n        <div class="iapp-menu-scoreboard-likes">\n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/like.svg" alt="like"></span>\n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numlikes)) == null ? '' : __t) +
'</span><span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n            </div>\n        </div>\n        <div class="iapp-menu-scoreboard-dislikes">\n            \n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/dislike.svg" alt="like"></span> \n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numdislikes)) == null ? '' : __t) +
'</span> \n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["templates"]["share-end.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-end-modal-wrap-content">\n    <div class="iapp-end-modal-close"></div>\n    <div class="iapp-end-modal-content">\n        <h3 class="iapp-end-header">' +
((__t = (endHeader)) == null ? '' : __t) +
'</h3>\n        <p class="iapp-end-chatter">' +
((__t = (endBody)) == null ? '' : __t) +
'</p>\n    </div>\n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n        <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n    </div>\n</div>\n\n<div class="iapp-end-modal-bg"></div>';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n</div>';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(tags, function(tag) {
  var tagClass;
    tag == ":(" ? tagClass="sad" : tagClass = tag.toLowerCase().replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"").replace(/\s+/g, "-");
    
  ;
__p += '\n\n<div class="iapp-filter-button" data-filter="' +
((__t = ( tagClass )) == null ? '' : __t) +
'">' +
((__t = ( tag )) == null ? '' : __t) +
'</div>\n\n\n';
 }); ;
__p += '\n\n<div class="iapp-filter-button-clear">Clear Filters</div>';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});