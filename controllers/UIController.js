/**
 * UIController.js
 * Handles general UI interactions like theme setting and scroll to top.
 */

export function initUIHelpers() {
  createScrollToTopButton();
}

function createScrollToTopButton() {
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.id = 'scrollToTop';
  btn.className = 'btn-minecraft floating';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    z-index: 1000;
    width: 50px;
    height: 50px;
    padding: 0;
    line-height: 42px;
    font-size: 24px;
  `;
  
  document.body.appendChild(btn);

  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
}
