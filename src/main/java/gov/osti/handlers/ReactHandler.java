package gov.osti.handlers;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.math.NumberUtils;

import com.google.gson.JsonObject;

import gov.osti.entity.DOECodeMetadata;

public class ReactHandler {

	
	public static String handleRequest(HttpServletRequest request) throws IOException {
		
		String action = request.getParameter("action");
		Long osti_id = NumberUtils.toLong(request.getParameter("code_id"), 0);


		switch (action) {

		case "load":
			return handleActionLoad(osti_id);
		case "save":
			return handleActionSave(request.getReader());
		default:
			return null;

		}

	}

	
	private static String handleActionLoad(long codeId) {
		JsonObject responseObject = new JsonObject();
		DOECodeMetadata md = new DOECodeMetadata(codeId);
		md.setSoftwareTitle("something");
		md.setAcronym("ORNL");
		md.setDescription("Description");
		responseObject.add("metadata", md.getJson());
		return responseObject.toString();
		
		
	}
	
	private static String handleActionSave(BufferedReader reader) throws IOException {
		JsonObject responseObject = new JsonObject();
		DOECodeMetadata md = DOECodeMetadata.parseJson(reader);
		
		responseObject.add("metadata",md.getJson());
		
		
		return responseObject.toString();
		
		
	}
}
