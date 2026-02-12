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
            }

            /* Bouton toggle */
            #n8n-chat button[class*="toggle"] {
                box-shadow: 0 10px 25px rgba(153, 102, 255, 0.4) !important;
                transition: all 0.2s ease !important;
            }

            #n8n-chat button[class*="toggle"]:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 15px 30px rgba(153, 102, 255, 0.5) !important;
            }

            /* Texte dans le champ de saisie en noir */
            #n8n-chat input,
            #n8n-chat textarea {
                color: #0f172a !important;
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
                        title: 'Synapse Agency 💬',
                        subtitle: 'Votre assistant IA disponible 24/7',
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
