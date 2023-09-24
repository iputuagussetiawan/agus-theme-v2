class Navbar {
    constructor() {
        this.isClosed = false;
        this.body=document.querySelector("body");
        this.burgerMenu = document.querySelector("#hamburger")
        this.btnToggler=document.querySelector('.menu-toggle');

    }
    // 2. events
    events() {
        this.btnToggler.addEventListener('click', (event)=>{  
            event.preventDefault();
            //console.log('tests')
            this.burgerTime() 
        });
    }
    // 3. methods (function, action...)
    
    burgerTime() {
        if (this.isClosed== true) {
            this.closeSideMenu();
        } else {
            this.openSideMenu()
        }
    }
    openSideMenu(){
        //this.burgerMenu.classList.remove("closed");
        this.burgerMenu.classList.add("is-active");
        this.body.classList.add('no-scroll');
        this.isClosed = true;
    }
    closeSideMenu(){
        this.burgerMenu.classList.remove("is-active");
        //this.burgerMenu.classList.add("closed");
        this.body.classList.remove('no-scroll');
        this.isClosed  = false;
    }
    hoverDropdown(){
        for (const dropdown of this.dropdowns) {
            dropdown.addEventListener('mouseenter', function(event) {
                let target=event.target
                let dropdownToggle=target.querySelector('.dropdown-toggle')
                let dropdownMenu=target.querySelector('.dropdown-menu')
                target.classList.add('show');
                dropdownToggle.classList.add('show');
                dropdownMenu.classList.add('show');

                let el_overlay = document.createElement('span');
                let body=document.querySelector("body");
                el_overlay.className = 'screen-darken';
                document.body.appendChild(el_overlay)
                body.classList.add('no-scroll');
            })
            dropdown.addEventListener('mouseleave', function(event) {
                let target=event.target
                let dropdownToggle=target.querySelector('.dropdown-toggle')
                let dropdownMenu=target.querySelector('.dropdown-menu')
                let body=document.querySelector("body");
                target.classList.remove('show');
                dropdownToggle.classList.remove('show');
                dropdownMenu.classList.remove('show');
                document.body.removeChild(document.querySelector('.screen-darken'));
                body.classList.remove('no-scroll');
            })
        }
    }
    getSectionId(){
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.section; 
        return value;
    }
    scrollToSection(target){
        gsap.to(window, {duration: 0.1, scrollTo:target});
    }
}
export default Navbar