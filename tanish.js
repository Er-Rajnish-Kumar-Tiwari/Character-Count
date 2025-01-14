$(document).ready(function() {
    const msg = $('#p3');
    const bo = $('#box');
    const maxlater = 300;

    $('#t1').on('input', function() {
        const leng = $(this).val().length;
        const fl = maxlater - leng;

        if(fl!=0){
            msg.text(`Total Character :- ${fl}`);
            msg.css("color","black");
        }
        if(fl<0){
            msg.text("Total Character :- Limit Cross");
            msg.css("color","red");
            alert("Stop Writing");
        }

        if (fl >= 200 && fl <= 300) {  
            bo.css("width", "50px");
        } else if(fl>=100 && fl<200) {
            bo.css("width", "250px"); 
        }
        else{
            bo.css("width","500px");
        }
    });
});
