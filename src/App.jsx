import './style.css'

function App() {
  return (
    <div className="app">
      <title>Movie Playlist</title>
      <h1>YOUJITUBE</h1>
    

      <div className="list">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
            alt="INCEPTION"
            className="poster"
          />
          <h3>INCEPTION</h3>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
            alt="INTERSTELLAR"
            className="poster"
          />
          <h3>INTERSTELLAR</h3>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
            alt="MAD MAX: FURY ROAD"
            className="poster"
          />
          <h3>MAD MAX: FURY ROAD</h3>
        </div>
      </div>
    </div>
  )
}

export default App