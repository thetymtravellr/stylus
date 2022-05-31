import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ToolsCard from '../../Component/ToolsCard';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Products = () => {

    const [user, loading, userError] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const {
        data,
        isLoading,
        error,
      } = useQuery("tools", async () => {
        const res = await fetch("https://agile-atoll-96122.herokuapp.com/tools");
        return res.json();
      });
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>error</p>;
      }
    
      const tools = [...data]?.reverse();

    return (
       <div className='w-full h-full bg-slate-400 pt-24'>
            <div className='w-full max-w-7xl mx-auto  '>
   
        {admin && (
          <div className="flex space-x-4">
            <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0" to="/dashboard/manageproducts">Manage Products</Link>
            <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-0" to="/dashboard/addproduct">Add Product</Link>
          </div>
        )}
             <h1 className='text-4xl text-white text-center font-bold mb-4'>Products</h1>
    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
               {tools?.map((tool) => (
                <ToolsCard key={tools.indexOf(tool)}  tool={tool} admin={admin}></ToolsCard>
              ))}
        </div>
    </div>
       </div>
    );
};

export default Products;