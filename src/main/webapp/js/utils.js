
function doAjax(methodType,url,successCallback,errorCallback,data) {
	
	$.ajax({
		url: url,
		method: methodType,
		dataType: 'json',
		data : JSON.stringify(data),
		contentType: "application/json; charset=utf-8",
		success: successCallback,
		error: errorCallback
		});
		
}