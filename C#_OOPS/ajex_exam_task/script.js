
let dataSet;


$.ajax({
    url: 'EmployeeData_10_04_23.json',
    dataType: 'json',
    success: function(data) {
       
        dataSet = data;
       
        console.log('Data fetched successfully:', data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        
        console.log('Error fetching data:', textStatus, errorThrown);
    }
});




var table;
$(document).ready(function () {
    table = $("#EmployeDatatable").DataTable({
        
        data: dataSet,
        language: {
            paginate: {
                next: " Next &#62",
                previous: "&#60 Prev ",
            },
        },

        columnDefs: [
            { orderable: true, targets: 3 },
            
        ],

        columns: [
            {
                title: "#", data: null,
                render: function (data, type, row, meta) {
                    // Render the row number
                    return meta.row + 1;
                }
            },
            {
                data: "Name",
                title: " Name"
            },
            {
                data: "Department",
                title: "Department",
                class: "text-center",
                render: function (data, type, row) {
                    var departmentClass = data.replace(/\s+/g, '-').toLowerCase(); 
                    if (data === "QA") {
                        departmentClass += " specific-department"; 
                        return '<span class="' + departmentClass + '">' + data + '</span>';
                    }
                    if (data === "Development") {
                        return '<span>' + data + '</span>';
                    }
                    if (data === "Sales") {
                        return '<span class=" " style="color: #ff0000;">' + data + '</span>';
                    }
                    if (data === "Marketing") {
                        return '<span class=" " style="color: #006400 ;">' + data + '</span>';
                    }
                    if (data === "HR") {
                        return '<span class=" " style="color: orange;">' + data + '</span>';
                    }
                    if (data === "SEO") {
                        return '<span class=" " style="color: #fe00ef;">' + data + '</span>';
                    }
                    if (data === "QA") {
                        return '<span class=" " style="color: #0000FF;">' + data + '</span>';
                    }
                }

            },
            {
                data: "Email",
                title: "Email",
                class: "text-center",
                render: function (data, type, row) {
                    return '<a href="mailto:' + data + '" style=" text-decoration: none">' + data + '</a>';
                }
            }

            ,
            {
                data: "Phone", title: "PhoneNumber", class: "text-center",
                render: function (data, type, row) {
                    return '<a href="tel:' + data + '" style=" text-decoration: none">' + data + '</a>';
                }
            },
            {
                data: "Gender", title: "Gender", class: "text-center", render: function (data, type, row) {
                    return data.toUpperCase();
                }
            },
            {
                data: null, title: "View", class: "text-center", render: function (data, type, row) {
                    return '<i class="bi bi-eye-fill viewDetails" title="View details"></i>';
                }
            },
        ],
    });


    $('#EmployeDatatable tbody').on('click', '.viewDetails', function () {
        $('#empmodelid').modal('show');

        
        var data = table.row($(this).closest('tr')).data();
       
        $('#name').text(data.Name);
        $('#email').text(data.Email);
        $('#dob').text(data.DOB);
        $('#gender').text(data.Gender);
        $('#designation').text(data.Designation);
        $('#state').text(data.State);
        $('#city').text(data.City);
        $('#postcode').text(data.Postcode);
        $('#phone').text(data.Phone);
        $('#department').text(data.Department);
        $('#monthly').text(data.MonthlySalary);
        $('#joining').text(data.DateOfjoining);
        $('#experience').text(data.Totalexperience);
        $('#remark').text(data.Remarks);


        console.log(data.Name);

    });
});