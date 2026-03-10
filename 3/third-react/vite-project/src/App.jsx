import { useState, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header';
import TextContent from './Components/TextContent';
// import Price from './Components/Price';
import AddPlanForm from './Components/AddPlanForm';
import ComparePlan from './Components/ComparePlan';
import TablePlan from './Components/TablePlan';
import Footer from './Components/Footer';
import CreatePlanForm from './Components/CreatePlanForm';
import {CardContentProvider} from './Components/CardContent';
import CartModel from './Components/CartModel';

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
        <ComparePlan></ComparePlan>
        <Footer></Footer>
      </CardContentProvider>
    </>
  )
}

export default App
