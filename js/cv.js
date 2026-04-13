        const translations = {
            fr: {
                'cv.save': 'Sauvegarder en PDF',
                'cv.back': 'Retour au site',
                'cv.title': 'Salesforce Release Manager & Architecte Technique',
                'cv.summary': '+10 ans d\'expertise Salesforce au service des grands comptes. Spécialisé en Release Management (Copado), architecture multi-cloud et pilotage d\'équipes techniques. Certifié Platform Developer I & Administrator.',
                'cv.exp': 'Expérience professionnelle',
                'cv.exp1.role': 'Release Manager Salesforce',
                'cv.exp1.date': '09/2021 - Présent',
                'cv.exp1.desc': 'Mise en place et gestion du Release Management sur les projets SalesCloud et Vlocity. Implémentation de Copado avec pipeline complexe, intégration Gitlab et Quality Gates. Gestion des environnements et mises en production.',
                'cv.exp2.role': 'Architecte Technique & Release Manager',
                'cv.exp2.desc': 'Stratégie de release management unifiée pour les projets Salesforce de la DGP. Coordination de 26 développeurs sur 3 projets partageant la même Org Salesforce.',
                'cv.exp3.role': 'Architecte Technique Salesforce',
                'cv.exp3.desc': 'Plateforme de souscription de services connectés pour les véhicules du Groupe PSA. Architecture Community Cloud, intégration Drupal et AWS.',
                'cv.exp4.role': 'Expert Salesforce Freelance',
                'cv.exp4.desc': 'Architecture, développement Apex/Lightning et conseil technique auprès de grands comptes via Capgemini.',
                'cv.exp5.role': 'Responsable Technique Salesforce',
                'cv.exp5.desc': 'Missions pour Touring Club Suisse, Air France KLM, SNCF, Veolia et Sodexo. Management d\'équipes jusqu\'à 15 consultants. Projets internationaux Sales Cloud et Service Cloud.',
                'cv.exp6.role': 'Coordination de projets & Ingénierie',
                'cv.exp6.desc': 'Coordination de projets IT et ingénierie logicielle en début de carrière.',
                'cv.skills': 'Compétences',
                'cv.skill.envmgmt': 'Gestion d\'environnements',
                'cv.skill.integration': 'Intégration',
                'cv.skill.other': 'Autres',
                'cv.education': 'Formation',
                'cv.languages': 'Langues',
                'cv.lang.fr': 'Français',
                'cv.lang.fr.level': 'Natif',
                'cv.lang.en': 'Anglais',
                'cv.lang.en.level': 'Professionnel',
                'cv.lang.ar': 'Arabe',
                'cv.lang.ar.level': 'Courant',
                'cv.clients': 'Clients notables'
            },
            en: {
                'cv.save': 'Save as PDF',
                'cv.back': 'Back to website',
                'cv.title': 'Salesforce Release Manager & Technical Architect',
                'cv.summary': '10+ years of Salesforce expertise serving enterprise clients. Specialized in Release Management (Copado), multi-cloud architecture and technical team leadership. Certified Platform Developer I & Administrator.',
                'cv.exp': 'Professional experience',
                'cv.exp1.role': 'Salesforce Release Manager',
                'cv.exp1.date': '09/2021 - Present',
                'cv.exp1.desc': 'Setup and management of Release Management for SalesCloud and Vlocity projects. Copado implementation with complex pipeline, Gitlab integration and Quality Gates. Environment management and production releases.',
                'cv.exp2.role': 'Technical Architect & Release Manager',
                'cv.exp2.desc': 'Unified release management strategy for Engie DGP Salesforce projects. Coordinating 26 developers across 3 projects sharing the same Salesforce Org.',
                'cv.exp3.role': 'Salesforce Technical Architect',
                'cv.exp3.desc': 'Connected services subscription platform for PSA Group vehicles. Community Cloud architecture, Drupal and AWS integration.',
                'cv.exp4.role': 'Salesforce Expert - Freelance',
                'cv.exp4.desc': 'Architecture, Apex/Lightning development and technical consulting for enterprise clients via Capgemini.',
                'cv.exp5.role': 'Salesforce Technical Lead',
                'cv.exp5.desc': 'Projects for Touring Club Suisse, Air France KLM, SNCF, Veolia and Sodexo. Managing teams of up to 15 consultants. International Sales Cloud and Service Cloud projects.',
                'cv.exp6.role': 'IT Project Coordination & Engineering',
                'cv.exp6.desc': 'IT project coordination and software engineering in early career.',
                'cv.skills': 'Skills',
                'cv.skill.envmgmt': 'Environment management',
                'cv.skill.integration': 'Integration',
                'cv.skill.other': 'Other',
                'cv.education': 'Education',
                'cv.languages': 'Languages',
                'cv.lang.fr': 'French',
                'cv.lang.fr.level': 'Native',
                'cv.lang.en': 'English',
                'cv.lang.en.level': 'Professional',
                'cv.lang.ar': 'Arabic',
                'cv.lang.ar.level': 'Fluent',
                'cv.clients': 'Key clients'
            }
        };

        function setLanguage(lang) {
            document.documentElement.lang = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) el.textContent = translations[lang][key];
            });
            document.querySelectorAll('.lang-toggle-cv button').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
            localStorage.setItem('lang', lang);
        }

        document.querySelectorAll('.lang-toggle-cv button').forEach(btn => {
            btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
        });

        const savedLang = localStorage.getItem('lang');
        if (savedLang && savedLang !== 'fr') setLanguage(savedLang);
