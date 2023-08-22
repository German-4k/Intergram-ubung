
// JSON
let posts = [
    {
        'author': 'Tagesschau',
        'image': 'img/img1.jpg',
        'description': 'Text 1 2 3',
        'location': ''
    },

    {
        'author': 'Tagesschau',
        'image': 'img/img1.jpg',
        'description': 'Text 1 2 3',
        'location': 'USA'
    },

    {
        'author': 'Tagesschau',
        'image': 'img/img1.jpg',
        'description': 'Text 1 2 3',
        'location': 'Germany'
    },
];

    function show(params) {
        document.getElementById('postcontainer').innerHTML += '';
        for (let i = 0; index < posts.length; i++) {
            const post = posts[i];


            document.getElementById('postcontainer').innerHTML += `
            <div>
                <img src="${psot['image']}">
                <div>${post['author']}</div>
                <div>${post['description']}</div>
                <div>${post['location']}</div>
            </div>
            `;
        }
    }

    // omload Event aus dem body (HTML-Element)
    function meineFuncktion() {

    }