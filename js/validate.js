// JavaScript for form validation goes here!

//Hook up the form submit button to a validate function
$(document).ready(function(){
   $('input[type="submit"]').on("click", validate); 
});

//perform validation logic on form inputs
function validate(event)
{
    //prevent the form from submitting
    
    event.preventDefault();
    
    //remove old error messages
    removeErrors();
    
    var isError = false;
    
    //validate employee id to be 10 characters
    var id = $("#emp-id").val();
    if (id.length != 10){
        report("emp-id-error", "employee id must be 10 characters long");
        isError = true;
    }
    
    //validate that hours are numeric and between 1-100
    var hours = parseInt($("#hours").val());
    if (!Number.isInteger(hours)){
        report("hours-error", "hours must be numeric");
        isError = true;
    }else if (hours < 1 || hours > 100){
        report("hours-error", "hours must be between 1 and 100");
        isError = true;
    }
    
    //validate rate - must be numeric and postive
    var rate = parseInt($('#payrate').val());
    if(!Number.isInteger(rate)){
        report("payrate-error", "rate must be numeric");
        isError = true;
    }else if (rate < 0){
        report("payrate-error", "rate must be positive");
        isError = true;
    }
    
    
    //submit the form if all data is good
    if(!isError){
        $("#payroll-form").submit();
    }
    
}

//Update form.php to display error message
function report(id, message)
{
  $("#" + id).html(message);
  $("#" + id).parent().show();
}

//clear any previous errors
function removeErrors()
{
  $("#emp-id-error").parent().hide();
  $("#hours-error").parent().hide();
  $("#payrate-error").parent().hide();
}


