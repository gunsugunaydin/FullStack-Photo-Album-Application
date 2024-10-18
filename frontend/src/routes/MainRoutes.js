import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const AlbumsPage = Loadable(lazy(() => import('pages/albums/albums')));
const AlbumAddPage = Loadable(lazy(() => import('pages/albums/albumAdd')));
const AlbumEditPage = Loadable(lazy(() => import('pages/albums/albumEdit')));
const AlbumShowPage = Loadable(lazy(() => import('pages/albums/albumShow')));
const AlbumUploadPage = Loadable(lazy(() => import('pages/albums/albumUpload')));
const AboutPage = Loadable(lazy(() => import('pages/staticPages/about')));
const PhotoEditPage = Loadable(lazy(() => import('pages/albums/photoEdit')));


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <AlbumsPage />
    },
    {
      path: '/album/add',
      element: <AlbumAddPage />
    },
    {
      path: '/album/edit',
      element: <AlbumEditPage />
    },
    {
      path: '/album/show',
      element: <AlbumShowPage />
    },
    {
      path: '/album/upload',
      element: <AlbumUploadPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/photo/edit',
      element: <PhotoEditPage />
    },
  ]
};

export default MainRoutes;
