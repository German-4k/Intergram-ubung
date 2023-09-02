
// JSON
let posts = [
    {
        'author': 'Tagesschau',
        'image': 'Martin',
        'description': 'Text 1',
        'location': 'France',
    },

    {
        'author': 'Pro-7',
        'image': 'Paul',
        'description': 'Text 2',
        'location': 'USA',
    },

    {
        'author': 'sat.1',
        'image': 'Steffen',
        'description': 'Text 3',
        'location': 'Germany',
    },
];
    // macht nur sin wenn ich mehre funcktionen in einer zusammen fassen möchte
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
    };

    /*  textarea inhalt wird in dem JSON gespeichert
        sobalt ich auf dem Button klicke 
    */
    function abschicken(i) {
            let post = { 
                            author: "Steffen", 
                            image: "Steffen", 
                            description: "Text 4",
                            location: "Germany", 
                        };

        localStorage.setItem("post", JSON.stringify(post));

        };


    function abschicken() {
        
    }
    


     // Taplete für Post's
     // werden rechts angezeigt
    function templatePost(post, i,) {
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
