
var batch_del_id = 0;
var delRow = null;

$('#mng_batches_tbl tr').click(function() {
	delRow = $(this);
	$("#mng_batches_tbl tr:odd").css( "background-color", "rgb(255,255,255)" );
	$("#mng_batches_tbl tr:even").css( "background-color", "rgb(255,255,255)" );

	batch_del_id = $(this).children().eq(0).text();	
	$( this ).css( "background-color", "yellow" );
	
});

$('#mng_batch_del').click(function() {

	if (batch_del_id == 0) return;

	$("#dialog_batch").dialog({
		modal: true,
		resizable: false,
		buttons: {
			"Yes": function() {

					$.ajax({
					  method: "POST",
					  url: "/deleteBatch",
					  data: { batch_del_id: batch_del_id}
					})
					  .done(function( msg ) {				    
					  });

					//$('#mng_batches_tbl').remove(delRow);
					delRow.remove();
					$(this).dialog("close");				
			},
			"No": function() {
				$(this).dialog("close");
			}
		}
	});

});

$('#mng_view_ads').click(function() {
	$($(".item")[0]).addClass( "active" );	
	$("#carouselDiv").show();
});

$('#carouse_close').click(function() {
	$("#carouselDiv").hide();
});

