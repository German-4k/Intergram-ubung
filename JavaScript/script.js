// Test version 03.09.2023

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
    for (let i =0; i < posts.length; i++) {
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
    let newPost = {
        author: "Steffen",
        image: "Steffen",
        description: "text 4",
        location: "Germany",
        comments: text,
    };

    // Füge den neuen Post zum Array hinzu
    posts.push(newPost);

    // Speichere das aktualisierte Array im localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Leere das Textfeld
    document.getElementById('inputPost').value = '';

    // Aktalisiere die angezeigten Posts
    show();
}

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
                    <div id="deletePost" onclick="deletePost()" class="löchenIcon"${post['id']}></div>
                </div>
            </div>
        </div>
        `;
}

function deletePost(postId) {
    // Lade die aktuellen Posts aus dem localStorage
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');

    // Filtere den Post, den du löschen möchtest, aus dem Array herus
    post = posts.filter(post => post.id !== postId);

    // Speichere das aktualisierte Array wieder im LocalStorage
    localStorage.setItem('posts', JSON.stringify(post));
}

// entfernen aus dem localStorage via Key ID
localStorage.removeItem('key');










// // JSON
// let posts = [
//     {
//         'author': 'Tagesschau',
//         'image': 'Martin',
//         'description': 'Text 1',
//         'location': 'France',
//         'comments': 'blbla1',
//     },

//     {
//         'author': 'Pro-7',
//         'image': 'Paul',
//         'description': 'Text 2',
//         'location': 'USA',
//         'comments': 'blbla2',

//     },

//     {
//         'author': 'sat.1',
//         'image': 'Steffen',
//         'description': 'Text 3',
//         'location': 'Germany',
//         'comments': 'blbla3',

//     },
// ];
//     // macht nur sin wenn ich mehre funcktionen in einer zusammen fassen möchte
//     function inet() {
//         show()
//     };

//     function show() {
//         document.getElementById('postcontainer').innerHTML = '';
//         for (let i = 0; i < posts.length; i++) {
//             const post = posts[i];
//             // console.log(post.comments);


//             document.getElementById('postcontainer').innerHTML += templatePost(post,i)
//         }      
//     };

    
//     // onload Event aus dem body (HTML-Element)
//     function post() {
//         document.getElementById('newPost').innerHTML += `
//             <div class="newPostHintergrund">
//                 <div class="heatline">
//                     <div
//                         class="logo" id="PostLogo">Logo
//                     </div>
//                     <h1>New Post</h1>
//                 </div>
//                 <div class="post">
//                     <textarea id="inputPost" wrap="hard" class="inputPost" placeholder="new Post"></textarea>
//                     <button onclick="abschicken()">Abschicken</button>
//                 </div>
//             </div>
//             `;
//     };

//      // Textare auslesen was geschrieben wurde
//     function zeigeInhalt() {
//         let content = document.getElementById('inputPost').value;
//         abschicken(content); // Übergen sie den Connten den Sie ausgelesen haben
//     }

//     /*  textarea inhalt wird in dem JSON gespeichert
//         sobalt ich auf dem Button klicke 
//     */
//     function abschicken(i, text) {
//             let post = { 
//                             author: "Steffen", 
//                             image: "Steffen", 
//                             description: "text",
//                             location: "Germany", 
//                             comments: text // Verwenden sie den Übergebenen text
//                         };

//         // dauerhafte speicherung in JSON
//         localStorage.setItem("post", JSON.stringify(post));
//         // Inhalt der textare, nach abschicken wieder löschen
//         document.getElementById('inputPost').value = '';

//     }




//      // Taplete für Post's
//      // werden rechts angezeigt
//     function templatePost(post, i,) {
//         return  `

//             <div class="post-wrapper">
//                 <div class="post-container">
//                     <div class="post-image">${post['image']}</div>
//                     <div class="post-author">${post['author']}</div>
//                     <div class="post-description">${post['description']}</div>
//                     <div class="post-comments">${post['comments']}</div>
//                     <div class="post-location">${post['location']}</div>
//                 </div>
//             </div>
//         `
//         // aus JSON wieder laden
//     const gespeichertesObjekt = JSON.parse(localStorage.getItem('meineDaten'));

//     };
