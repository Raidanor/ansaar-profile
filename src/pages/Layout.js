import React from 'react';

const Layout =() =>
{
    let styleConfig = {padding: '10px', color:'rgba(255, 255, 255)'};
    return(
        <div class="nodal container min-vh-100" style={styleConfig}>
            <h1>Welcome</h1>
            <div class="row">
                <div class="col">
                    I am Ansaar
                    <p>This is a sample website I'm making with react</p>

                </div>
            </div>
        </div>
    
    )
};

export default Layout;