"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Caleb Brown
   Date: 2/4/20  
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>";
cartHTML += "</tr>";

for(var i = 0; i < item.length; i++){
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   orderTotal += itemCost;
}

cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";

document.getElementById("cart").innerHTML = cartHTML;

