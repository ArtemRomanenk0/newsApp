import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage, { routeMain as routeMainPage } from 'pages/MainPage'
import NewsListPage, { routeMain as routeNewsListPage } from 'pages/NewsListPage'
import NewsDetail, { routeMain as routeNewsDetail } from 'pages/NewsDetail'
import Contacts, { routeMain as routeContacts } from 'pages/Contacts'
import Error, { routeMain as routeError } from 'pages/Error'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './styles.scss'

const AppContent = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <main>
        <Routes>
          <Route path={routeMainPage()} element={<MainPage />} />
          <Route path={routeNewsListPage()} element={<NewsListPage />} />
          <Route path={routeNewsDetail()} element={<NewsDetail />} />
          <Route path={routeContacts()} element={<Contacts />} />
          <Route path='/' element={<Navigate replace to={routeMainPage()} />} />
          <Route path={routeError()} element={<Error />} />
          <Route path='*' element={<Navigate replace to={routeError()} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppContent
