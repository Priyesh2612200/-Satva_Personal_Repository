const jsonData = [];//global declare
const jsonDataforSAS = [];
// search

$(document).ready(function () {

  $('#assetsBtn').click();

  // $(".accounttypebtn").click(function () {
  //   $('html, body').animate({
  //     scrollLeft: $(".accounttypebtn").offset().left
  //   }, 2000);
  // });

  // navbar for Master account details
  $('#btn-nav-previous').click(function () {
    $(".menu-inner-box").animate({ scrollLeft: "-=100px" });

  });

  $('#btn-nav-next').click(function () {
    $(".menu-inner-box").animate({ scrollLeft: "+=100px" });

  });
  $('.menu-item').click(function () {
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
  });

  // Search functionality
  $('#searchid').keyup(function () {
    var value = $(this).val().toLowerCase();
    var exp = new RegExp('^' + value, 'i');

    $('#masterdata').children().each(function () {
      var isMatch = exp.test($(this).text());
      console.log($(this).text().toLowerCase().includes(value), $(this).text());
      $(this).toggle($(this).text().toLowerCase().includes(value));
    });





  });

  // $('#searchid').on('keyup', function () {

  //   var value = $(this).val().toLowerCase();
  //   $("#masterdata").children().each(function () {
  //     $(this).hide();
  //     console.log(this);
  //   })

  //   $("#masterdata").children().each(function () {
  //     $(this).toggle($(this).text().toLowerCase().includes(value));
  //     console.log($(this).text().toLowerCase().includes(value));
  //   })

  //   });
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
//       $("#SAStable").append("<div class='masterdataclass d-flex justify-content-between'>" + e.Number + " " + e.Name + "<i class='material-icons md-10'>done_all history</i></div>");



//       $('#mostlikelyid').append("<div class='mostlikelyclass'>" + " " + "</div>")
//       $('#likelyid').append("<div class='likelyclass'>" + " " + "</div>")
//       $('#Possibleid').append("<div class='Possibleclass'>" + " " + "</div>")

//     });


//   });

//  destination  account structure
//    fetch("./MasterChartOfAcounts - Sheet1.csv")
//    .then(res => res.text())
//    .then(data => {
//      const result = data.split(/\r?\n|\r/).map(e => e.split(",")).splice(1);


//      result.forEach(e => {
//        const obj = {
//          AccountTypeCode: e[0],
//          AccountTypeName: e[1],
//          SubAccountTypeCode: e[2],
//          SubAccountName: e[3],
//          AccountCode: e[4],
//          AccountName: e[5],
//          SpecialtyEmergencyCashBasis: e[6],
//          SpecialtyEmergencyAccrualBasis: e[7],
//          GeneralPracticeCashBasis: e[8],
//          GeneralPracticeAccrualBasis: e[9],
//          GPSpecERHybridCashBasis: e[10],
//          GPSpecERHybridAccrualBasis: e[11],
//          EquineCashBasis: e[12],
//          EquineAccuralBasis: e[13]
//        };

//        jsonData.push(obj);
//      });
//      console.log(jsonData);

//    });
//  jsonData.forEach(e => {


//        $("#masterdata").append("<div class='masterdataclass' style='display:flex'><i class='material-icons'>drag_indicator</i>" + e.AccountCode + "--" + e.AccountName + "</div>");



//    });






//  source  account structure navbar click functionality
$('.accounttypebtn').click(function () {



  var navbarvalue = $(this).data("value");

  const sourceaccountnavbarmaplist = {
    "Assets": "Assets",
    "Liability": "Liabilities",
    "Equity/Capital": "Equity",
    "Revenue": "Revenue",
    "CoGS": "COGS",
    "G&A Expenses": "Expense",
    "Other Revenue & Expense": "Other Rev & Exp"
  };
  listmatchonnavbar = sourceaccountnavbarmaplist[navbarvalue];
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

      //clear field of mostlikely,mostli,possible

      var mostlikely = document.getElementById('mostlikelyid');
      mostlikely.innerHTML = '';

      var likely = document.getElementById('likelyid');
      likely.innerHTML = '';

      var possible = document.getElementById('Possibleid');
      possible.innerHTML = '';

      jsonDataforSAS.forEach(e => {
        if (e.Type == listmatchonnavbar) {
          if (e.Number != "") {


            $("#SAStable").append("<div class='divclassSAS '>" + e.Number + " " + e.Name + "<i class='material-icons'>done_all history</i></div>");

            $('#mostlikelyid').append("<div class='mostlikelyclass drag'>" + " " + "</div>")
            $('#likelyid').append("<div class='likelyclass drag'>" + " " + "</div>")
            $('#Possibleid').append("<div class='Possibleclass drag'>" + " " + "</div>")
          }
        }
      });

      $("a[data-value='" + navbarvalue + "']").trigger("click");

    });



});



//  destination  account structure navbar click functionality

$('.menu-item').click(function () {


  var navbarvalue = $(this).data("value");
  const Masternavbarmaplist = {
    "Assets": "ASSETS",
    "Liability": "LIABILITIES",
    "Equity/Capital": "EQUITY/CAPITAL",
    "Revenue": "Professional Services Revenue",
    "CoGS": "Product Revenue",
    "G&A Expenses": '"Outside (or "1099") Professional Services Costs"',
    "Other Revenue & Expense": "Product Costs"
  };
  listmatchonnavbar = Masternavbarmaplist[navbarvalue];
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

    if (e.AccountTypeName == listmatchonnavbar) {
      if (e.AccountCode != "") {
        $("#masterdata").append("<div class='masterdataclass' style='display:flex'><i class='material-icons'>drag_indicator</i>" + e.AccountCode + "--" + e.AccountName + "</div>");


      }
    }

  });


  //draggebal

  var dest = document.getElementById('masterdata');

  new Sortable(dest, {
    group: {
      name: "shared",
      pull: "clone",
      put: false
    },
    animation: 100,
    sort: false

  });


  $(".drag").each(function () {
    new Sortable(this, {
      group: "shared",
      animation: 100
    });
  });

});

//all data navbar value
$('.all-data').click(function () {
  jsonData.forEach(e => {
    if (e.Number != "") {
      $("#masterdata").append("<div class='masterdataclass d-flex'><i class='material-icons'>drag_indicator</i>" + e.AccountCode + "--" + e.AccountName + "</div>");
    }
  });
});
