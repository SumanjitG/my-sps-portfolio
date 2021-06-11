package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/fact")
public class FactServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Create ArrayList of random facts
    ArrayList<String> facts = new ArrayList<String>();
    facts.add("In 2012, a friend and I built a giant Nintendo DS.");
    facts.add("When I was 5 years old, I tried to do 'gymnastics' at home and broke my right arm.");
    facts.add("I am a big Selena Gomez fan and was lucky enough to see her perform in 2010 and 2016.");  
    facts.add("I speak three languages: English, Punjabi, and Spanish.");
    facts.add("For weddings in our family, I choreograph a dance routine that my siblings, cousins, and I perform for a pre-wedding event.");

    String json = convertToJson(facts);
    
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(ArrayList<String> data) {
      Gson gson = new Gson();
      String json = gson.toJson(data);
      return json;
  }
}
