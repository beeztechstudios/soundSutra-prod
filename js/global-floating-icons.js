// Global Floating Icons - WhatsApp & Menu
(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    initGlobalFloatingIcons();
  });

  function initGlobalFloatingIcons() {
    // Create floating icons container
    const floatingContainer = createFloatingIconsContainer();
    
    // Create menu overlay
    const overlay = createOverlay();
    
    // Create menu container
    const menuContainer = createMenuContainer();
    
    // Append elements to body
    document.body.appendChild(floatingContainer);
    document.body.appendChild(overlay);
    document.body.appendChild(menuContainer);
    
    // Get references to buttons
    const menuBtn = document.querySelector('.floating-menu-btn');
    const whatsappBtn = document.querySelector('.floating-whatsapp-btn');
    
    // Event listeners
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when a link is clicked
    const menuLinks = menuContainer.querySelectorAll('.mobile-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        setTimeout(() => {
          closeMenu();
        }, 200);
      });
    });

    // Track WhatsApp clicks (optional analytics)
    whatsappBtn.addEventListener('click', function() {
      console.log('WhatsApp button clicked');
    });
  }

  function createFloatingIconsContainer() {
    const container = document.createElement('div');
    container.className = 'floating-icons-container';
    
    // WhatsApp Button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href =
      "https://wa.me/918197687751?text=Hi%20I%20need%20to%20know%20more%20about%20Sound%20Sutraa%20services";
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'floating-icon-btn floating-whatsapp-btn';
    whatsappBtn.setAttribute('data-tooltip', 'Chat on WhatsApp');
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappBtn.innerHTML = `
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.476 2.028 7.769L.065 31.351l7.86-2.054A15.915 15.915 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.365c-2.498 0-4.924-.696-7.025-2.013l-.504-.299-5.235 1.368 1.395-5.087-.328-.521A13.3 13.3 0 012.635 16C2.635 8.611 8.611 2.635 16 2.635S29.365 8.611 29.365 16 23.389 29.365 16 29.365z"/>
        <path d="M22.837 18.827c-.424-.212-2.51-1.239-2.898-1.38-.388-.141-.671-.212-.953.212-.282.424-1.094 1.38-1.341 1.663-.247.282-.494.318-.918.106-.424-.212-1.788-.659-3.405-2.101-1.259-1.122-2.108-2.508-2.355-2.932-.247-.424-.026-.653.186-.864.19-.19.424-.494.636-.741.212-.247.282-.424.424-.706.141-.282.071-.529-.035-.741-.106-.212-.953-2.297-1.306-3.145-.344-.825-.694-.713-.953-.726-.247-.012-.529-.015-.812-.015s-.741.106-1.129.529c-.388.424-1.482 1.447-1.482 3.532 0 2.084 1.517 4.099 1.729 4.381.212.282 2.985 4.556 7.231 6.388 1.011.437 1.8.698 2.415.893.1.014 2.038.608 2.389.378.353-.23.906-1.02 1.034-2.005.129-.984.129-1.829-.091-2.005-.22-.176-.502-.276-.926-.488z"/>
      </svg>
    `;
    
    // Menu Button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'floating-icon-btn floating-menu-btn';
    menuBtn.setAttribute('data-tooltip', 'Open Menu');
    menuBtn.setAttribute('aria-label', 'Open Menu');
    menuBtn.innerHTML = `
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    
    container.appendChild(whatsappBtn);
    container.appendChild(menuBtn);
    
    return container;
  }

  function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    return overlay;
  }

  function createMenuContainer() {
    const container = document.createElement('div');
    container.className = 'mobile-menu-container';
    
    // Get logo from existing navbar if available
    const existingLogo = document.querySelector('.navbar_logo');
    const logoSrc = existingLogo ? existingLogo.src : 'images/Image.svg';
    
    container.innerHTML = `
      <div class="mobile-menu-header">
        <img src="${logoSrc}" alt="Sound sutraa Logo" class="mobile-menu-logo">
      </div>
      <nav class="mobile-menu-links">
        <a href="${
          window.location.pathname.includes("blog.html")
            ? "index.html#benefits"
            : "#benefits"
        }" class="mobile-menu-link">Benefits</a>
        <a href="healing-tools.html" class="mobile-menu-link">Product</a>
        <a href="${
          window.location.pathname.includes("blog.html")
            ? "index.html#reviews"
            : "#reviews"
        }" class="mobile-menu-link">Reviews</a>
        <a href="blog.html" class="mobile-menu-link">Blogs</a>
        <a href="${
          window.location.pathname.includes("blog.html")
            ? "index.html#faq"
            : "#faq"
        }" class="mobile-menu-link">FAQ</a>
      </nav>
      <div class="mobile-menu-cta">
        <a href="healing-tools.html" class="mobile-menu-cta-btn">
          <span>Product</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.85C16.55 8.53 16.01 8.76 16.01 9.21V11Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://wa.me/918197687751?text=Hi%20I%20need%20to%20know%20more%20about%20Sound%20Sutraa%20services" class="mobile-menu-cta-btn" target="_blank">
          <span>Book a Session</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.01 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H16.01V14.79C16.01 15.24 16.55 15.46 16.86 15.14L19.64 12.35C19.83 12.15 19.83 11.84 19.64 11.64L16.86 8.85C16.55 8.53 16.01 8.76 16.01 9.21V11Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    `;
    
    return container;
  }

  function toggleMenu() {
    const menuBtn = document.querySelector('.floating-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menu = document.querySelector('.mobile-menu-container');
    
    const isActive = menu.classList.contains('active');
    
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    const menuBtn = document.querySelector('.floating-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menu = document.querySelector('.mobile-menu-container');
    
    menuBtn.classList.add('active');
    menuBtn.setAttribute('data-tooltip', 'Close Menu');
    overlay.classList.add('active');
    menu.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    const menuBtn = document.querySelector('.floating-menu-btn');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menu = document.querySelector('.mobile-menu-container');
    
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('data-tooltip', 'Open Menu');
    overlay.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const menu = document.querySelector('.mobile-menu-container');
      if (menu && menu.classList.contains('active')) {
        closeMenu();
      }
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Close menu if resized to larger screen while open
      if (window.innerWidth > 991) {
        const menu = document.querySelector('.mobile-menu-container');
        if (menu && menu.classList.contains('active')) {
          closeMenu();
        }
      }
    }, 250);
  });

})();
