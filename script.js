const getAlbums = async() => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  try {
    const response = await fetch(url);
    const albums = await response.json();
    albums.forEach(e => {
      if (e.id <= 20) {
        console.log(e.title);
      }
    })
  } catch(error){
    console.log(`El error es ${error}`);
  }
}

const albumSent = async() => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Información enviada. 💿');
  }, 3000)
})

const albumSentRight = async(albumSent) => {
  const albumMessage = await albumSent();
  console.log(albumMessage);
} 

getAlbums();
albumSentRight(albumSent)