import {useState} from "react";
import {useEffect} from "react";

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json)
                setLoading(false)
            })
    },[])

    return (
      <div className="container">
          <div>
            <h1>Users:</h1>
          </div>
              {loading ? (
                  <div className="spinner-border text-danger" role="status">
                      <span className="visually-hidden">Загрузка...</span>
                  </div>
              ) : data.map(item =>{
                  return(
                  <div>
                      <div className="list-group">
                          <a href="#" className="list-group-item list-group-item-action mb-3 row">
                              <h2>Name: {item.username}</h2>
                              <div>
                                  Email: {item.email}
                              </div>
                              <div>
                                  City: {item.address.city}
                              </div>
                              <div>
                                  Phone: {item.phone}
                              </div>
                              <div>
                                  Company: {item.company.name}
                              </div>
                          </a>
                      </div>
                  </div>
                  )
              })}
      </div>
  );
}

export default App;
