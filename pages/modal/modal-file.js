import Head from 'next/head'
import Editor from '../../components/editor'
import Autocomplete from '../../components/autocomplete'

export default function Modal() {
  return (
    <div className="container">
      <Head>
        <title>Space Forum</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' rel='stylesheet' type='text/css'></link>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
      </Head>

      <main>
        <div class="modal active" id="modal-id">
          <a href="#close" class="modal-overlay" aria-label="Close"></a>
          <div class="modal-container">
            <div class="modal-header">
              <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
              <div class="modal-title h5">Add a topic</div>
            </div>
            <div class="modal-body">
              <div class="content">
                <div class="form-group">
                  <label class="form-label">Title</label>
                  <input class="form-input" type="text" placeholder="Title" />
                </div>
                <div class="form-group">
                  <label class="form-label">Category</label>
                  {/* <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                  </select> */}
                  <Autocomplete
                  suggestions={[
                    "Alligator",
                    "Bask",
                    "Crocodilian",
                    "Death Roll",
                    "Eggs",
                    "Jaws",
                    "Reptile",
                    "Solitary",
                    "Tail",
                    "Wetlands"
                  ]}/>
                </div>
                <div class="form-group">
                  <label class="form-label">Content</label>
                  <Editor />
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button class="btn-primary btn">Post</button>
            </div>
          </div>
        </div>

      </main>
      
    </div>
    
  )
}
