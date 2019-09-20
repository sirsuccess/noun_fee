$(document).ready(function(){
    console.log("am here")

    $(".fa-window-close").click(function(){
        console.log("am here hh")
        $(".card1").hide("li");
    });
    //add new couse
    $(".fa-plus-square").click(function(){
        console.log("am here plus")
        $(".card1").append(`<li class="one-course">
        <div class="col-md-2 mb-3">
          <label for="validationTooltip04">COURSE CODE</label>
          <input type="text" class="form-control" id="validationTooltip04" placeholder="COURSE CODE" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationTooltip04">COURSE TITLE</label>
          <input type="text" class="form-control" id="validationTooltip04" placeholder="COURSE TITLE" required>
        </div>

        <div class="col-md-1 mb-3">
          <label for="validationTooltip04">CU</label>
          <input type="number" class="form-control cu" oninvalid="alert('You must fill out the form!');" max="10" min="1" id="validationTooltip04" required>
        </div>
        <div class="col-md-1 mb-3 text-center">
            <label for="exam" >Exam</label>
            <input type="checkbox" value="1000" class="form-control" id="exam" required>
          </div>
          <div class="col-md-2 mb-3">
              <label for="validationTooltip04">Amount</label>
              <input type="text" class="form-control" id="validationTooltip04" placeholder="0" required>
            </div>
          
          <span class="fa fa-window-close text-danger"></span>
        </li>`);
      });



      setInterval(function(){ 
        //   let project = $(".project").val().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        //     $(".semTotal").html(project)
        }, 1000)
        var countChecked = function() {
            var n = $( "input:checked" ).length;
            $( "span" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
            let project = $(".project").val().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            $(".semTotal").html("5000")
          };
          

          $( "input[type=checkbox]" ).on( "click", countChecked );
          
  });