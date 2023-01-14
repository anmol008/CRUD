import './App.css';
import { ViewSale } from './Components/ViewSale';
function App() {
  return (
   <div className='app'>
    <ViewSale/>
    </div>
  );
}

export default App;
/*
Problem Statement
Project description:



A trade company is building a centralized sales management system which involves view/add/edit/delete crud operations of sales executed. 

You are tasked with using React js framework to build a front-end project for this purpose.



In this project a  sale data entity consists of three fields; id, saleTotal and buyerName. You will find the initial state in the App.js file with example data.



The application requires the following four operations. The four components of the application and their behavior is described below:



1. View Sale: View sales data as a table in SaleTable component. There is a template code in src/tables/SaleTable.js with Edit/Delete buttons.

2. Add Sale: Add sale data in AddSaleForm component. There is a template form code in src/forms/AddSaleForm.js.

3. Edit Sale: Edit sale data in EditSaleForm component. There is a template form code in src/forms/EditSaleForm.js.

4.Delete Sale: Delete sale data. Delete button is provided in SaleTable component.





Your need to implement the components described above for use in main App.js. Your task is to complete the files below to do so:

src/App.js
src/tables/SaleTable.js
src/forms/AddSaleForm.js
src/forms/EditSaleForm.js


Note:

Do not change label, input, button vs. attributes since it will disrupt application behaviour(like id, htmlFor, component name attributes).
Implementation related specifics are added directly as comments in the workspace.
Ensure that the structure and datatype of the components are followed as specified in the comments to ensure that the code is evaluated correctly.
Use Test App button often as described below (step 4), so you will be guided by test error messages.
When you delete or edit something you shouldn't have, test messages will give an error accordingly.
Click the "submit app" in the run dropdown once all the tasks are completed.Once all tasks are successfully implemented, you will receive an answer key. Go back to the question and save the answer key in the text editor below.
*/