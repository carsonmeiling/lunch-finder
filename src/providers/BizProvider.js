import React, { useState } from 'react';


const BizContext = React.createContext([{}, () => {}]);

//  const BizConsumer = BizContext.Consumer;

const BizProvider = (props) => {
  const [biz, setBiz] = useState([])

  return (
    <BizContext.Provider value={[biz, setBiz]}>
      {props.children}
    </BizContext.Provider>
  )
}

export { BizProvider, BizContext };