import React from 'react';

import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import './blog.css';

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding'>
            <div className='gpt3__blog-content'>
                <h1 className='gradient__text'>A lot is happening,
                    We are blogging about it.</h1>
            </div>
            <div className='gpt3__blog-image'>
                <img src={blog01} alt='blog01' />
                <img src={blog02} alt='blog02' />
                <img src={blog03} alt='blog03' />
                <img src={blog04} alt='blog04' />
                <img src={blog05} alt='blog05' />
            </div>
        </div>
    )
}

export default Blog
