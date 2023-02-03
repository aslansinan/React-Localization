import './App.css';

import { useState } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl'

function App() {
  const messages = {
    "tr-TR":{
      title: "Merhaba Sinan",
      description:"3 yeni mesaj var"
    },
    "en-US":{
      title:"Hello Sinan",  
      description:"you have 3 new messages"
    }
  }
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage
          id="title"
        />
        <p><FormattedMessage id='description' /></p>
        <br /><br />
        <button onClick={() => setLang('tr-TR')}>Tr</button>
        <button onClick={() => setLang('en-US')}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
