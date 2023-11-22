import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const TranscriptPage = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h2 class="navbar-brand" href="#">NisitKU</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Activity Transcript</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Registration Planner</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className='center'>Activity Transcript</h1>
      <div>
        <div class="card m-5">
          <div class="card m-2">
            <div className='card-body'>
              activity 2
            </div>
          </div>  
          <div class="card m-2">
            <div className='card-body'>
              activity 2
            </div>
          </div>  
          <div class="card m-2">
            <div className='card-body'>
              activity 2
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default TranscriptPage