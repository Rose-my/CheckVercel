import { ThemeProvider } from 'styled-components';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import Animation from '@pages/Animation';
import MyPage from '@pages/MyPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <MyPage />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
