import Head from 'next/head'
export default function Select (){
    return(
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"/>
                <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"/>
                <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"/>  
            </Head>
            
            <div className="columns">
                <div className="column col-sm-8 col-lg-11">
                     <div className="padding">
                      
                             
                         
                     <div className="has-icon-left">
                     <input type="text" className="form-input" placeholder="Search"/>
                     <i className="form-icon icon icon-search"></i>
                    </div>
                       
                        
                        
                    </div> 
                </div>

                <div className="column col-sm-4 col-lg-1">
          
                    <button className="btn btn-primary hide-sm">Category<i className="icon icon-arrow-down"/></button>
                    <button className="btn hide-sm"> <i className="icon icon-plus"/>New Topic</button>
                    <button className="btn btn-action show-sm"><i className="icon icon-plus"></i></button>
                    <button className="btn btn-action show-sm a">
                        <div className="diva"></div>
                        <div className="div"></div>
                        <div className="divb"></div>
                    </button>
           
                </div>

            </div>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
       
        </div>
    )
}