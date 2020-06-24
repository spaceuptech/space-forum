import Head from 'next/head'

export default function TopBar (){
    return(
        <div>
          <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"/> 
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>  
          </Head>

          <div className="columns"> 
            <div className="column col-12" >
                  
              <header className="navbar a" >
                <section className="navbar-section" >
                  <div className="padding">
                   <img style={{'marginTop':'5px','marginBottom':'5px'}} src="/logo-black.jpg" className="logo" alt='SpaceUpCloud'/>  
                  </div>
                </section>
                
                <section className="navbar-section">
                <div className="hide-sm" style={{'marginRight':'40px'}}>
                <div className="company" style={{'width':'90%','marginTop':'5px','marginBottom':'3px'}}>
                  <p>Powered by Space Cloud</p>
                  <img src="/spaceship.jpg" className="spaceship" alt="oops"/>
                </div>
                  
                </div>
                <figure  className="avatar avatar-lg a">
                <i className="material-icons">perm_identity</i>
            
                </figure>
               
                </section>
              </header>
            </div>
            <div  className="column col-12 footer show-xs">
                
                <div className="company">
                  <p >Powered by Space Cloud</p>
                  <img src="/spaceship.jpg" className="spaceship" alt="oops"/>
                </div>
              

            </div>
         </div>
  
        </div>

    )
}
