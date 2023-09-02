$(document).on('click', '.view-port', function(){
    var idx = $(this).data('num');
    var target = $('#popup_inner');
    $('html, body').addClass('hidden');
    $('#popup').css('display','block');
    $('#popup_inner').css({
        'opacity':'1',
        'visibility' : 'visible'
    });
    if(idx == "1"){
        target.html(PORT_01);
    }else if(idx == "2"){
        target.html(PORT_02); 
    }else if(idx == "3"){
        target.html(PORT_03); 
    }else if(idx == "5"){
        target.html(PORT_04); 
    }else if(idx == "6"){
        target.html(PORT_05); 
    }else if(idx == "7"){
        target.html(PORT_06); 
    }
});
$(document).on('click', '#btn_popup_close', function(){
    $('html, body').removeClass('hidden');
    $('#popup').css('display','none');
    $('#popup_inner').css({
        'opacity':'0',
        'visibility' : 'hidden'
    });
});