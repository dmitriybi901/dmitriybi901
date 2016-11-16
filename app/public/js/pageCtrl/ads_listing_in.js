
var delRow_ads = null;

ads_del_id = 0;
ads_title = "";
ads_text = "";
ads_thumbnail = "";
ads_client = "";

$('#ads_listing_tbl tr').click(function() {
	delRow_ads = $(this);
	$("#ads_listing_tbl tr:odd").css( "background-color", "rgb(255,255,255)" );
	$("#ads_listing_tbl tr:even").css( "background-color", "rgb(255,255,255)" );

	ads_del_id = $(this).children().eq(0).text();	
	$( this ).css( "background-color", "yellow" );
	
});

$('#ads_batch_del').click(function() {

	if(ads_del_id==0) return;

	$("#dialog_ads").dialog({
		modal: true,
		resizable: false,
		buttons: {
			"Yes": function() {

					$.ajax({
					  method: "POST",
					  url: "/deleteAds",
					  data: { ads_del_id: ads_del_id}
					})
					  .done(function( msg ) {				    
					  });

					delRow_ads.remove();
					$(this).dialog("close");				
			},
			"No": function() {
				$(this).dialog("close");
			}
		}
	});

});



$('#ads_batch_edit').click(function() {
	
	if(ads_del_id==0) return;
	ads_title = delRow_ads.children().eq(1).text();
	ads_text = delRow_ads.children().eq(2).text();
	ads_thumbnail = delRow_ads.children().eq(3).text();
	ads_client = delRow_ads.children().eq(4).text();
	$("#ads_edit_id_ads").val(ads_del_id);
	$("#title_ads").val(ads_title);
	$("#text_ads").val(ads_text);
	$("#thumbnail_ads").val(ads_thumbnail);
	$("#client_ads").val(ads_client);
	$("#editAds_submit").submit();
});