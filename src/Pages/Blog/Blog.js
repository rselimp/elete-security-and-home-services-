import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 mx-auto mt-6'>
<div className="collapse">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title dark:text-white  bg-sky-200 dark:bg-gray-500 text-info-content peer-checked:bg-accent dark:bg-gray-500 peer-checked:text-accent-content">
  <h2 className='text-3xl'>1.What is the purpose of react router?</h2>
  </div>
  <div className="collapse-content bg-gray-200 text-content peer-checked:bg-gray-200 peer-checked:text--content"> 
  <p className='text-xl'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

  </div>
</div>
<div className="collapse mt-8">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-sky-200 dark:text-white  dark:bg-gray-500 text-info-content peer-checked:bg-accent peer-checked:text-accent-content">
  <h2 className='text-3xl'>2.How doues context api work?</h2>
  </div>
  <div className="collapse-content bg-gray-200 text-content peer-checked:bg-gray-200 peer-checked:text--content"> 
  <p className='text-xl'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page    
            </p>
  </div>
</div>
<div className="collapse mt-8">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-sky-200 dark:text-white  dark:bg-gray-500 text-info-content peer-checked:bg-accent peer-checked:text-accent-content">
  <h2 className='text-3xl'>3. Hooks useref</h2>
  </div>
  <div className="collapse-content bg-gray-200 text-content peer-checked:bg-gray-200 peer-checked:text--content"> 
  <p className='text-xl'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>

  </div>
</div>

        </div>
    );
};

export default Blog;