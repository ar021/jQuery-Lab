let $skill = $('skill-field');
let $newSkill = $('<tr><td id="skills"><label><input type="checkbox"> Cascading Style Sheets(CSS)</label></td></tr>');



$('button').on('click', function(e){
    let $enterSkill = $('.skill-field').val();
    let skillString = `<tr class="skills"><td><label><input type="checkbox"> ${$enterSkill}</label></td></tr>`;
    $('tbody').append(skillString);
    $enterSkill = $('.skill-field').val('');
    // document.querySelector('.skill-field').value = "";
    // console.log(enterSkill);
});

$('tbody').on('click', 'tr', function(evt) {
    const ss = $(this).remove();
    ss.remove();
});
