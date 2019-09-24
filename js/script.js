function preview(certId) {
  const certList = document.getElementById(certId);
  certList.remove()
  
}



$(document).ready(function(){
    console.log("am here")

    // function preview(certId) {
    //     console.log(certId)
    //     // id.hide("li");
    // };


    

    //add new couse
    $(".fa-plus-square").click(function(){
      let id = Math.floor(Math.random() * 50)
        $(".card1").append(`<li class="one-course" id="${id}" class="am">
        <div class="col-sm-2 mb-3">
          <label for="validationTooltip04">COURSE CODE</label>
          <input type="text" class="form-control" id="validationTooltip04" placeholder="COURSE CODE" required>
        </div>
        <div class="col-sm-3 mb-3">
          <label for="validationTooltip04">COURSE TITLE</label>
          <input type="text" class="form-control" id="validationTooltip04" placeholder="COURSE TITLE" required>
        </div>

        <div class="col-sm-1 mb-3">
          <label for="validationTooltip04">CU</label>
          <input type="number" class="form-control cu" oninvalid="alert('You must fill out the form!');" max="10" min="1" id="validationTooltip04" required>
        </div>
        <div class="col-sm-1 mb-3 text-center">
            <label for="exam" >Exam</label>
            <input type="checkbox" value="1000" class="form-control" id="exam" required>
          </div>
          <div class="col-sm-2 mb-3">
              <label for="validationTooltip04">Amount</label>
              <input type="text" class="form-control" id="validationTooltip04" placeholder="0" required>
            </div>
          
            <i  onclick="preview(${id})" class="fa fa-window-close text-danger sm"></i>
        </li>`);
      });




      let level = ""
      let project =0;
      let seminar = 0;
      let student =0
      let tp = 0;
      field =0

      setInterval(function(){ 
        //   let project = $(".project").val().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')    
        level =   $( ".level" ).val()
        newLevel = level=="postGraduate"?25000:15000
        studentStatus = $(".studentStatus").val()
        
        
        
        // console.log(tp)
        if(level=="postGraduate" && studentStatus=="newStudent"){
            student=35000
        }else if(level=="Undergraduate" && studentStatus=="newStudent"){
            student=36000
        }else{
            student=18000
        }
        

        
        let total = (Number(project)+Number(seminar)+Number(field)+Number(tp))
            $(".nonExamTotal").text(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
            $(".semTotal").text(student.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))

        $(".grantTotal").html((total+student).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        }, 50)


        var projectChecked = function() {
            var n = $( ".project:checked" ).length;
            let level = $( ".level" ).val()=="postGraduate"?25000:10000
            if (n==1){
                 project = newLevel;
            }else{
            project =0
            }
          };
        
          $( "input[type=checkbox]" ).on( "click", projectChecked );

        var seminarChecked = function() {
            var n = $( ".seminar:checked" ).length;
            // $( "span" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
            if (n==1){
                seminar = $(".seminar").val()
            }else{
            seminar =0
            }
          };
        
          $( "input[type=checkbox]" ).on( "click", seminarChecked );


        var tpChecked = function() {
            var n = $( ".tp:checked" ).length;
            if (n==1){
                tp = $(".tp").val()
            }else{
                tp =0
            }
          };
        
          $( "input[type=checkbox]" ).on( "click", tpChecked );


        var fieldChecked = function() {
            var n = $( ".field:checked" ).length;
            if (n==1){
                field = $(".field").val()
            }else{
                field =0
            }
          };
        
          $( "input[type=checkbox]" ).on( "click", fieldChecked );
          
  });