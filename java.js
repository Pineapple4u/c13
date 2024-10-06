//q1
var colour = ["red", "black", "white"];
document.getElementById("display_array").innerHTML=colour;

//q2
document.getElementById("display_element1").innerHTML=colour[0];
document.getElementById("display_element2").innerHTML=colour[1];
document.getElementById("display_element3").innerHTML=colour[2];

//q3
document.getElementById("display_arrayL").innerHTML=colour.length;

//q4
var array_value=""
for (var index = 0; index < colour.length; index++) {
    var element = colour[index];
    console.log(element);
    array_value=array_value+ " " +element
    // array_value=array_value+element+"<br>"   ===> this is so that they come in different rows or like one below the other

    document.getElementById("display_elements").innerHTML=array_value
}

//q5
colour.push("green");
document.getElementById("display_added_end").innerHTML=colour;

//q6
colour.pop();
document.getElementById("display_removed_end").innerHTML=colour;

//q7
colour.unshift("blue");
document.getElementById("display_added_front").innerHTML=colour;

//q8
colour.shift();
document.getElementById("display_removed_front").innerHTML=colour;

//q9
var NEW= colour.toString()
document.getElementById("display_converted_array").innerHTML=typeof NEW;
