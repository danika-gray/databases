// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rfp2204';
