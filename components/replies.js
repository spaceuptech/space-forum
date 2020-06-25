import Head from 'next/head'

export default function DisplayReplies () {
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
            <div className="column col-12 t">
                 <p className="qname">Replies</p>
                 <hr className="divide"/>  
            </div>
            <div className="column col-12 con">
                <div className="columns gapless inner">
                <div className="col-6">
                    <div className="go-left">
                        <figure data-initial="S" className="avatar avatar-md"/>
                        <p className="username">Shreya Laheri</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="go-right">
                    <i className="icon  icon-edit"/>
                    <p className="smalldate">14th May</p>
                       
                    </div>
                </div>
                </div>
            </div>

            <div className="column col-12 det">
                 <div className="qdetail">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 <div className="replyicon">
                <button className="btn btn-action r"> <i className="material-icons r">reply</i></button>
                <p className="replytext">Reply</p>
                 </div>
                 </div>    
            </div>

            </div>
        </div>
    )
}