


const podcastsFetch = async() => {

  try {
    const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
    const dataApi = await response.json()
    return dataApi.feed.entry

  } catch (error) {
    console.log('Error!!', error)

  }
}

export {podcastsFetch}