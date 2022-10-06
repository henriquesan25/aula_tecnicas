/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author autologon
 */
public class NewCadastro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        String produto = request.getParameter("produto");
        String marca = request.getParameter("marca");
        double preco = Double.parseDouble(request.getParameter("preco"));
        
        
        
     
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet NewCadastro</title>");      
            out.println("<meta name= 'viewport' content='width=device-width,initial-scale=1.0'>");
            out.println("<link rel='stylesheet' href='css/bootstrap.min.css'>");
            out.println("<script src='js/bootstrap.min.js'></script>");
            out.println("</head>");
            out.println("<body>");
            
            if (preco> 0 && preco<100) {
            out.println("O nome do Prduto é: "+produto+ "<br>A marca é: "+marca+" <br> O preço do produto é: "+preco+"<br> Margem de desconto é: "+preco*0.25);
            
        }else if (preco>=100 && preco<=300) {
            out.println("O nome do Prduto é: "+produto+ "<br>A marca é: "+marca+" <br> O preço do produto é: "+preco+ "<br> Margem de desconto é: "+preco*0.30);
            
        }else if (preco>300) {
            out.println("O nome do Prduto é: "+produto+ "<br>A marca é: "+marca+" <br> O preço do produto é: "+ preco+"<br> Margem de desconto é: "+preco*0.35);
        }
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect("acessonegado.html");
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
