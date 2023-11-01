import { useEffect } from 'react';

const useEscapeKey = (callback) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.code === 'Escape') {
                callback();
            }
        }
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        }
    }, []);
}

export default useEscapeKey;