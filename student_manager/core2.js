var userslist = $('#userslist')
var form = $('#submit')
var click = $('#click')

var users = [
    { stt: 1, name: 'nhat', class: 1, age: 19 },
    { stt: 2, name: 'loc', class: 3, age: 23 },
    { stt: 3, name: 'quan', class: 4, age: 29 },
    { stt: 4, name: 'thao', class: 4, age: 19 },
    { stt: 5, name: 'huong', class: 5, age: 22 }
]
render(userslist, users)
function render(container,items) {
    var item = items.map(function(h){
        return `
        <tr>
            <td>${h.stt}</td>
            <td>${h.name}</td>
            <td>${h.class}</td>
            <td>${h.age}</td>
          
        </tr>        
        `
    })
    container.html(item);
}

$(document).on('click', '#input', function(e){
    e.preventDefault();
    var list = users.length + 1;
    var fullname = $('#fullname').val();
    var myClass = $('#list-class').val();
    var age = $('#age').val();
    var push = users.push(
        {
         stt: list,
         name: fullname,
         class: myClass,
         age: age
        });
    render(userslist,users);
    
})

