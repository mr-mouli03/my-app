import React, { useState, useEffect, useRef } from 'react';

const images = [
    'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757148047631_6thsepplaycardsep25hpptmdesktop.jpg',
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1758543760684_22ndsepblockbustertuesdaydesktop.jpg",
    'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1756379853786_travisscottdesktopsept.jpg',
    'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1758089016301_webbannerpostmalone.jpg'
];

function ScrolImages() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent(prev =>
                prev < images.length - 1 ? prev + 1 : 0
            );
        }, 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const handlePrev = () => {
        clearTimeout(timeoutRef.current);
        setCurrent(prev => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        clearTimeout(timeoutRef.current);
        setCurrent(prev => (prev < images.length - 1 ? prev + 1 : 0));
    };

    const imageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '98%',
        height: '94%',
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        background: '#fff',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.5s'
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '350px',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0'
        }}>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src={images[current]}
                    alt={`img${current + 1}`}
                    style={imageStyle}
                />
            </div>
            <button
                onClick={handlePrev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    zIndex: 3
                }}
                aria-label="Previous"
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    zIndex: 3
                }}
                aria-label="Next"
            >
                &#8594;
            </button>
            {/* Dots */}
            <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px',
                zIndex: 4
            }}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: idx === current ? '#e74c3c' : '#ccc',
                            display: 'inline-block',
                            transition: 'background 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ScrolImages;