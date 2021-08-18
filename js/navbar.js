class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#obras">Obras</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#exposicoes">Exposições</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#perfil">Perfil</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
  }
}

customElements.define('main-nav', Nav);