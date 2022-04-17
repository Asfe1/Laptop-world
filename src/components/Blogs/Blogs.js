import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div>
            <div className='col-lg-9 con mx-auto my-5'>
                <div className='  justify-content-center my-auto  blog'>
                    <h2 className='align-self-center mt-2 mb-0 pb-0'> What is context api ?</h2>
                </div>
                <hr />
                <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of your application. Context API is a way for a React app to effectively produce global variables that can be passed around. Context API is a  new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. </p>
            </div>
            <div className='col-lg-9 con mx-auto my-5'>
                <div className='  justify-content-center my-auto blog'>
                    <h2 className='align-self-center mt-2 mb-0 pb-0'> What is semantic tag ?</h2>
                </div>
                <hr />
                <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. A semantic element clearly describes its meaning to both the browser and the developer. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.  It is much easier to read. It has greater accessibility. </p>
            </div>
            <div className='col-lg-9 con mx-auto my-5'>
                <div className='  justify-content-center my-auto blog'>
                    <h2 className='align-self-center mt-2 mb-0 pb-0'>  Inline-block elements ?</h2>
                </div>
                <hr />
                <p>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. Inline elements display in a line. Compared to display inline, the major difference is that display inline-block allows to set a width and height on the element. They do not force the text after them to a new line. Here the width, height and padding are respected, but the two copies of the element can still sit side by side. Compared to display block, the major difference is that display inline-block does not add a line-break after the element, so the element can sit next to other elements.</p>
            </div>

        </div>
    );
};

export default Blogs;