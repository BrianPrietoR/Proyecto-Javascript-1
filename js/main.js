
$(document).ready(function () {

    var tema = $("#theme");
    var cargado = localStorage.getItem("color");
    //si no existe color guardado en el localstorage va a retornar null y lo validamos con un if
    if (cargado == null) {
        cargado = "css/green.css";
    }
    //cargamos el tema
    tema.attr("href", cargado);


    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true
        });
    }


    //end slider

    //post
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'prueba de titulo 1',
                date: 'Publicado el dia: ' + moment().format("DD ") + 'de ' + moment().format("MMMM ") + 'del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'prueba de titulo 2',
                date: 'Publicado el dia: ' + moment().format("DD ") + 'de ' + moment().format("MMMM ") + 'del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'prueba de titulo 3',
                date: 'Publicado el dia: ' + moment().format("DD ") + 'de ' + moment().format("MMMM ") + 'del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'prueba de titulo 4',
                date: 'Publicado el dia: ' + moment().format("DD ") + 'de ' + moment().format("MMMM ") + 'del ' + moment().format("YYYY"),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ];

        //RECORRER LA ESTRCUTURA

        posts.forEach((item, index) => {
            var post = `
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
    }

    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        let green = "css/green.css";
        theme.attr("href", "css/green.css")
        // lo guardamos en el localStorage
        localStorage.setItem("color", green)
    });

    $("#to-red").click(function () {
        let red = "css/red.css";
        theme.attr("href", "css/red.css")
        localStorage.setItem("color", red)
    });

    $("#to-blue").click(function () {
        let blue = "css/blue.css";
        theme.attr("href", "css/blue.css")
        localStorage.setItem("color", blue)
    });
    //fin de selector

    //Scrol arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //Fin de scrioll

    //login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

        var form_email = $("#form_email").val();
        localStorage.setItem("form_email", form_email);
    });

    var form_name = localStorage.getItem("form_name");
    var form_email = localStorage.getItem("form_email");

    if (form_name != null && form_name != "undefined" || form_email != null && form_email != "undefined") {

        var about_parrafo = $("#about p")

        about_parrafo.html("<br/><strong>Bienvenido, " + form_name + "</strong><br/><br/>" + "E_mail: " + form_email);
        about_parrafo.append("<br><br><a href='#' id='logout'>Cerrar Sesión</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.removeItem("form_name");
            localStorage.removeItem("form_email");

            location.reload();
        });

    };
    //fin login falso


    // ACORDEON
    if (window.location.href.indexOf('About') > -1) {
        $("#acordeon").accordion();
    }; 


});