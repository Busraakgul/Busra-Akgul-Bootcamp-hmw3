import { useState } from 'react';
import { PostFunction, TodosFunction, PostClass, TodosClass } 
from '../class-function-components'

function HomePage() {
  const [push, setPush] = useState(true)
  const [makeComponent, setmakeComponent] = useState(true)

  return (
    <>
          <button type="buttonfunc" onClick={() =>
           setmakeComponent(true)} className={makeComponent ? 
           "btn btn-info" : "btn btn-light"}>
            Class </button>
  
          <button type="buttonfunc" onClick={() => 
          setmakeComponent(false)}
           className={makeComponent ? "btn btn-light" : "btn btn-light"}>Functional
           </button>


          {makeComponent ? <div >
            <button type="buttonfunc" onClick={() => 
            setPush(true)} 
            className={push ? "btn btn-primary" : "btn btn-light"}>
              Todos</button>
            <button type="buttonfunc" onClick={() => setPush(false)} 
            className={push ? "btn btn-light" : "btn btn-warning"}
            >Posts</button>
           
            {push ? <TodosClass /> : 
            <PostClass/>}
          </div>
            :
            <div >
              <button type="button" onClick={() => 
                setPush(true)} className={push ? 
                "btn btn-light" : "btn btn-info"}>
                  Todos</button>
              <button type="button" onClick={() => 
              setPush(false)} 
              className={push ? "btn btn-primary" : "btn btn-light"}>
                Posts</button>
              {push ? <TodosFunction /> : 
              <PostFunction />}
            </div>}
    </>
  );
}

export default HomePage;
