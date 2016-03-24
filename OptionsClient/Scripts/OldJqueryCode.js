<script>
    // var baseUrl = 'http://localhost:51256/api/flintstones/';
    var baseUrl = 'http://flintstones.zift.ca/api/flintstones/';

$(function () {
    $("#tabs").tabs();
});
function GetAllFlintstones(target) {
    jQuery.support.cors = true;
    $.ajax({
        url: baseUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data, target);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function WriteResponse(people, target) {
    var strResult = "<table class='ui-state-highlight'><tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Occupation</th><th>Picture</th></tr>";
    $.each(people, function (index, person) {
        strResult += "<tr>\n";
        strResult += "<td>" + ((person.PersonId !== undefined) ? person.PersonId : "") + "</td><td> " + person.FirstName + "</td><td>" + person.LastName + "</td><td>" + person.Occupation + "</td>";
        strResult += "<td><img src='" + person.Picture + "' style='height: 90px' alt='" + person.FirstName + "' /></td>\n"
        strResult += "</tr>\n";
    });
    strResult += "</table>\n";
    $(target).html(strResult);
}

function ShowPerson(person, target) {
    if (person != null) {
        var strResult = "<table class='ui-state-highlight'><tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Occupation</th><th>Picture</th></tr>";
        strResult += "<tr>\n";
        strResult += "<td>" + ((person.PersonId !== undefined) ? person.PersonId : "") + "</td><td> " + person.FirstName + "</td><td>" + person.LastName + "</td><td>" + person.Occupation + "</td>\n";
        if (person.PersonId !== undefined)
            strResult += "<td><img src='" + person.Picture + "' style='height: 90px' alt='" + person.FirstName + "' /></td>\n"
        else
            strResult += "<td>&nbsp</td>\n"
        strResult += "</tr>\n";
        strResult += "</table>\n";
        $(target).html(strResult);
    }
    else {
        $(target).html("No Results To Display");
    }
}

function GetPerson() {
    jQuery.support.cors = true;
    var id = $('#txtEmpid').val();
    $.ajax({
        url: baseUrl + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowPerson(data, "#div_find");
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function AddPerson(target) {
    jQuery.support.cors = true;
    var person = {
        FirstName: $('#txtaddFirstName').val(),
        LastName: $('#txtaddLastName').val(),
        Gender: $('#txtaddGender').val(),
        Occupation: $('#txtaddOccupation').val(),
        Picture: $('#txtaddPicture').val()
    };

    $.ajax({
        url: baseUrl,
        type: 'POST',
        data: JSON.stringify(person),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $('#txtaddFirstName').val("");
            $('#txtaddLastName').val("");
            $('#txtaddGender').val("");
            $('#txtaddOccupation').val("");
            $('#txtaddPicture').val("");
            ShowPerson(data, target);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function DeletePerson(target) {
    jQuery.support.cors = true;
    var id = $('#txtdelPersonId').val()

    if (parseInt(id) < 8) {
        alert('Cannot delete persons 1 .. 7');
    } else {

        $.ajax({
            url: baseUrl + id,
            type: 'DELETE',
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                $('#txtdelPersonId').val("");
                GetAllFlintstones(target);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    }
}
</script>

