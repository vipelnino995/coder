var users = [{name: 'nhat', gender: 'male'},{name: 'quan', gender: 'male'},{name: 'loc', gender: 'male'},{name: 'thao', gender: 'female'}
];
var userslist = $( '#userslist');
var gender = $( '#gender');


xxx(userslist, users);

gender.on('change', function(){
    var seleced = this.value;
    var filtered = users.filter(function(a){
        return a.gender == seleced;
    });
  xxx(userslist, filtered)  
});
    

function xxx(container, items){
    var item = items.map(function(h){
        return '<li class="list-group-item">' + h.name + '</li>';
    })
    container.html(item);
}