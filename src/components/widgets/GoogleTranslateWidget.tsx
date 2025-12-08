import { useEffect } from 'react';

const GoogleTranslateWidget = () => {
    useEffect(() => {
        // @ts-ignore
        window.googleTranslateElementInit = () => {
            // @ts-ignore
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'ar,zh-CN,zh-TW,es,fr,de,hi,it,ja,ko,pt,ru,th,vi,id,ms,bn,ta,te,pa,gu,kn,ml,or,si,ur', // Expanded industry-standard languages
                    // @ts-ignore
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                },
                'google_translate_element'
            );
        };

        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
                // @ts-ignore
                delete window.googleTranslateElementInit;
            };
        }
    }, []);

    return (
        <div id="google_translate_element"></div>
    );
};

export default GoogleTranslateWidget;