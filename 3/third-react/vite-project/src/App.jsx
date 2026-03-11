import { useState, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header';
import TextContent from './Components/TextContent';
// import Price from './Components/Price';
import AddPlanForm from './Components/AddPlanForm';
// import ComparePlan from './Components/ComparePlan';
import TablePlan from './Components/TablePlan';
import Footer from './Components/Footer';
import CreatePlanForm from './Components/CreatePlanForm';
import {CardContentProvider} from './Components/CardContent';
import CartModel from './Components/CartModel';
import TableComments from './Components/TableComments';

function App() {
  const [plans, setPlans] = useState([
    { 
      name:'Free',
      price:'0',
      users:'10',
      storage:'2',
      support: 'Email support',
      hasHelpCenter:true
    },
    {
      name:'Pro',
      price:'15',
      users:'20',
      storage:'10',
      support:'Priority email support',
      hasHelpCenter:true
    }
  ]);

  const [selectedPlans, setSelectedPlans] = useState(null);
  const planRef = useRef([]);

  const addPlan = (newPlan)=> {
    setPlans([...plans, newPlan]);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlans(plan);
    planRef.current.push(plan);
    console.log('Вибір тарифів:', planRef.current);
  };

  const [selectedComment, setSelectedComment] = useState([]);
  function addComment(comment) {
    setSelectedComment(selectedComment => [... selectedComment, comment])
  }
  function removeComment(idx) {
    setSelectedComment(comment => comment.filter((_, index) => index !== idx ))
  }

  return (
    <>
      <CardContentProvider>
        <Header></Header>
        <CartModel></CartModel>
        <CreatePlanForm onAddPlan={addPlan}></CreatePlanForm>
        <TextContent></TextContent>
        {/* <Price></Price> */}
        <AddPlanForm plans={plans}
        onSelectPlan={handleSelectPlan}
        >
          {selectedPlans && (
            <div className='container mt-4 p-3 border'>
              <h3>
                Bи порівнюєте тариф: {selectedPlans.name}
              </h3>
              <p>
                Ціна: {selectedPlans.price}$
              </p>
            </div>
          )}
        </AddPlanForm>
        <TablePlan selectedPlans={planRef.current}></TablePlan>
        {/* <ComparePlan></ComparePlan> */}
        <TableComments title='Коментарі' onSelectedComment={addComment}>
          <div className='container py-3'>
            <h1>
              Вибрані коментарі
            </h1>
            <ul className='list-group'>
              {selectedComment.map((comment, index) => {
                return <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                  <span className='me-3' style={{flex:'1 1 auto'}}>{comment.body}</span>
                  <button className='btn btn-danger btn-sm flex-shrink-0' onClick={() => removeComment(index)}>Видалити коментар</button>
                  </li>
              })}
            </ul>
          </div>
        </TableComments>
        <Footer></Footer>
      </CardContentProvider>
    </>
  )
}

export default App
