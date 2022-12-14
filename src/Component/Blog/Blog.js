import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Semantic Tag?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Semantic tag actually every HTML tag a meaning as well as with a presentation power.
                </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What is Context API?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
           <p>Context Api is a react structure which enables us to communicate or pass unique details.It helps to share state across the entire application.This context api solves the problem of props-drilling</p>
            </div>
          </div>
        </div>

      </div>
    </div>
        
    );
};

export default Blog;