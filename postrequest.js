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
		start_date = dates[2]+"-"+ convertMonth(dates[1]) +"-"+ dates[0]+"T15:30:00.000";
		end_date = dates[2]+"-"+ convertMonth(dates[1]) +"-"+ dates[0]+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	else if(tab == "Week" ) 
	{
		
		start_date = dates[2]+"-"+ convertMonth(dates[1])+"-"+ dates[0]+"T15:30:00.000";
		end_date = dates[6] +"-"+ convertMonth(dates[5]) +"-"+ dates[4]+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	else if(tab == "Month")
	{
		start_date = dates[1]+"-"+ convertMonth(dates[0]) +"-"+ "1"+"T15:30:00.000";
		end_date = dates[1]+"-"+ convertMonth(dates[0]) +"-"+ "30"+"T15:30:00.000";
		console.log(start_date);
		console.log(end_date);
	}
	
	
	var postdata = [{"room":selection,"roomSchedulerStartDtg":start_date,"roomSchedulerEndDtg":end_date,"rooms":}]
	console.log(postdata);
	});
	$.ajax({
		type: "Post",
		url: "",
		data: JSON.stringify({Postdata:postdata}),
		contentType: "application/json; charset=utf-8",
		dataType:"json",
		success: function(data){alert(data);},
		failure: function(errMsg){alert(errMsg);}
	});
	/* /rest/db/room/getAllRoom
	[
  {
    "roomId": 1,
    "roomName": "Chatreuse",
    "roomStatusId": 1
  },
  {
    "roomId": 2,
    "roomName": "Oissan",
    "roomStatusId": 1
  }
	]
	
	*/
	/*https://stackoverflow.com/questions/6323338/jquery-ajax-posting-json-to-webservice*/
	/* /rest/db/room/getSchedulerByDatesByRoomName
	{
  "roomSchedulerStartDtg": "2017-11-29T16:30:00.000",
  "roomSchedulerEndDtg": "2017-11-29T17:30:00.000",
  "rooms": {
    "roomName": "Chatreuse"
	}
	}
	*/
	
});
function convertMonth(month)
{
	var monthNumber;
	switch(month)
	{
		case "January":
		case "Jan":
		monthNumber = "01";
		break;
		case "February":
		case "Feb":
		monthNumber = "02";
		break;
		case "March":
		case "Mar":
		monthNumber = "03";
		break;
		case "April":
		case "Apr":
		monthNumber = "04";
		break;
		case "May":
		case "May":
		monthNumber = "05";
		break;
		case "June":
		case "Jun":
		monthNumber = "06";
		break;
		case "July":
		case "Jul":
		monthNumber = "07";
		break;
		case "August":
		case "Aug":
		monthNumber = "08";
		break;
		case "September":
		case "Sep":
		monthNumber = "09";
		break;
		case "October":
		case "Oct":
		monthNumber = "10";
		break;
		case "November":
		case "Nov":
		monthNumber = "11";
		break;
		case "December":
		case "Dec":
		monthNumber = "12";
		
		
	}
	return monthNumber;
}