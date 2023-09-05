// Versuchen Sie, die gespeicherten Posts aus dem localStorage zu laden
let storedPosts = JSON.parse(localStorage.getItem('posts'));


// Wenn es gespeicherte Posts gibt, verwenden Sie diese. Ansonsten verwenden Sie die Initialdaten
let posts = storedPosts || [
    {
        'author': 'Tagesschau',
        'image': 'Martin',
        'description': 'Text 1',
        'location': 'France',
        'comments': 'blbla 1',
        'id': '1',
    },
    {
        'author': 'Pro-7',
        'image': 'Paul',
        'description': 'Text 2',
        'location': 'USA',
        'comments': 'blbla 2',
        'id': '2',
    },
    {
        'author': 'Sat.1',
        'image': 'Steffen',
        'description': 'Text 3',
        'location': 'Germany',
        'comments': 'blbla 3',
        'id': '3',
    },
];

function inet() {
    show();
};

function show() {
    document.getElementById('postcontainer').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('postcontainer').innerHTML += templatePost(post, i);
    }
};

function post() {
    document.getElementById('newPost').innerHTML += `
    <div class="newPostHintergrund">
            <div class="heatline">
                <div class="logo" id="PostLogo">Logo</div>
                <h1>New Post</h1>
            </div>
            <div class="post">
                <textarea id="inputPost" wrap="hard" class="inputPost" placeholder="new Post"></textarea>
                <button onclick="zeigeInhalt()">Abschicken</button>
            </div>
        </div>
        `; 
}

function zeigeInhalt() {
    let content = document.getElementById('inputPost').value;
    abschicken(content);
}

function abschicken(text) {
    let newId = posts.length ? parseInt(posts[posts.length - 1].id) + 0 : 0;
    let newPost = {
        author: "Steffen",
        image: "Steffen",
        description: "text 4",
        location: "Germany",
        comments: text,
        id: newId.toString()
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    document.getElementById('inputPost').value = '';
    show(); // Aktualisiere die Liste der Post
}

    // Füge den neuen Post zum Array hinzu
    posts.push(newPost);

    // Speichere das aktualisierte Array im localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Leere das Textfeld
    document.getElementById('inputPost').value = '';

    // // Aktalisiere die angezeigten Posts
    // show();


function templatePost(post, i) {
    return `
        <div class="post-wrapper">
            <div class="post-container">
                <div class="post-image">${post['image']}</div>
                <div class="post-author">${post['author']}</div>
                <div class="post-description">${post['description']}</div>
                <textarea readonly class="post-comments">${post['comments']}</textarea>
                <div class="andersection">
                    <div class="post-location">${post['location']}</div>
                    <div id="deletePost" onclick="deletePost(${post['id']})" class="löchenIcon"></div>
                </div>
            </div>
        </div>
        `;
}

function deletePost(i) {
    posts.splice(i, 1); // Entferne den Post am Index i
    localStorage.setItem("posts", JSON.stringify(posts)); // Aktualisiere localsStorage
    show(); // Aktualieseire die Liste ders Posts
}


    // author.splice(i, 1);
    // description.splice(i, 1);
    // comments.splice(i, 1);
    // location.splice(i, 1);
    // id.splice(i, 1);


// function deletePost(i) {
    // Sie müssten hier den Post an Index 'i' aus Ihrem 'posts'-Array entfernen.
    // Zum Beispiel: posts.splice(i, 1);
// }

// function deletePost(postId) {
//     // Lade die aktuellen Posts aus dem localStorage
//     let posts = JSON.parse(localStorage.getItem('posts') || '[]');

//     // Filtere den Post, den du löschen möchtest, aus dem Array herus
//     post = posts.filter(post => post.id !== postId);

//     // Speichere das aktualisierte Array wieder im LocalStorage
//     localStorage.setItem('posts', JSON.stringify(post));
// }

// s
