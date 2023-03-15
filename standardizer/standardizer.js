const jsonData = [];//global declare
const jsonDataforSAS=[];
// search

$(document).ready(function(){
// navbar for Master account details
  $('#btn-nav-previous').click(function(){
    $(".menu-inner-box").animate({scrollLeft: "-=100px"});
   
});

$('#btn-nav-next').click(function(){
    $(".menu-inner-box").animate({scrollLeft: "+=100px"});

});
$('.menu-item').click(function() {
  $('.menu-item').removeClass('active');
  $(this).addClass('active');
});

// Search functionality

  $('#searchid').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('table tbody tr').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

});




// button change color on click
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});





// source  account structure
// fetch("./Standard-CofA.csv")
//   .then(res => res.text())
//   .then(data => {
//     const result = data.split(/\r?\n|\r/).map(e => e.split(",")).splice(1);
//     const jsonDataforSAS = [];

//     result.forEach(e => {
//       const obj = {
//         Type: e[0],
//         Group: e[1],
//         SubGroup: e[2],
//         Number: e[3],
//         Name: e[4],
//         Keywords: e[5],
//         Description: e[6]
     
//       };

//       jsonDataforSAS.push(obj);
//     });
//     console.log(jsonDataforSAS);
//     jsonDataforSAS.forEach(e => {
//       $("#SAStable").append("<div class='divclass d-flex justify-content-between'>" + e.Number + " " + e.Name + "<i class='material-icons md-10'>done_all history</i></div>");
//     });
//   });

 //  source  account structure navbar click functionality
 $('.accounttypebtn').click(function(){
  debugger
  var navbarvalue = $(this).data("value");
  const sourceaccountnavbarmaplist={
    "Assets":"Assets",
    "Liability":"Liabilities",
    "Equity/Capital":"Equity",
    "Revenue":"Revenue",
    "CoGS":"COGS",
    "G&A Expenses":"Expense",
    "Other Revenue & Expense":"Other Rev & Exp"
  };
  listmatchonnavbar=sourceaccountnavbarmaplist[navbarvalue];
  $("#SAStable").html('');
fetch("./Standard-CofA.csv")
.then(res => res.text())
.then(data => {
  const result = data.split(/\r?\n|\r/).map(e => e.split(","));
  const jsonDataforSAS = [];

  result.forEach(e => {
    const obj = {
      Type: e[0],
      Group: e[1],
      SubGroup: e[2],
      Number: e[3],
      Name: e[4],
      Keywords: e[5],
      Description: e[6]
   
    };

    jsonDataforSAS.push(obj);
  });
  console.log(jsonDataforSAS);
});
jsonDataforSAS.forEach(e => {

  if(e.Type == listmatchonnavbar){
    if(e.Number != ""){
      $("#SAStable").append("<div class='divclass d-flex justify-content-between'>" + e.Number + " " + e.Name + "<i class='material-icons md-10'>done_all history</i></div>");

    }
  } 
  
});

});


 //  destination  account structure navbar click functionality
  $('.menu-item').click(function(){
    var navbarvalue = $(this).data("value");
    const Masternavbarmaplist={
      "Assets":"ASSETS",
      "Liabilities":"LIABILITIES",
      "Equity/Capital":"EQUITY/CAPITAL",
      "Revenue":"Professional Services Revenue",
      "CoGS":"Product Revenue",
      "Expense":'"Outside (or "1099") Professional Services Costs"',
      "Other":"Product Costs"
    };
    listmatchonnavbar=Masternavbarmaplist[navbarvalue];
    $("#masterdata").html('');

    //  destination  account structure
    fetch("./MasterChartOfAcounts - Sheet1.csv")
  .then(res => res.text())
  .then(data => {
    const result = data.split(/\r?\n|\r/).map(e => e.split(",")).splice(1);
   

    result.forEach(e => {
      const obj = {
        AccountTypeCode: e[0],
        AccountTypeName: e[1],
        SubAccountTypeCode: e[2],
        SubAccountName: e[3],
        AccountCode: e[4],
        AccountName: e[5],
        SpecialtyEmergencyCashBasis: e[6],
        SpecialtyEmergencyAccrualBasis: e[7],
        GeneralPracticeCashBasis: e[8],
        GeneralPracticeAccrualBasis: e[9],
        GPSpecERHybridCashBasis: e[10],
        GPSpecERHybridAccrualBasis: e[11],
        EquineCashBasis: e[12],
        EquineAccuralBasis: e[13]
      };

      jsonData.push(obj);
    });
    console.log(jsonData);
    
  });
    jsonData.forEach(e => {

      if(e.AccountTypeName == listmatchonnavbar){
        if(e.AccountCode != ""){
          $("#masterdata").append("<div class='divclass d-flex'><i class='material-icons'>drag_indicator</i>" + e.AccountCode + "--" + e.AccountName + "</div>");

          $('#mostlikelyid').append("<div class='mostlikelyclass'>"+ " " +"</div>")
          $('#likelyid').append("<div class='likelyclass'>"+ " " +"</div>")
          $('#Possibleid').append("<div class='Possibleclass'>"+ " " +"</div>")
        }
      } 
      
    });

  });

  //all data navbar value
  $('.all-data').click(function(){
    jsonData.forEach(e => {
      if(e.Number != ""){
        $("#masterdata").append("<div class='divclass d-flex'><i class='material-icons'>drag_indicator</i>" + e.AccountCode + "--" + e.AccountName + "</div>");
      }
    });
  });





  