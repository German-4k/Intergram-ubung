
// JSON
let posts = [
    {
        'author': 'Tagesschau',
        'image': 'Martin',
        'description': 'Text 1',
        'location': 'France',
        'comments': ['bla1'],
    },

    {
        'author': 'Pro-7',
        'image': 'Paul',
        'description': 'Text 2',
        'location': 'USA',
        'comments': ['bla2'],
    },

    {
        'author': 'sat.1',
        'image': 'Steffen',
        'description': 'Text 3',
        'location': 'Germany',
        'comments': ['bla3'],
    },
];

    function inet() {
       show() 
    };

    function show() {
        document.getElementById('postcontainer').innerHTML = '';
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            // console.log(post.comments);


            document.getElementById('postcontainer').innerHTML += templatePost(post,i)
        }      
    };


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


     // Taplete für Post's
     function templatePost(post, i) {
        return  `

            <div class="post-wrapper">
                 <div class="post-container">
                    <div class="post-image">${post['image']}</div>
                    <div class="post-author">${post['author']}</div>
                    <div class="post-description">${post['description']}</div>
                    <div class="post-comments">${post['comments']}</div>
                    <div class="post-location">${post['location']}</div>
                </div>
            </div>
        `
    };


    // // nach abschicken (button) ins JSON Speichern
    // function abschicken() {
    //     // Wert aus dem Textfeld auslesen / abrufen
    //     let post = document.getElementById('inputPost').value;

    //     // Vorhandene Posts aus localStorage abrufen und in ein Array umwandeln
    // let existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    // // Neuen Post zum Array hinzufügen
    // existingPosts.push({
    //     'author': 'Ihr Name oder Username hier',
    //     'description': postText,
    //     'location': 'Ort hier, wenn vorhanden'
    // });

    // // Array wieder in einen String umwandeln und in localStorage speichern
    // localStorage.setItem('posts', JSON.stringify(existingPosts));


    //     // textare-Feld wird nach Speichern im JSON wieder geleert
    //     document.getElementById('inputPost').value = '';
    // }