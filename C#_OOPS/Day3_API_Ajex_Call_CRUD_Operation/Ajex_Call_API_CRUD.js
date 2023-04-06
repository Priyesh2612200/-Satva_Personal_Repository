
$(document).ready(function () {
    $('#addnewdata').click(function(){
        $('#eventtitle').val('');
        $('#start_date').val('');
        $('#end_date').val('');
        $('#eventdesc').val('');
        $('#eventprio').val('');
      });
    
    //GET Data From API
    $('#getdatafromapi').click(function () {
        // var start_Date = $('#startdate').val();
        // var end_Date = $('#enddate').val();

        $.ajax({
            url: 'https://demosatva.azurewebsites.net/v1/api/Events',
            type: 'GET',
            // data: {

            //     startDate: start_Date,
            //     endDate: end_Date
            // },

            success: function (data) {
                console.log(data);
                var rows = '';

                // data.document.startDate = data.document.records.startDate.slice(0,-9);
                // data.document.startDate = data.document.records.endDate.slice(0, -9);

                $.each(data.document.records, function (index, record) {
                    rows += '<tr data-id="' + record.id + '">';
                    rows += '<td>' + record.eventTitle + '</td>';
                    rows += '<td>' + record.startDate + '</td>';
                    rows += '<td>' + record.endDate + '</td>';
                    rows += '<td>' + record.eventDescription + '</td>';
                    rows += '<td>' + record.eventPriority + '</td>';
                    rows += '<td><button class="edit-btn" data-id="' + record.id + '">Edit</button></td>' + '<td><button id="delete-btn" data-id="' + record.id + '">Delete</button></td>';
                    rows += '</tr>';
                });

                $('#myTable tbody').html(rows);
            }
        });
    });

    //POST Data From API
    $('#adddatainapi').click(function () {

       

        var eventData = {
            eventTitle: $('#eventtitle').val(),
            startDate: $('#start_date').val(),
            endDate: $('#end_date').val(),
            eventDescription: $('#eventdesc').val(),
            eventPriority: $('#eventprio').val()
        };


        $.ajax({
            url: 'https://demosatva.azurewebsites.net/v1/api/Events',
            type: 'POST',
            data: JSON.stringify(eventData),
            contentType: 'application/json',
            success: function (data) {
                console.log('Event added successfully:', data);
                swal("Data add successfully in API", "You clicked the button!", "success");
            },
            error: function (xhr, status, error) {
                console.error('Error adding event:', error);
            }
        });
    });

    //Edit Data In API
    $(document).on('click', '.edit-btn', function () {
        // Hide the save button inside the model
        $('#adddatainapi').hide();
        $('#updateinapi').show();

        var id = $(this).data('id');

        $.ajax({
            url: 'https://demosatva.azurewebsites.net/v1/api/Events/' + id,
            type: 'GET',
            success: function (data) {

                // data.document.startDate = data.document.startDate.slice(0, 10).split('-').join('/');
                // data.document.endDate = data.document.endDate.slice(0, 10).split('-').join('/');

                $('#eventtitle').val(data.document.eventTitle);
                $('#start_date').val(getFormattedDate(new Date(data.document.startDate)));
                $('#end_date').val(getFormattedDate(new Date(data.document.endDate)));
                $('#eventdesc').val(data.document.eventDescription);
                $('#eventprio').val(data.document.eventPriority);






                $('#exampleModal').modal('show');


                $(document).on('click', '#updateinapi', function () {
                    // var requestObj = { id: id,
                    // model : {
                    //     id:id,
                    //     eventTitle: $('#eventtitle').val(),
                    //     startDate: $('#start_date').val(),
                    //     endDate: $('#end_date').val(),
                    //     eventDescription: $('#eventdesc').val(),
                    //     eventPriority: $('#eventprio').val()
                    // }  };
                    debugger
                    var requestObj = {
                        id: id,
                        eventTitle: $('#eventtitle').val(),
                        startDate: $('#start_date').val(),
                        endDate: $('#end_date').val(),
                        eventDescription: $('#eventdesc').val(),
                        eventPriority: $('#eventprio').val()
                    }

                    // $.ajax({
                    //     url: 'https://demosatva.azurewebsites.net/v1/api/Events/' + id,
                    //     type: 'PUT',
                    //     data: JSON.stringify(requestObj),
                    //     contentType: 'application/json',
                    //     success: function (data) {
                    //         console.log(data);

                    //         $.each(data ,function (index, records) {
                    //             $('#data-table tbody').append(
                    //             // '<tr data-id="' + record.id + '">'+
                    //             '<td>' + data.document.records.eventTitle + '</td>'+
                    //              '<td>' + data.document.records.startDate + '</td>'+
                    //             '<td>' + data.document.records.endDate + '</td>'+
                    //             '<td>' + data. document.records.eventDescription + '</td>'+
                    //             '<td>' + data.document.records.eventPriority + '</td>'+
                    //             '<td><button class="edit-btn" data-id="' + record.id + '">Edit</button></td>' + '<td><button id="delete-btn" data-id="' + record.id + '">Delete</button></td>'+
                    //             '</tr>'
                    //             );
                            
                    //         });
                    //         $('#myTable tbody').html(rows);

                    //         console.log('Event updated successfully:', data);
                    //         swal("Data updated successfully in API", "You clicked the button!", "success");

                    //         $('#exampleModal').modal('hide');
                    //     },
                    //     error: function (xhr, status, error) {
                    //         console.error('Error updating event:', error);
                    //     }
                    // });
                    $.ajax({
                        url: 'https://demosatva.azurewebsites.net/v1/api/Events/' + id,
                        type: 'PUT',
                        data: JSON.stringify(requestObj),
                        contentType: 'application/json',
                        success: function (data) {
                            var rows = '';
                            console.log(data);
                    
                            // Use the correct variable name 'record' instead of 'records'
                            $.each(data.document, function (index, record) {
                                $('#data-table tbody').append(
                                    
                                    '<tr data-id="' + record.id + '">'+
                                    '<td>' + record.eventTitle + '</td>'+
                                    '<td>' + record.startDate + '</td>'+
                                    '<td>' + record.endDate + '</td>'+
                                    '<td>' + record.eventDescription + '</td>'+
                                    '<td>' + record.eventPriority + '</td>'+
                                    '<td><button class="edit-btn" data-id="' + record.id + '">Edit</button></td>' +
                                    '<td><button id="delete-btn" data-id="' + record.id + '">Delete</button></td>'+
                                    '</tr>'
                                );
                            });
                            
                            // Use the correct table ID 'data-table' instead of 'myTable'
                            // Also, clear the table before appending data to avoid duplicate records
                            $('#data-table tbody').html('');
                            $('#data-table tbody').html(rows);
                    
                            console.log('Event updated successfully:', data);
                            swal("Data updated successfully in API", "You clicked the button!", "success");
                    
                            $('#exampleModal').modal('hide');
                        },
                        error: function (xhr, status, error) {
                            console.error('Error updating event:', error);
                        }
                    });
                    
                });
            }
        });
    });

    //Delete Data in API
    $(document).on('click', '#delete-btn', function () {
        var id = $(this).data('id');
        $.ajax({
            url: 'https://demosatva.azurewebsites.net/v1/api/Events/' + id,
            type: 'DELETE',
            success: function (result) {
                console.log('Record deleted successfully');
                swal("Record delete successfully from API ", "You clicked the button!", "success");
                // Remove the row from the table
                $('#myTable tr[data-id="' + id + '"]').remove();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error deleting record');
            }
        });

    });

    $("#adddatainapi").click(function () {
        $("#exampleModal").modal('hide');
    });

    $('#addnewdata').click(function () {
        $('#adddatainapi').show();
        $('#updateinapi').hide();
    });


    $("#search").keyup(function () {

        var searchVal = $(this).val();

        $("#myTable tbody").empty();

        $.ajax({

            url: `https://demosatva.azurewebsites.net/v1/api/Events/search?searchKey=${searchVal}&page=1&itemsPerPage=100`,
            // dataType: 'jsonp',
            type:"GET",
            accept: 'application/json',
            success: function (data) {
                var rows = "";
                $.each(data.document.records, function (index, record) {
                    rows += '<tr data-id="' + record.id + '">';
                    rows += '<td>' + record.eventTitle + '</td>';
                    rows += '<td>' + record.startDate + '</td>';
                    rows += '<td>' + record.endDate + '</td>';
                    rows += '<td>' + record.eventDescription + '</td>';
                    rows += '<td>' + record.eventPriority + '</td>';
                    rows += '<td><button class="edit-btn" data-id="' + record.id + '">Edit</button></td>' + '<td><button id="delete-btn" data-id="' + record.id + '">Delete</button></td>';
                    rows += '</tr>';
                });
                $('#myTable tbody').html(rows);
            }

        });
    });

   

});

function getFormattedDate(date) {
    var editDate = new Date(date).toISOString().split('T')[0];
    // var year = date.getFullYear().toString();

    // var month = (1 + date.getMonth()).toString();
    // month = month.length > 1 ? month : '0' + month;

    // var day = date.getDate().toString();
    // day = day.length > 1 ? day : '0' + day;

    // return month + '/' + day + '/' + year;
    return editDate;
}
