import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/movieApiKey'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <div className="banner-img">
        <MovieListing/>
      </div>
    </div>
  )
}

export default Home