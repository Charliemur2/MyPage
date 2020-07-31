$(function() {
    $("[data-toogle='tooltip']").tooltip();
    $("[data-toogle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#Contacto').on('show.bs.modal', function (e){
        console.log('el modal contacto se esta mostrando');
        
        $('#ContactoBtn').removeClass('btn-outline-success');
        $('#ContactoBtn').addClass('btn-primary');
        $('#ContactoBtn').prop('disabled', true);
    });
    $('#Contacto').on('shown.bs.modal', function (e){
        console.log('el modal contacto se mostró');
    });
    $('#Contacto').on('hide.bs.modal', function (e){
        console.log('el modal contacto se esta ocultando');
    });
    $('#Contacto').on('hidden.bs.modal', function (e){
        console.log('el modal contacto se ocultó');
        $('#ContactoBtn').prop('disabled', false);
    });
});