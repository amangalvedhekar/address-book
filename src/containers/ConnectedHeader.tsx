import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Header from 'src/components/Header';
import headerMap from 'src/utils/headerMapping';
export default function ConnectedHeader() {
  const location = useLocation();
  const [headerData, setHeaderData] = useState(headerMap.get('/'));
  useEffect(() => {
    const pathName = location?.pathname?.split('/');
    if (pathName && pathName[1] !== '') {
      setHeaderData(headerMap.get(pathName[1]));
    } else {
      setHeaderData(headerMap.get('/'));
    }
  }, [location, location.pathname]);
  return <Header>{headerData}</Header>;
}
