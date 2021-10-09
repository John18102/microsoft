function confirm() {
 return [
  document.getElementById("email"),
  document.getElementById("old_password"),
  document.getElementById("new_password"),
  document.getElementById("confirm_password")
 ].forEach(validatePrice)
}

function validatePrice(price)
{
 if(price.value === "") {
  if(price.id === "email"){
   document.getElementById("fill_field_1").style.display = "block";
   document.getElementById("minium_8_characters_1").style.display = "none";
  }
  else if(price.id == "old_password"){  
   document.getElementById("fill_field_2").style.display = "block";   
   document.getElementById("minium_8_characters_2").style.display = "none";
  } 
  else if(price.id == "new_password"){   
   document.getElementById("fill_field_3").style.display = "block";    
   document.getElementById("minium_8_characters_3").style.display = "none";
  }
  else if(price.id == "confirm_password"){   
   document.getElementById("fill_field_4").style.display = "block"; 
   document.getElementById("minium_8_characters_4").style.display = "none";
  }
 }
 if(price.value.length >= 1 && price.value.length < 8 && price.value.indexOf(" ") == -1){
  if(price.id === "email"){
   document.getElementById("fill_field_1").style.display = "none";
   document.getElementById("minium_8_characters_1").style.display = "block";
   document.getElementById("cant_contain_space_1").style.display = "none";
  }
  else if(price.id === "old_password"){  
   document.getElementById("fill_field_2").style.display = "none";
   document.getElementById("minium_8_characters_2").style.display = "block";    
   document.getElementById("cant_contain_space_2").style.display = "none";
  }
  else if(price.id === "new_password"){     
   document.getElementById("fill_field_3").style.display = "none";
   document.getElementById("minium_8_characters_3").style.display = "block";   
   document.getElementById("cant_contain_space_3").style.display = "none";
  }
  else if(price.id === "confirm_password"){
   document.getElementById("fill_field_4").style.display = "none";
   document.getElementById("minium_8_characters_4").style.display = "block";
   document.getElementById("cant_contain_space_4").style.display = "none";
  }
 }
 if(price.value.indexOf(" ") >= 0){
  if(price.id === "email"){
   document.getElementById("fill_field_1").style.display = "none";
   document.getElementById("minium_8_characters_1").style.display = "none";
   document.getElementById("cant_contain_space_1").style.display = "block";
  }
  else if(price.id === "old_password"){ 
   document.getElementById("fill_field_2").style.display = "none";  
   document.getElementById("minium_8_characters_2").style.display = "none";
   document.getElementById("cant_contain_space_2").style.display = "block";   
  }
  else if(price.id === "new_password"){   
   document.getElementById("fill_field_3").style.display = "none";                                  
   document.getElementById("minium_8_characters_3").style.display = "none";
   document.getElementById("cant_contain_space_3").style.display = "block";   
  }
  else if(price.id === "confirm_password"){  
   document.getElementById("fill_field_4").style.display = "none";  
   document.getElementById("minium_8_characters_4").style.display = "none";
   document.getElementById("cant_contain_space_4").style.display = "block";  
  }
 }
 if(document.getElementById("email").value.length >= 8 && document.getElementById("email").value.indexOf(" ") == -1 && document.getElementById("old_password").value.length >= 8 && document.getElementById("old_password").value.indexOf(" ") == -1 && document.getElementById("new_password").value.length >= 8 && document.getElementById("new_password").value.indexOf(" ") == -1 && document.getElementById("confirm_password").value length >= 8 && document.getElementId("confirm_password").value.indexOf(" ") == -1 && document.getElementById("new_password").value == document.getElementById("confirm_password").value) {
  document.getElementById("minium_8_characters_1").style.display = "none";
  document.getElementById("minium_8_characters_2").style.display = "none";
  document.getElementById("minium_8_characters_3").style.display = "none";
  document.getElementById("minium_8_characters_4").style.display = "none";
  document.form.submit()
 }
 if(document.getElementById("email").value.length >= 8 && document.getElementById("email").value.indexOf(" ") == -1 && document.getElementById("old_password").value.length >= 8 && document.getElementById("old_password").value.indexOf(" ") == -1 && document.getElementById("new_password").value.length >= 8 && document.getElementById("new_password").value.indexOf(" ") == -1 && document.getElementById("confirm_password").value length >= 8 && document.getElementId("confirm_password").value.indexOf(" ") == -1 && document.getElementById("new_password").value != document.getElementById("confirm_password").value) {
  document.getElementById("minium_8_characters_1").style.display = "none";
  document.getElementById("minium_8_characters_2").style.display = "none";
  document.getElementById("minium_8_characters_3").style.display = "none";
  document.getElementById("minium_8_characters_4").style.display = "none";
  document.getElementById("error").style.display = "block";
 }
}

