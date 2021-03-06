const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');


for (let index in posts) {
    
    //assegno ad una costante ogni singolo oggetto presente nell'array posts
    const singlePost = posts[index];
    
    //chiamo la funzine che genera e stampa il contenuto della pagina
    container.innerHTML+= drawPosts(singlePost);
    
}

triggerLikes(posts);


function triggerLikes(obj){   
    for (let index in obj) {
        const likeButton = document.querySelector(`[data-postid="${obj[index].id}"]`);
        const likeCounter = document.querySelectorAll('.likes__counter');
        likeButton.addEventListener('click', function(){
            if (!likeButton.classList.contains('like-button--liked')) {
                likeCounter[index].innerHTML = 
                `
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${++obj[index].likes}</b> persone
                 </div>
                `;

                likeButton.classList.add('like-button--liked');
            }

        });
       

        //console.log('--->',index,likeButton);
    }

}


//funzione che genera e stampa in html il contenuto
function drawPosts(singPost) {
    
    //imposto logo boolean come immagine di default se l'attributo corrispondente ?? null
    if (singPost.author.image === null) singPost.author.image = "http://www.boolean.careers/images/misc/logo-small.png";
    

    //gestisco l'innerHTML dell'elemento post inserendo come contenuto le propriet?? degli oggetti nell'array posts

    const postHTML =
    ` <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${singPost.author.image}" alt="${singPost.author.name}" />
                    </div>

                    <div class="post-meta__data">
                        <div class="post-meta__author">${singPost.author.name}</div>
                        <div class="post-meta__time">
                            ${singPost.created.split("-").reverse().join("-").replaceAll("-","/")}
                        </div>
                    </div>
                </div>
            </div>
            <div class="post__text">${singPost.content}</div>
                <div class="post__image">
                    <img src="${singPost.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" data-postid="${singPost.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${singPost.likes}</b> persone
                        </div>
                    </div> 
                </div>            
      </div>      
    `;
    
    return postHTML;
}

console.log(posts);