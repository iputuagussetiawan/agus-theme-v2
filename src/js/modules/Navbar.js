class Navbar {
    constructor() {
        this.isClosed = false;
        this.body=document.querySelector("body");
        this.burgerMenu = document.querySelector("#hamburger")
        this.btnToggler=document.querySelector('.menu-toggle');
        this.siteHeader=document.querySelector('.site-header');
        this.siteNavigation=document.querySelector('.site-navigation');
        this.menuOvElements = document.querySelectorAll('.menu-ov');
        this.menuWrapper = document.querySelector('.menu-wrapper');
        this.menuItems = document.querySelectorAll('.menu > li > a');

        this.subToggles=document.querySelectorAll('.sub-toggle');

        this.subToggle = document.querySelector('.sub-toggle');
    }
    // 2. events
    events() {
        this.btnToggler.addEventListener('click', (event)=>{  
            event.preventDefault();
            //console.log('tests')
            this.burgerTime() 
        });

        for (const subToggle of this.subToggles) {
            subToggle.addEventListener('click', function(event) {
                const allSubMenus=document.querySelectorAll('.sub-menu')
                const allSubToggle=document.querySelectorAll('.sub-toggle')
                allSubMenus.forEach((allSubMenu) => {
                    allSubMenu.classList.remove('sub-menu-in');
                });
                allSubToggle.forEach((subToggle) => {
                    subToggle.classList.remove('st-active');
                });
                subToggle.classList.toggle('st-active');
                const parentLi = subToggle.closest('li');
                let openSub = parentLi.querySelector('.sub-menu');
                openSub.classList.toggle('sub-menu-in');
            })
        }
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
        this.siteHeader.classList.add("active");
        this.siteNavigation.classList.add("active");
        this.siteNavigation.classList.add("nav-open");
        setTimeout(() => {
            this.subToggles.forEach((subToggle) => {
                subToggle.classList.add('st-in');
            });
        }, 500);


        
        
        this.menuOvElements.forEach(element => {
            element.classList.add('menu-ov-in');
        });

        if (this.menuWrapper) {
            this.menuWrapper.style.visibility = 'visible';
        }

        setTimeout(() => {
            this.menuItems.forEach((element, i) => {
                setTimeout(() => {
                    element.classList.add('menu-item-comes');
                    }, i * 100);
                });
        }, 200);

        this.burgerMenu.classList.add("is-active");
        this.body.classList.add('no-scroll');
        this.isClosed = true;
    }
    closeSideMenu(){
        this.siteHeader.classList.remove("active");
        this.siteNavigation.classList.remove("active");
        this.subToggles.forEach((subToggle) => {
            subToggle.classList.remove('st-in');
            subToggle.classList.remove('st-active');
        });

        setTimeout(() => {
            this.siteNavigation.classList.remove("nav-open");
        }, 400);

        this.menuOvElements.forEach(element => {
            element.classList.remove('menu-ov-in');
        });
        this.burgerMenu.classList.remove("is-active");
        //this.burgerMenu.classList.add("closed")
        

        // if (this.menuWrapper) {
        //     this.menuWrapper.style.visibility = 'hidden';
        // }

        this.menuItems.forEach((element, i) => {
            setTimeout(() => {
                element.classList.remove('menu-item-comes');
            }, i * 100);
        });
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