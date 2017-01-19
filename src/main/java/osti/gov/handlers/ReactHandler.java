package osti.gov.handlers;

import javax.servlet.http.HttpServletRequest;

import osti.gov.entity.Developer;

public class ReactHandler {

	
	public static String handleRequest(HttpServletRequest request) {
		
		String action = request.getParameter("action");
		
		switch(action) {
		case "load":
			return handleActionLoad(request);
		}
		
		return "";
	}
	
	private static String handleActionLoad(HttpServletRequest request) {
		Developer example = new Developer();
		example.setFirstName("An");
		example.setLastName("Example");
		example.setEmail("example@osti.gov");
		
		return example.parseToJson().toString();
	}
}
