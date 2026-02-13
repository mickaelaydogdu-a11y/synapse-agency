"use client";

import { useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        // Injecter le CSS du widget n8n
        const link = document.createElement('link');
        link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Injecter le CSS personnalisé Synapse Agency
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --chat--color--primary: #9966ff !important;
                --chat--color--primary-shade-50: #8855ee !important;
                --chat--color--primary--shade-100: #7744dd !important;
                --chat--window--border-radius: 1.25rem !important;
                --chat--border-radius: 1rem !important;
                --chat--heading--font-size: 1.125rem !important;
                --chat--heading--font-weight: 600 !important;
                --chat--header--background: linear-gradient(135deg, #9966ff 0%, #0ea5e9 100%) !important;
                --chat--toggle--background: linear-gradient(135deg, #9966ff 0%, #8b5cf6 100%) !important;
                --chat--toggle--hover--background: linear-gradient(135deg, #8855ee 0%, #7c3aed 100%) !important;
                --chat--message--user--background: linear-gradient(135deg, #9966ff 0%, #8b5cf6 100%) !important;
                --chat--button--background--primary: linear-gradient(135deg, #9966ff 0%, #8b5cf6 100%) !important;
                --chat--header--padding: 1rem !important;
                --chat--header-height: 110px !important;
            }

            /* Bouton toggle - style par défaut avec amélioration */
            #n8n-chat button[class*="toggle"] {
                box-shadow: 0 10px 25px rgba(153, 102, 255, 0.4) !important;
                transition: all 0.2s ease !important;
            }

            #n8n-chat button[class*="toggle"]:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 15px 30px rgba(153, 102, 255, 0.5) !important;
            }

            /* Header personnalisé avec hauteur fixe de 110px */
            #n8n-chat [class*="header"] {
                height: 110px !important;
                min-height: 110px !important;
                max-height: 110px !important;
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                justify-content: flex-start !important;
                padding: 1rem 1.5rem !important;
                gap: 1rem !important;
            }

            /* Ajouter l'image Chatbot dans le header alignée à gauche */
            #n8n-chat [class*="header"]::before {
                content: '' !important;
                display: block !important;
                width: 80px !important;
                height: 80px !important;
                background-image: url('/images/Chatbot.png') !important;
                background-size: contain !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                flex-shrink: 0 !important;
                order: -1 !important;
            }

            /* Conteneur du texte dans le header */
            #n8n-chat [class*="header"] > div {
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: flex-start !important;
                flex: 1 !important;
            }

            /* Texte du header à côté du logo */
            #n8n-chat [class*="header"] [class*="heading"],
            #n8n-chat [class*="header"] h1,
            #n8n-chat [class*="header"] h2 {
                color: #ffffff !important;
                font-weight: 700 !important;
                font-size: 1.25rem !important;
                margin: 0 !important;
                text-align: left !important;
            }

            /* Masquer le sous-titre si présent */
            #n8n-chat [class*="header"] [class*="subtitle"],
            #n8n-chat [class*="header"] p {
                display: none !important;
            }

            /* TOUT le texte en noir par défaut */
            #n8n-chat,
            #n8n-chat *,
            #n8n-chat input,
            #n8n-chat textarea,
            #n8n-chat button,
            #n8n-chat div,
            #n8n-chat p,
            #n8n-chat span {
                color: #0f172a !important;
            }

            /* EXCEPTION : Messages utilisateur uniquement - texte blanc sur fond violet */
            #n8n-chat [class*="user"] *,
            #n8n-chat [class*="User"] *,
            #n8n-chat [data-role="user"] * {
                color: #ffffff !important;
            }

            /* Fond violet pour les messages utilisateur */
            #n8n-chat [class*="user"],
            #n8n-chat [class*="User"],
            #n8n-chat [data-role="user"] {
                background: linear-gradient(135deg, #9966ff 0%, #8b5cf6 100%) !important;
            }

            /* Titres dans les messages du bot - même taille que le texte mais en gras */
            #n8n-chat h1,
            #n8n-chat h2,
            #n8n-chat h3,
            #n8n-chat h4,
            #n8n-chat h5,
            #n8n-chat h6 {
                font-size: 0.95rem !important;
                font-weight: 700 !important;
                margin-top: 0.5rem !important;
                margin-bottom: 0.5rem !important;
                line-height: 1.6 !important;
            }
        `;
        document.head.appendChild(style);

        // Injecter le script module
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

            createChat({
                webhookUrl: 'https://apps-n8n.5dfrqe.easypanel.host/webhook/c06c72de-02b1-48c2-a3f2-d9b7fc9dd3ce/chat',
                mode: 'window',
                showWelcomeScreen: true,
                initialMessages: [
                    'Bonjour ! 👋',
                    'Je suis l\\'assistant virtuel de Synapse Agency. Comment puis-je vous aider aujourd\\'hui ?'
                ],
                i18n: {
                    en: {
                        title: 'besoin d\\'information ?',
                        subtitle: '',
                        footer: '',
                        getStarted: 'Nouvelle conversation',
                        inputPlaceholder: 'Posez votre question...',
                    },
                },
                loadPreviousSession: true,
                enableStreaming: true,
            });
        `;
        document.body.appendChild(script);

        return () => {
            // Nettoyage lors du démontage
            if (link.parentNode) document.head.removeChild(link);
            if (style.parentNode) document.head.removeChild(style);
            if (script.parentNode) document.body.removeChild(script);
        };
    }, []);

    return null;
}
