// business logic
function duty(activity, startTime, deadline) {
  this.activity = activity;
  this.startTime = startTime;//ideal/planned starting time
  this.deadline = deadline;
}

duty.prototype = {
  createEntry : function(){
    return "<li><strong>Duty:</strong>  " + this.activity +"<strong>Start Time:</strong>  " + this.startTime + " <strong>Deadline:</strong>  " + this.deadline + "<span id='checkbox'</span></li>"
  }
}

//user interface logic
$(document).ready(function() {
  $("form#to-do").submit(function(event) {
    event.preventDefault();

    var inputtedActivity = $("input#to-do").val();
    var inputtedStartTime = $("input#start").val();
    var inputtedDeadline = $("input#end").val();

    var newDuty = new duty(inputtedActivity,inputtedStartTime,inputtedDeadline);



    $(".entries").show();
    $("ul#entries").append(newDuty.createEntry());

    $(".input").val("");

    $("li").click(function(){

      $(this).addClass("finished");
      $(this).children("#checkbox").html("<input type='checkbox' name='vehicle' value='Car' checked='checked'> ")
    })

  })


})
