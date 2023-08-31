
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

    // onload Event aus dem body (HTML-Element)
    function post() {
        document.getElementById('newPost').innerHTML += `
            <div class="newPostHintergrund">
                <div class="heatline">
                    <div
                        class="logo" id="PostLogo">Logo
                    </div>
                    <h1>New Post</h1>
                </div>
                <div class="post">
                    <textarea id="inputPost" wrap="hard" class="inputPost" placeholder="new Post"></textarea>
                    <button onclick="abschicken()">Abschicken</button>
                </div>
            </div>
            `;
    }

    // nach abschicken (button) ins JSON Speichern
    function abschicken() {
        // Wert aus dem Textfeld auslesen / abrufen
        let post = document.getElementById('inputPost').value;

        // Post aus textarea in ein neues JSON speichern


        // textare-Feld wird nach Speichern im JSON wieder geleert
        document.getElementById('inputPost').value = '';
    }