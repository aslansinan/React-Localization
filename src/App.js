import './App.css';

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl'

function App() {
  const messages = {
    "tr-TR":{
      title: "Merhaba Sinan",
      description:"{count} yeni mesaj var"
    },
    "en-US":{
      title:"Hello Sinan",  
      description:"you have {count} new messages"
    }
  }
  
  const defaultLocale =  navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() =>{
    localStorage.setItem("locale",locale); 
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage
          id="title"
        />
        <p><FormattedMessage id='description' values={{count : 3}} /></p>
        <br /><br />
        <button onClick={() => setLocale('tr-TR')}>Tr</button>
        <button onClick={() => setLocale('en-US')}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
