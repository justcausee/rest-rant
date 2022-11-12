const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
          <div>
              <img src="\images\puppy.jpg" alt="Puppy"/>
              <div>
                Photo by <a href="https://unsplash.com/@karsten116?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karsten Winegeart</a> on <a href="https://unsplash.com/s/photos/puppy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
  )
}

module.exports = error404

