import React from 'react';
import Structure from '@/components/structure';

function App() {
    return (
    <>
        <Structure centerContent={<>asdf</>} 
                   rightContent={<>asdf</>} 
                   messageBox={<></>}
                   showSide={true}
                   centerTitle='centerTitle'
                   rightTitle='rightTitle'
        />
    </>
    );
}



export default App;
