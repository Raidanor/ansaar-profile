import React from 'react';

const Layout =() =>
{
    let styleConfig = {padding: '10px', color:'rgba(255, 255, 255)'};
    return(
        <div class="nodal container min-vh-100" style={styleConfig}>
            <h1>Welcome</h1>
            <div class="row">
                <div class="col">
                    <p>
                        I am Ansaar<br />
                        This is a sample website I'm making with react
                    </p>
                    <br />
                    <p>
                        I am a Computer Science student and I am looking for a job in the tech industry
                        <br />
                        I've made a game using Unoty and you can view and download it using the "<u>Game</u>" link on the bottom right
                        <br />
                        <br />
                        A copy of my resume can also be viewed on the bottom
                    </p>

                </div>
            </div>
        </div>
    
    )
};

export default Layout;