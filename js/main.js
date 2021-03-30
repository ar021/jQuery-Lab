let $skill = $('skill-field');
let $newSkill = $('<tr><td id="skills"><label><input type="checkbox"> Cascading Style Sheets(CSS)</label></td></tr>');



$('button').on('click', function(e){
    let $enterSkill = $('.skill-field').val();
    let skillString = `<tr class="skills"><td><span class="delete">X</span>${$enterSkill}</td></tr>`;
    
    $('tbody').append(skillString);
    $enterSkill = $('.skill-field').val('');
    // document.querySelector('.skill-field').value = "";
    // console.log(enterSkill);
});

$('tbody').on('click', 'span', function(evt) {
    const ss = $(this).closest('tr').remove();
    ss.remove();
});
