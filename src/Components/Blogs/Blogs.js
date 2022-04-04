import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 container'>
            <h3>Q1. What is Context Api?</h3>
            <h5 className='mt-3'>Ans: <span className='fw-light'>Context API is a method for a React app to effectively manufacture world variables that may be passed around. this is often the choice to "prop drilling" or moving props from forbear to kid to parent, and so on. React.createContext() is all you need. It returns a client and a supplier. supplier could be a part that as it's names suggests provides the state to its youngsters. it'll hold the "store" and be the parent of all the parts that may would like that store. client because it thus happens could be a part that consumes and uses the state.</span></h5>

            <h3 className='mt-5'>What is Semantic Tags?</h3>
            <h5 className='mt-3'>Ans: <span className='fw-light'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a "p" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is.</span></h5>
        </div>
    );
};

export default Blogs;