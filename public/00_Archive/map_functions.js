


function setupTextButtonEvents(tokens_array){
  $.each(tokens_array,function(k,v){
    var tok = '#'+v.token+"_text";
    var link2analysis = './text/' + v.token + '_analysis.html';
    var link2scatter = "scatter_" + v.token;
    var link2hist = "hist_" + v.token;
    $(tok).on('click', function (e) {
                $("#describeWords").load(link2analysis);
                
                //document.getElementById('hist').src = link2hist;
                //document.getElementById('corr').src = link2corr;

            });
  });
}
