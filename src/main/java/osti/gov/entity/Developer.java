package osti.gov.entity;

import java.io.Reader;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

public class Developer {

	private static Gson serializer = new GsonBuilder().setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES).serializeNulls().create();
	String firstName = null;
	String lastName = null;
	String email = null;
	
	public Developer() {
		
	}
	
	public Developer parseFromJson(Reader reader) {
		return serializer.fromJson(reader, Developer.class);
	}
	
	public JsonElement parseToJson() {
		return serializer.toJsonTree(this);
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
