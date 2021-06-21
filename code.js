var names_of_people = [];

function submit() {
    var guestName = document.getElementById("guest_input").value;
    names_of_people.push(guestName);
    document.getElementById("display_array").innerHTML = names_of_people;
    console.log(names_of_people);
}

function show() {
    var remove_commas = names_of_people.join("<br> <br>");
    document.getElementById("display_without_commas").innerHTML = remove_commas;
    console.log(remove_commas);
}

function sort() {
    names_of_people.sort();
    console.log(names_of_people);
    var remove_commas = names_of_people.join("<br> <br>");
    console.log(remove_commas);
    document.getElementById("display_after_sorting").innerHTML = remove_commas;
}

function search() {
    var search = document.getElementById("search_input").value;
    var found = 0;
    var j;

    for (var j = 0; j < names_of_people.length; j++) {
        if (search==names_of_people[j]) {
            found = found + 1;
        } 
    }

    document.getElementById("found_not_found").innerHTML = "Name found " + found + " time/s";
    console.log("Name found " + found + " time/s");
}