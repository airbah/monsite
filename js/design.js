/* Progressive enhancement for the Copado preview and navigation accessibility. */
(() => {
    const tabs = [...document.querySelectorAll('[data-preview]')];
    function selectTab(tab, focus = false) {
        tabs.forEach(candidate => {
            const active = candidate === tab;
            candidate.setAttribute('aria-selected', String(active));
            candidate.tabIndex = active ? 0 : -1;
            document.getElementById(candidate.getAttribute('aria-controls')).hidden = !active;
        });
        if (focus) tab.focus();
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(tab));
        tab.addEventListener('keydown', event => {
            let next;
            if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
            if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
            if (event.key === 'Home') next = 0;
            if (event.key === 'End') next = tabs.length - 1;
            if (next !== undefined) {
                event.preventDefault();
                selectTab(tabs[next], true);
            }
        });
    });

    const menu = document.getElementById('main-nav');
    const toggle = document.querySelector('.mobile-menu-btn');
    const theme = document.getElementById('themeToggle');
    function updateLabels() {
        const english = document.documentElement.lang === 'en';
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-label', english ? (expanded ? 'Close navigation menu' : 'Open navigation menu') : (expanded ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'));
        theme.setAttribute('aria-label', document.documentElement.dataset.theme === 'dark' ? (english ? 'Switch to light mode' : 'Passer en mode clair') : (english ? 'Switch to dark mode' : 'Passer en mode sombre'));
        document.querySelector('.navbar').setAttribute('aria-label', english ? 'Main navigation' : 'Navigation principale');
        document.querySelector('.mini-model').setAttribute('aria-label', english ? 'Preview: a release links user stories to their commits' : 'Aperçu : une release relie les user stories à leurs commits');
        document.querySelector('.model-tabs').setAttribute('aria-label', english ? 'Model domains' : 'Domaines du modèle');
        document.querySelectorAll('.lang-toggle button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === document.documentElement.lang)));
    }
    new MutationObserver(updateLabels).observe(toggle, { attributes: true, attributeFilter: ['aria-expanded'] });
    new MutationObserver(updateLabels).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    document.addEventListener('wisee:language', updateLabels);
    updateLabels();

    // The off-canvas menu is keyboard-contained only while expanded on mobile.
    document.addEventListener('keydown', event => {
        if (event.key !== 'Tab' || toggle.getAttribute('aria-expanded') !== 'true') return;
        const focusable = [toggle, ...menu.querySelectorAll('a, button')];
        const index = focusable.indexOf(document.activeElement);
        if (event.shiftKey && index <= 0) {
            event.preventDefault();
            focusable[focusable.length - 1].focus();
        } else if (!event.shiftKey && (index === focusable.length - 1 || index === -1)) {
            event.preventDefault();
            toggle.focus();
        }
    });
})();
