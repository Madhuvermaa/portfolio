function myhome() {
    let main = document.getElementById('main');
    let skills = document.getElementById('skills');
    let contact = document.getElementById('contact');

    if (main.style.display == 'none') {

        main.style.display = 'block';
        skills.style.display = 'none';
        contact.style.display = 'none';
    }
    else {
        main.style.display = 'block'
        skills.style.display = 'none';
        contact.style.display = 'none';
    }
}

function myskills() {
    let main = document.getElementById('main');
    let skills = document.getElementById('skills');
    let contact = document.getElementById('contact');

    if (skills.style.display == 'none') {

        skills.style.display = 'block';
        main.style.display = 'none';
        contact.style.display = 'none';
    }
    else {
        skills.style.display = 'block';
        main.style.display = 'none';
        contact.style.display = 'none';
    }
}

function mycontact() {
    let main = document.getElementById('main');
    let skills = document.getElementById('skills');
    let contact = document.getElementById('contact');

    if (contact.style.display == 'none') {

        contact.style.display = 'block';
        main.style.display = 'none';
        skills.style.display = 'none';
    }
    else {
        contact.style.display = 'block';
        main.style.display = 'none';
        skills.style.display = 'none';
    }
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function show(x) {
    if (x == p1) {
        document.getElementById('p1').style.display = 'block';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('p6').style.display = 'none';
    }
    else if (x == p2) {
        document.getElementById('p2').style.display = 'block';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('p6').style.display = 'none';
    }
    else if (x == p3) {
        document.getElementById('p3').style.display = 'block';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('p6').style.display = 'none';
    }
    else if (x == p4) {
        document.getElementById('p4').style.display = 'block';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('p6').style.display = 'none';
    }
    else if (x == p5) {
        document.getElementById('p5').style.display = 'block';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p6').style.display = 'none';
    }
    else if (x == p6) {
        document.getElementById('p6').style.display = 'block';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
    }

}