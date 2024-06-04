import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Muitas coisas estão acontecendo, veja os posts.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Jun 04, 2024" title="Cyberfusion é lançada: Oferecendo internet de alta velocidade para todos." />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Mai 23, 2024" title="Cyberfusion revoluciona o streaming com internet sem limites." />
          <Article imgUrl={blog03} date="Mar 15, 2024" title="Cyberfusion anuncia parceria para levar internet gratuita a comunidades carentes." />
          <Article imgUrl={blog04} date="Fev 10, 2024" title="Cyberfusion: A nova era dos jogos online com ultra baixa latência." />
          <Article imgUrl={blog05} date="Jan 05, 2024" title="Cyberfusion é oficialmente apresentada: Conheça a internet do futuro." />
        </div>
      </div>
    </div>
  )
}

export default Blog
