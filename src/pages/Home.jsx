/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CardSection from '../components/organisms/CardSection';
import Hero from '../components/organisms/Hero'
import ScrollToTop from "../components/atoms/ScrollToTop"

const Home = () => {
  useEffect(() => {
    document.title = "Home"; // Ganti "Judul Halaman" dengan judul yang Anda inginkan
  }, []);
  return (
    <>
      <Hero/>
      <CardSection/>
      <ArticlesList/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default Home;
