function userDetails(id, name) {
    if (id) {
        console.log(id);
    }
    ;
    if (name) {
        console.log(name);
    }
    ;
    return id + name;
}
;
var userData;
userData = userDetails;
userData(121, 'Seema');
