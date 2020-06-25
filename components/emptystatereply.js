import Head from 'next/head'
import MyEditor from './markdown'

export default function EmptyStateReply () {
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

             <div className="column col-12 con">
                <div className="columns gapless inner">
                <div className="col-6">
                    <div className="go-left">
                        <figure data-initial="S" className="avatar avatar-md"/>
                        <p className="username">Shreya Laheri</p>
                    </div>
                </div>
               
                </div>
            </div>


            <div className="column col-12 det">
                 <div className="qdetail">
                
                     
                         <div >
                             <MyEditor/>
                         </div>
                   
               
                 <div className="replyicon">
                <button className="btn btn-primary cancel">Cancel</button>
                
                <button className="btn reply">Reply</button>
                
            
                 </div>
                 </div>   
            </div>

             </div>





            </div>

            )
        
        
        }