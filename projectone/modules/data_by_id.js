// FetchData.js
import React, { useState, useEffect } from 'react';

function FetchDataId(props) {
  const [data, setData] = useState([]);
  let url = `http://192.168.0.21:5000/serial/${props.id}`;

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await fetch(url, {method:'GET'});
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const dataFetched = await response.json();
        setData(dataFetched);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromServer();
  }, []);
  return data; // Return the fetched data
};

export default FetchDataId;
