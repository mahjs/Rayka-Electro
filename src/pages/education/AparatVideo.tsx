import React, { useEffect } from 'react';

const AparatVideo = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.aparat.com/embed/tA4bv?data[rnddiv]=44993686793&data[responsive]=yes';
    script.async = true;

    // Append the script to the div with id 57507642332
    document.getElementById('57507642332').appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.getElementById('57507642332').removeChild(script);
    };
  }, []);

  return <div id="57507642332"></div>;
};

export default AparatVideo;
