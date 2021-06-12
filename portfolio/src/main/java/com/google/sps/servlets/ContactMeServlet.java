package com.google.sps.servlets;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/contact")
public class ContactMeServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Get the user's name
        String nameValue = request.getParameter("name");
        // Get the user's email
        String emailValue = request.getParameter("email");
        // Get the user's message
        String messageValue = request.getParameter("message");

        // Print the values so you can see it in the server logs.
        System.out.println(
                "You submitted: \n Name: " + nameValue + "\n Email: " + emailValue + "\n Message: " + messageValue);

        // Write the value to the response so the user can see it.
        response.getWriter().println(
            "You submitted: \n Name: " + nameValue + "\n Email: " + emailValue + "\n Message: " + messageValue + "\n\n\nRedirecting...");

        // Add a delay before redirecting to the home page
        response.setHeader("Refresh", "5; URL = http://sgill-sps-summer21.appspot.com/");
  }
}