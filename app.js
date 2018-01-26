var contacts = [
    { name: 'Christian', email: 'christian@yahoo.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' },
    { name: 'Rich', email: 'rich@tripod.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' },
    { name: 'Scott', email: 'scott@mailinator.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' },
    { name: 'Danny', email: 'danny@hotmail.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' },
    { name: 'Taka', email: 'taka@myspace.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'offline' },
    { name: 'Tim', email: 'tim@netscape.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'busy' },
    { name: 'Patrick', email: 'patrick@live.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' },
    { name: 'Jacques', email: 'jacques@aol.com', phone: '323-555-1234', address: '6539 Wilton Ave. </br> Culver City CA 90234', status: 'online' }
];

// Create Name List
var nameList = document.getElementById("contact-names");
nameList.appendChild(makeUL(contacts, "name"));

// Add Event Listeners to Name Lists
var nameListItem = [];
nameListItem = document.querySelectorAll("#contact-names li");
nameListItem.forEach(element => {
    element.addEventListener("click", function () {
        element.classList.toggle("myActive");
        element.getElementsByClassName("dropdown")[0].classList.toggle("d-none");
    })
});

// Create Email / Phone Lists
var emailList = document.getElementById("contact-email")
emailList.appendChild(makeUL(contacts, "email"));
var phoneList = document.getElementById("contact-phone")
phoneList.appendChild(makeUL(contacts, "phone"));

// Add Event Listener to Select
var select = document.getElementById("select")
select.addEventListener("change", function () {
    var index = this.value;
    if (index === "phone") {
        emailList.classList.toggle("d-none");
        phoneList.classList.toggle("d-none")
    } else if (index === "email") {
        phoneList.classList.toggle("d-none")
        emailList.classList.toggle("d-none");
    }
}, false);

// Make a UL with given array, and type of list to make (name, email, phone)
function makeUL(array, element) {
    // Create the list element:
    var list = document.createElement('ul');
    list.classList.add("list-group");
    for (var i = 0; i < array.length; i++) {

        // Create the list item:
        var item = document.createElement('li');
        item.classList.add("list-group-item");

        //Name-Lists contain a div that display more info once clicked
        if (element === "name") {
            var circle = document.createElement('div');
            circle.classList.add('circle', array[i].status);
            item.appendChild(circle);
            item.appendChild(document.createTextNode(array[i].name));

            // Create Dropdown Menu onclick
            var dropDownDiv = document.createElement('div');
            dropDownDiv.classList.add("dropdown", "col-8", "d-none");
            var mailto = document.createElement('p');
            var aMail = document.createElement('a');
            aMail.appendChild(document.createTextNode(array[i].email));
            aMail.href = "mailto:" + array[i].email;
            mailto.appendChild(aMail);
            dropDownDiv.appendChild(mailto);
            var phoneNumber = document.createElement('p');
            phoneNumber.appendChild(document.createTextNode(array[i].phone));
            dropDownDiv.appendChild(phoneNumber);
            var address = document.createElement('p');
            address.innerHTML = array[i].address;
            dropDownDiv.appendChild(address);
            item.appendChild(dropDownDiv);

        } else if (element === "email") {
            item.appendChild(document.createTextNode(array[i].email));
        } else { // element ==="phone"
            item.appendChild(document.createTextNode(array[i].phone));
        }

        list.appendChild(item);
    }

    // return the final constructed list:
    return list;
}