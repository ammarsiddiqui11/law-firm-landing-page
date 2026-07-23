import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '919372579585'; // replace with client's number, country code + number, no + or spaces
  const message = 'Hi, I would like to enquire about your services.';

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.687 4.518 1.875 6.354L4 29l7.83-1.845A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.628 28 15S22.629 3 16.001 3zm0 21.75c-2.02 0-3.9-.59-5.48-1.61l-.393-.246-4.65 1.096 1.12-4.53-.256-.4A9.708 9.708 0 0 1 5.25 15c0-5.936 4.815-10.75 10.751-10.75S26.75 9.064 26.75 15 21.937 24.75 16.001 24.75zm5.42-8.13c-.297-.148-1.756-.867-2.028-.966-.272-.099-.47-.148-.668.148-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.253-.462-2.387-1.472-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.457.13-.605.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.668-1.61-.916-2.205-.241-.579-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.073.148.198 2.097 3.202 5.081 4.49.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.756-.718 2.004-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;