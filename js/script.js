                        document.addEventListener('DOMContentLoaded', function() {
                            const urlParams = new URLSearchParams(window.location.search);
                            const status = urlParams.get('status');
                            const formMessage = document.getElementById('form-message');

                            if (status === 'success') {
                                formMessage.innerHTML = '<div style="padding: 15px; background-color: #d1fae5; color: #065f46; border-radius: 12px; font-weight: 500;">Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.</div>';
                                formMessage.style.display = 'block';
                            } else if (status === 'error') {
                                formMessage.innerHTML = '<div style="padding: 15px; background-color: #fee2e2; color: #991b1b; border-radius: 12px; font-weight: 500;">Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer ultérieurement.</div>';
                                formMessage.style.display = 'block';
                            }
                        });

        // ===================== TRANSLATIONS =====================
        const translations = {
            fr: {
                'nav.about': 'À propos',
                'nav.expertise': 'Expertise',
                'nav.missions': 'Missions',
                'nav.parcours': 'Parcours',
                'nav.contact': 'Contact',
                'hero.badge': 'En mission - Non disponible actuellement',
                'hero.subtitle': '<span class="highlight">Salesforce Release Manager</span> &amp; Architecte Technique. Certifié Platform Developer I &amp; Administrator. +10 ans d\'expertise Salesforce au service des grands comptes.',
                'hero.cta1': 'Voir mes missions',
                'hero.cta2': 'Me contacter',
                'hero.cv': 'Télécharger CV',
                'stats.years': 'Années sur Salesforce',
                'stats.missions': 'Missions grands comptes',
                'stats.certs': 'Certifications Salesforce',
                'stats.users': 'Utilisateurs gérés',
                'clients.title': 'Ils m\'ont fait confiance',
                'about.title': 'À propos',
                'about.subtitle': 'Expert Salesforce certifié, spécialisé en Release Management et Architecture Technique',
                'about.p1': 'Je suis Abdelhakim Irbah, <strong>Salesforce Release Manager</strong> et <strong>Architecte Technique</strong> basé à Paris. Depuis plus de 10 ans, j\'accompagne les grands comptes (Bouygues Telecom, Engie, PSA, Air France KLM, SNCF...) dans leurs projets Salesforce, de l\'architecture à la mise en production.',
                'about.p2': 'Certifié <strong>Platform Developer I</strong> et <strong>Administrator</strong>, je maîtrise l\'ensemble de l\'écosystème Salesforce : Sales Cloud, Service Cloud, Community Cloud, Vlocity. Mon expertise en <strong>Release Management</strong> avec Copado et en intégration SI me permet de garantir des déploiements fiables et continus sur des organisations complexes.',
                'about.cert.copado': 'Expert Copado',
                'about.h1': 'Certifié Salesforce',
                'about.h3': 'Architecture SI',
                'about.h3.desc': 'Intégration multi-cloud &amp; APIs',
                'about.h4': 'Leadership technique',
                'about.h4.desc': 'Pilotage d\'équipes jusqu\'à 15 personnes',
                'expertise.title': 'Mon expertise',
                'expertise.subtitle': 'Un savoir-faire complet sur l\'écosystème Salesforce et son intégration',
                'expertise.card1.desc': 'Mise en place et gestion de pipelines de déploiement avec Copado. Intégration Gitlab, Quality Gates, gestion des environnements et des mises en production sur des organisations partagées.',
                'expertise.card2.title': 'Architecture Technique Salesforce',
                'expertise.card2.desc': 'Design de solutions multi-cloud (Sales Cloud, Service Cloud, Community Cloud, Vlocity). Intégration avec les SI existants via APIs REST, Talend, Informatica et Boomi.',
                'expertise.card3.title': 'Développement Salesforce',
                'expertise.card3.desc': 'Développement Apex, Visualforce, Composants Lightning et ReactJS. Webservices REST, paramétrage avancé, règles de validation et workflows complexes.',
                'expertise.card4.title': 'Conseil &amp; Pilotage',
                'expertise.card4.desc': 'Animation d\'équipes techniques (jusqu\'à 15 consultants). Spécifications techniques, design de solutions, définition des bonnes pratiques de développement et conseil client.',
                'projects.title': 'Missions réalisées',
                'projects.subtitle': 'Quelques missions significatives auprès de grands comptes',
                'project.bouygues.desc': 'Release Manager Salesforce. Mise en place et gestion du Release Management sur les projets SalesCloud et Vlocity. Implémentation de Copado avec pipeline complexe.',
                'project.engie.desc': 'Architecte Technique &amp; Release Manager. Stratégie de release management unifiée pour 26 développeurs sur 3 projets partageant la même Org Salesforce.',
                'project.psa.desc': 'Architecte Technique Salesforce chez IBM Bluewolf. Plateforme de souscription de services connectés pour les véhicules des marques du Groupe PSA.',
                'project.airfrance.desc': 'Responsable Technique Salesforce chez Capgemini. Projet international Sales Cloud (2000 licences) avec intégration via Informatica. Animation d\'ateliers techniques.',
                'project.sncf.desc': 'Responsable Technique &amp; Architecte Salesforce chez Capgemini. Intégration de la Console Service Cloud dans le SI SNCF pour 11 000 utilisateurs.',
                'project.tcs.desc': 'Responsable d\'une équipe de 15 consultants techniques. Intégration multi-cloud Service Cloud avec Zuora et Cameleon Cloud CPQ pour 1700 utilisateurs.',
                'tag.multiprojects': 'Multi-projets',
                'tag.2000licenses': '2000 licences',
                'experience.title': 'Parcours professionnel',
                'experience.subtitle': 'Plus de 15 ans d\'expérience dans l\'IT dont 10+ ans sur l\'écosystème Salesforce',
                'exp.bouygues.date': '2021 - Présent',
                'exp.bouygues.title': 'Release Manager - Bouygues Telecom',
                'exp.bouygues.desc': 'Mise en place et gestion du Release Management Salesforce (SalesCloud, Vlocity). Implémentation de Copado avec pipeline complexe et intégration Gitlab.',
                'exp.engie.title': 'Architecte Technique &amp; Release Manager - Engie',
                'exp.engie.desc': 'Stratégie de release management unifiée sur les projets Salesforce de la DGP Engie. Coordination de 26 développeurs sur 3 projets (Talan/Manao).',
                'exp.psa.title': 'Architecte Technique Salesforce - PSA (IBM Bluewolf)',
                'exp.psa.desc': 'Plateforme de souscription de services connectés pour les véhicules du Groupe PSA. Community Cloud, Drupal, AWS.',
                'exp.freelance.title': 'Expert Salesforce Freelance',
                'exp.freelance.desc': 'Missions pour Kering (Capgemini), Chronopost, Criteo et ETS Global. Architecture, développement Apex/Lightning et conseil technique.',
                'exp.capgemini.title': 'Responsable Technique Salesforce - Capgemini',
                'exp.capgemini.desc': 'Missions pour Touring Club Suisse, Air France KLM, SNCF, Veolia et Sodexo. Management d\'équipes jusqu\'à 15 consultants. Projets internationaux.',
                'exp.formation.title': 'Formation &amp; Début de carrière',
                'exp.formation.desc': 'Master 2 MIAGE/SIC (IAE Paris &amp; Paris 1 Panthéon-Sorbonne). Missions chez AXA France, LCL et SOFIDEEC en coordination de projets et ingénierie.',
                'contact.title': 'Me contacter',
                'contact.subtitle': 'Besoin d\'un expert Salesforce ? Discutons de votre projet',
                'contact.intro': 'Vous cherchez un Release Manager Salesforce ou un Architecte Technique pour votre projet ? N\'hésitez pas à me contacter pour en discuter.',
                'contact.phone': 'Téléphone',
                'contact.location': 'Localisation',
                'contact.location.desc': 'Paris, France (Disponible en télétravail)',
                'form.name': 'Nom',
                'form.name.ph': 'Votre nom',
                'form.email.ph': 'votre@email.com',
                'form.subject': 'Sujet',
                'form.subject.ph': 'Sujet de votre message',
                'form.message.ph': 'Décrivez votre besoin...',
                'form.submit': 'Envoyer le message',
                'footer.tagline': 'Expert Salesforce - Release Management &amp; Architecture Technique'
            },
            en: {
                'nav.about': 'About',
                'nav.expertise': 'Expertise',
                'nav.missions': 'Projects',
                'nav.parcours': 'Career',
                'nav.contact': 'Contact',
                'hero.badge': 'On assignment - Currently unavailable',
                'hero.subtitle': '<span class="highlight">Salesforce Release Manager</span> &amp; Technical Architect. Certified Platform Developer I &amp; Administrator. 10+ years of Salesforce expertise serving enterprise clients.',
                'hero.cta1': 'View my projects',
                'hero.cta2': 'Contact me',
                'hero.cv': 'Download CV',
                'stats.years': 'Years on Salesforce',
                'stats.missions': 'Enterprise projects',
                'stats.certs': 'Salesforce certifications',
                'stats.users': 'Managed users',
                'clients.title': 'They trusted me',
                'about.title': 'About',
                'about.subtitle': 'Certified Salesforce expert, specialized in Release Management and Technical Architecture',
                'about.p1': 'I am Abdelhakim Irbah, <strong>Salesforce Release Manager</strong> and <strong>Technical Architect</strong> based in Paris. For over 10 years, I have supported enterprise clients (Bouygues Telecom, Engie, PSA, Air France KLM, SNCF...) in their Salesforce projects, from architecture to production deployment.',
                'about.p2': 'Certified <strong>Platform Developer I</strong> and <strong>Administrator</strong>, I master the entire Salesforce ecosystem: Sales Cloud, Service Cloud, Community Cloud, Vlocity. My expertise in <strong>Release Management</strong> with Copado and SI integration enables me to deliver reliable and continuous deployments on complex organizations.',
                'about.cert.copado': 'Copado Expert',
                'about.h1': 'Salesforce Certified',
                'about.h3': 'IT Architecture',
                'about.h3.desc': 'Multi-cloud integration &amp; APIs',
                'about.h4': 'Technical Leadership',
                'about.h4.desc': 'Managing teams of up to 15 people',
                'expertise.title': 'My expertise',
                'expertise.subtitle': 'Comprehensive know-how on the Salesforce ecosystem and its integration',
                'expertise.card1.desc': 'Setup and management of deployment pipelines with Copado. Gitlab integration, Quality Gates, environment management and production releases on shared organizations.',
                'expertise.card2.title': 'Salesforce Technical Architecture',
                'expertise.card2.desc': 'Multi-cloud solution design (Sales Cloud, Service Cloud, Community Cloud, Vlocity). Integration with existing IT systems via REST APIs, Talend, Informatica and Boomi.',
                'expertise.card3.title': 'Salesforce Development',
                'expertise.card3.desc': 'Apex development, Visualforce, Lightning Components and ReactJS. REST Webservices, advanced configuration, validation rules and complex workflows.',
                'expertise.card4.title': 'Consulting &amp; Management',
                'expertise.card4.desc': 'Leading technical teams (up to 15 consultants). Technical specifications, solution design, development best practices and client advisory.',
                'projects.title': 'Completed projects',
                'projects.subtitle': 'Key enterprise projects with major corporations',
                'project.bouygues.desc': 'Salesforce Release Manager. Setup and management of Release Management for SalesCloud and Vlocity projects. Copado implementation with complex pipeline.',
                'project.engie.desc': 'Technical Architect &amp; Release Manager. Unified release management strategy for 26 developers across 3 projects sharing the same Salesforce Org.',
                'project.psa.desc': 'Salesforce Technical Architect at IBM Bluewolf. Connected services subscription platform for PSA Group vehicle brands.',
                'project.airfrance.desc': 'Salesforce Technical Lead at Capgemini. International Sales Cloud project (2,000 licenses) with Informatica integration. Technical workshop facilitation.',
                'project.sncf.desc': 'Technical Lead &amp; Salesforce Architect at Capgemini. Service Cloud Console integration into SNCF IT system for 11,000 users.',
                'project.tcs.desc': 'Leading a team of 15 technical consultants. Multi-cloud Service Cloud integration with Zuora and Cameleon Cloud CPQ for 1,700 users.',
                'tag.multiprojects': 'Multi-project',
                'tag.2000licenses': '2,000 licenses',
                'experience.title': 'Career path',
                'experience.subtitle': 'Over 15 years in IT including 10+ years on the Salesforce ecosystem',
                'exp.bouygues.date': '2021 - Present',
                'exp.bouygues.title': 'Release Manager - Bouygues Telecom',
                'exp.bouygues.desc': 'Setup and management of Salesforce Release Management (SalesCloud, Vlocity). Copado implementation with complex pipeline and Gitlab integration.',
                'exp.engie.title': 'Technical Architect &amp; Release Manager - Engie',
                'exp.engie.desc': 'Unified release management strategy for Engie DGP Salesforce projects. Coordinating 26 developers across 3 projects (Talan/Manao).',
                'exp.psa.title': 'Salesforce Technical Architect - PSA (IBM Bluewolf)',
                'exp.psa.desc': 'Connected services subscription platform for PSA Group vehicles. Community Cloud, Drupal, AWS.',
                'exp.freelance.title': 'Salesforce Expert - Freelance',
                'exp.freelance.desc': 'Projects for Kering (Capgemini), Chronopost, Criteo and ETS Global. Architecture, Apex/Lightning development and technical consulting.',
                'exp.capgemini.title': 'Salesforce Technical Lead - Capgemini',
                'exp.capgemini.desc': 'Projects for Touring Club Suisse, Air France KLM, SNCF, Veolia and Sodexo. Managing teams of up to 15 consultants. International projects.',
                'exp.formation.title': 'Education &amp; Early career',
                'exp.formation.desc': 'Master\'s Degree MIAGE/SIC (IAE Paris &amp; Paris 1 Pantheon-Sorbonne). Assignments at AXA France, LCL and SOFIDEEC in project coordination and engineering.',
                'contact.title': 'Contact me',
                'contact.subtitle': 'Need a Salesforce expert? Let\'s discuss your project',
                'contact.intro': 'Looking for a Salesforce Release Manager or Technical Architect for your project? Don\'t hesitate to get in touch.',
                'contact.phone': 'Phone',
                'contact.location': 'Location',
                'contact.location.desc': 'Paris, France (Available for remote work)',
                'form.name': 'Name',
                'form.name.ph': 'Your name',
                'form.email.ph': 'your@email.com',
                'form.subject': 'Subject',
                'form.subject.ph': 'Subject of your message',
                'form.message.ph': 'Describe your needs...',
                'form.submit': 'Send message',
                'footer.tagline': 'Salesforce Expert - Release Management &amp; Technical Architecture'
            }
        };

        // ===================== LANG SWITCH =====================
        function setLanguage(lang) {
            document.documentElement.lang = lang;

            // Update text content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            // Update HTML content (elements with inner HTML like <strong>)
            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                const key = el.getAttribute('data-i18n-html');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            // Update toggle buttons
            document.querySelectorAll('.lang-toggle button').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });

            // Update page title
            document.title = lang === 'fr'
                ? 'Wisee.fr | Abdelhakim Irbah - Salesforce Release Manager'
                : 'Wisee.fr | Abdelhakim Irbah - Salesforce Release Manager';

            localStorage.setItem('lang', lang);
        }

        // Init language toggle
        document.querySelectorAll('.lang-toggle button').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
        });

        // Restore saved language
        const savedLang = localStorage.getItem('lang');
        if (savedLang && savedLang !== 'fr') {
            setLanguage(savedLang);
        }

        // ===================== NAVIGATION =====================
        const navbar = document.querySelector('.navbar');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 100) {
                    element.classList.add('active');
                }
            });

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (current && item.getAttribute('href') && item.getAttribute('href').includes(current)) {
                    item.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('DOMContentLoaded', handleScroll);
