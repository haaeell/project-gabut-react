/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import ArticlesList from '../components/ArticlesList';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CardSection from '../components/organisms/CardSection';
import Hero from '../components/organisms/Hero'

const Home = () => {
  return (
    <>
      <Hero/>
      <CardSection/>
      <ArticlesList/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
