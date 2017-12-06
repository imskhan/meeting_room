$(document).ready(function(){
	$('#roomselect').change(function () {
	var selection = this.value; //grab the value selected		
	var datev = $(".dhx_cal_date").text();
	var tab = $(".active").text();
	console.log(tab);
	var postdata = [{"room":selection,"startdate":datev,"enddate":datev}]
	console.log(postdata);
	});

	/*https://stackoverflow.com/questions/6323338/jquery-ajax-posting-json-to-webservice*/

});