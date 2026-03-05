import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header';
import TextContent from './Components/TextContent';
// import Price from './Components/Price';
import AddPlanForm from './Components/AddPlanForm';
import ComparePlan from './Components/ComparePlan';
import Footer from './Components/Footer';
import CreatePlanForm from './Components/CreatePlanForm';

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

  const addPlan = (newPlan)=> {
    setPlans([...plans, newPlan]);
  };

  return (
    <>
        <Header></Header>
        <CreatePlanForm onAddPlan={addPlan}></CreatePlanForm>
        <TextContent></TextContent>
        {/* <Price></Price> */}
        <AddPlanForm plans={plans}></AddPlanForm>
        <ComparePlan></ComparePlan>
        <Footer></Footer>
    </>
  )
}

export default App
