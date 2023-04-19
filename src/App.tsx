import { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { Header } from './components/Header/Header';
import { ResumeSection } from './components/ResumeSection/ResumeSection';
import { ContentSection } from './components/ContentSection/ContentSection';
import { SearchSection } from './components/SearchSection/SearchSection';
import { IMovieDetails } from './@types/MovieDetails.interface';
import { MovieDetailsService } from './services/MovieDetailsService/MovieDetailsService';
import { DatailsSearchService } from './services/DatailsSearchService/DatailsSearchService';
import { IDatailsSearch } from './@types/DatailsSearchService.interface';
import { ToastComponent } from './components/ToastComponent/ToastComponent';
import { Footer } from './components/Footer/Footer';
import '../src/styles/global.scss';
import { useDispatch } from 'react-redux';
import { selectMoviesDetails } from './features/movie-datails/movie-details-slice';

function App() {
  const [datailsSearch, setDatailsSearch] = useState<IDatailsSearch[]>();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);
  const [messageToast, setMessageToast] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useRef<any>(null);

  const dispatch = useDispatch() 

  const showToast = () => {
    toast.current.show();
  };

  const handleMovieDetails = async (searchTerm: IDatailsSearch[] | undefined) => {
    if (searchTerm === undefined) {
      return;
    }

    const movieId = searchTerm.map((datails) => {
      return datails.imdbID;
    });

    await new MovieDetailsService().execute(movieId[0])
      .then((response: any) => {
        setMovieDetails(response.data);
        setLoading(false);

        handleDispatch();
      }).catch((error: any) => {
        console.log(error);
        setMessageToast('Informação do filme não encontradas!');
        showToast();
      })
  };

  const handleDatailsSearch = async (searchTerm: string) => {
    await new DatailsSearchService().execute(searchTerm)
      .then((response: any) => {
        setLoading(true);
        setDatailsSearch(response.data);
      }).catch((error: any) => {
        console.log(error);
        setMessageToast('Filme não encontrado :(')
        showToast();
      })
  };

  const handleOnSeachTerm = (searchTerm: string) => {
    if (searchTerm === '') {
      setMessageToast('Informe o nome de um filme!');
      showToast();
      return;
    }

    handleDatailsSearch(searchTerm);
  }

  const handleDispatch = async () => {
    await dispatch(selectMoviesDetails(movieDetails));
  }

  function handleReset() {
    setMovieDetails(null);
  };

  useEffect(() => {
    handleMovieDetails(datailsSearch);
  }, [datailsSearch]);

  return (
    <ThemeProvider>
      <Header />
      <ResumeSection />
      <SearchSection
        onSubmit={handleOnSeachTerm}
        onReset={handleReset}
      />
      { 
        movieDetails &&
        <ContentSection
          movieDetails={movieDetails}
          loading={loading}
        />
      }
      <Footer />
      <ToastComponent toast={toast} message={messageToast} />
    </ThemeProvider>
  )
}

export default App;
