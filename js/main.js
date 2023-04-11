
$(document).ready(function () {

//slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });

    //end slider

    //post

    var posts = [
        {
            title: 'prueba de titulo 1',
            date: 'Publicado el dia: ' + moment().format("DD ")+ 'de '+ moment().format("MMMM ") + 'del '+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
        {
            title: 'prueba de titulo 2',
            date: 'Publicado el dia: ' + moment().format("DD ")+ 'de '+ moment().format("MMMM ") + 'del '+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'prueba de titulo 3',
            date: 'Publicado el dia: ' + moment().format("DD ")+ 'de '+ moment().format("MMMM ") + 'del '+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'prueba de titulo 4',
            date: 'Publicado el dia: ' + moment().format("DD ")+ 'de '+ moment().format("MMMM ") + 'del '+ moment().format("YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

    //RECORRER LA ESTRCUTURA

    posts.forEach((item, index)=>{
        var post=`
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">leer mas</a>
    </article>
        `;

        $("#posts").append(post);
    });

    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    //fin de selector

});