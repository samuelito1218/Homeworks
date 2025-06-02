import HomePage from './components/HomePage';
import ActionPage from './components/ActionPage';
import HeroesPage from './components/HeroesPage';
import HorrorPage from './components/HorrorPage';
import KillerPage from './components/KillerPage';
import MoviesPage from './components/MoviesPage';
import SuperNaturalPage from './components/SuperNaturalPage';

export const menuTree = {
  title: "CineWorld",
  children: [
    {
      title: "Inicio",
      link: "/",
      component: HomePage,
      children: []
    },
    {
      title: "Películas",
      link: "/movies",
      component: MoviesPage,
      children: [
        {
          title: "Acción",
          link: "/movies/action",
          component: ActionPage,
          children: []
        },
        {
          title: "Héroes",
          link: "/movies/heroes",
          component: HeroesPage,
          children: []
        },
        {
          title: "Terror",
          link: "/movies/horror",
          component: HorrorPage,
          children: [
            {
              title: "Asesinos",
              link: "/movies/horror/killer",
              component: KillerPage,
              children: []
            },
            {
              title: "Sobrenatural",
              link: "/movies/horror/supernatural",
              component: SuperNaturalPage,
              children: []
            }
          ]
        }
      ]
    }
  ]
};