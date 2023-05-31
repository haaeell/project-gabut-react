import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['HARAA HURUUU', 'HURUUU HARAA', 'HARUU RUHAAA'], // Daftar teks yang akan dianimasikan
      typeSpeed: 50, // Kecepatan pengetikan (dalam milidetik)
      loop: true, // Mengulang animasi
      backDelay: 2000, // Jeda sebelum teks diketik kembali setelah selesai
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy(); // Membersihkan animasi saat komponen dilepas
    };
  }, []);

  return <span ref={textRef} />;
};

export default TypingEffect;
