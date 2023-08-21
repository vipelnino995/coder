

var userslist = $('#userslist')
var form = $('#submit')
var click = $('#click')
var edit = $('#exampleModal')
var users = [
    { stt: 1, name: 'nhat', class: 1, age: 19 },
    { stt: 2, name: 'loc', class: 3, age: 23 },
    { stt: 3, name: 'quan', class: 4, age: 29 },
    { stt: 4, name: 'thao', class: 4, age: 19 },
    { stt: 5, name: 'huong', class: 5, age: 22 }
]
render(userslist, users)

function render(container, items) {
    var item = items.map(function (h) {
        return `
            <tr>
                <td>${h.stt}</td> 
                <td>${h.name}</td>
                <td>${h.class}</td>
                <td>${h.age}</td>
                <td> <button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#exampleModal">
                Edit
            </button>
            </td>
            </tr>
            `
            
    })
    container.html(item)
}


form.on('submit', function (e) {
    e.preventDefault()
    var items = users
    var fullname = $('#fullname').val();
    var listclass = $('#list-class').val();
    var age = $('#age').val();



    items.push(
        {
            stt: users.length + 1,
            name: fullname,
            class: listclass,
            age: age
        }
    )

    render(userslist, items)
})

$('#filter-name,#filter-class,#filter-age').on('input', function () {
    doFilter();
});

function doFilter() {
    var filterName = $('#filter-name').val();
    var filterClass = $('#filter-class').val();
    var filterAge = $('#filter-age').val();

    var result = users
    if (filterName) {
        result = result.filter(function (h) {
            return h.name.indexOf(filterName) > -1;
        })
    }

    if (filterClass) {
        result = result.filter(function (h) {
            return h.class == filterClass;
        })
    }

    if (filterAge) {
        result = result.filter(function (h) {
            return h.age >= filterAge;
        })
    }
    
    

    render(userslist, result)
}
//  
var sortBy = null; // fullname, age, class
var sortType = 'desc'; // asc, desc
$('.sort.small').on('click', function () {
    // $("i").removeClass("opacity-03");
    $('i.fa').addClass('opacity-03')

    if (sortType == 'desc') {
        $(this).find('.fa.fa-arrow-up').removeClass("opacity-03");
        sortType = 'asc';
    } else {
        $(this).find('.fa.fa-arrow-down').removeClass("opacity-03");
        sortType = 'desc';
    }
    
    sortBy = $(this).attr('abc');

    doSort(sortBy);
});

function doSort(rel) {
    users.sort(function (a, b) {
        if (rel == 'fullname') {
            var x = a.name[0]
            var y = b.name[0]

            return (sortType == 'desc') ? y.charCodeAt() - x.charCodeAt() : x.charCodeAt() - y.charCodeAt();

        } else {
            return (sortType == 'desc') ? b[rel] - a[rel] : a[rel] - b[rel];
        }

    })

    render(userslist, users)

}
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// $('.btn.btn-primary.edit').on('click', function () {
//     $('.edit')
// })
// $(document).on('click','.edit', function() {
//     //...
//     $('#exampleModal').trigger('focus')
//   })
  
 