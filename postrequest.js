$(document).ready(function(){
	$('#roomselect').change(function () {
	var selection = this.value; //grab the value selected		
	var datev = $(".dhx_cal_date").text(); //get the date
	var dates = datev.split(' ');
	var tab = $(".active").text(); //get the active tab
	//"2017-11-28T15:30:00.000"
	var start_date;
	var end_date;
	if(tab == "Day")
	{
		start_date = dates[2]+"-"+ dates[1] +"-"+ dates[0]+"T15:30:00.000";
		end_date = dates[2]+"-"+ dates[1] +"-"+ dates[0]+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	else if(tab == "Week" ) 
	{
		
		start_date = dates[2]+"-"+ dates[1] +"-"+ dates[0]+"T15:30:00.000";
		end_date = dates[6] +"-"+ dates[5] +"-"+ dates[4]+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	else if(tab == "Month")
	{
		start_date = dates[1]+"-"+ dates[0] +"-"+ "1"+"T15:30:00.000";
		end_date = dates[1]+"-"+ dates[0] +"-"+ "30"+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	
	
	
	
	console.log(tab);
	var postdata = [{"room":selection,"startdate":datev,"enddate":datev}]
	console.log(postdata);
	});
	
	/*https://stackoverflow.com/questions/6323338/jquery-ajax-posting-json-to-webservice*/
	
});