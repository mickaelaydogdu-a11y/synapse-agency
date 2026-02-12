"use client";

import { useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        // Injecter le CSS
        const link = document.createElement('link');
        link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

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
                enableStreaming: false,
            });
        `;
        document.body.appendChild(script);

        return () => {
            // Nettoyage lors du démontage
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
