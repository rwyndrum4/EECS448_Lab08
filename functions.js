function myFunc()
{
  var firstpassword = document.getElementById("firstpassword");
  var secondpassword = document.getElementById("secondpassword");
  console.log(firstpassword);
  console.log(secondpassword);
  if(firstpassword.value.length < 8){
    alert("Please enter a password longer than 8 chars.");
  }
  else if(firstpassword.value == secondpassword.value){
    alert("Password validated");
  }
  else{
    alert("Passwords don't match...");
    console.log(firstpassword);
    console.log(secondpassword);
  }
}

function changeForward()
{

  const image = ["image0.jpeg", "image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];
  var current = document.getElementById("Sully");
  console.log(current.src);
  var filename = current.getAttribute('src');
  /*
  for(let i = 0; i < 5; i++)
  {
    if(i == 4)
    {
      current.src = "image0.jpeg"
    }
    if(current.src == image[i])
    {
      current.src = image[i+1];
      break;
    }
  }
/*/

  if (filename == "image0.jpeg")
  {
    console.log("Inside first if statement");
    current.src = "image1.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image1.jpeg")
  {
    console.log("Inside second if statement");
    current.src = "image2.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image2.jpeg")
  {
    console.log("Inside third if statement");
    current.src = "image3.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image3.jpeg")
  {
    console.log("Inside fourth if statement");
    current.src = "image4.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image4.jpeg")
  {
    console.log("Inside fifth if statement");
    current.src = "image0.jpeg";
    console.log(current.src);
    return;
  }
//*/
/*
switch (current.src){
  case "image0.jpeg":
    current.src = "image1.jpeg" + new Date().getTime();
  case "image1.jpeg":
    current.src = "image2.jpeg";
  case "image2.jpeg":
    current.src = "image3.jpeg";
  case "image3.jpeg":
    current.src = "image4.jpeg";
  case "image4.jpeg":
    current.src = "image0.jpeg";
}
    */



}

function changeBackward()
{
  var current = document.getElementById("Sully");
  console.log(current.src);
  var filename = current.getAttribute('src');

  if (filename == "image2.jpeg")
  {
    console.log("Inside first if statement");
    current.src = "image1.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image3.jpeg")
  {
    console.log("Inside second if statement");
    current.src = "image2.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image4.jpeg")
  {
    console.log("Inside third if statement");
    current.src = "image3.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image0.jpeg")
  {
    console.log("Inside fourth if statement");
    current.src = "image4.jpeg";
    console.log(current.src);
    return;
  }
  if (filename == "image1.jpeg")
  {
    console.log("Inside fifth if statement");
    current.src = "image0.jpeg";
    console.log(current.src);
    return;
  }
}
