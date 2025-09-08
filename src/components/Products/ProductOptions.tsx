import { useForm } from "react-hook-form";
import { SelectInput } from "../Commons/SelectUserAccounts";
import { ProductOption } from "./OptionsCard";
import { TextInput } from "../Commons/InputControl";

export const ProductOptions = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission data here
  };


  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
        
        <div className="flex-1">
          <img
            src="https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fo%2Fmobileslegends_2.png&w=640&q=75"
            alt="Product"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 mt-6 sm:mt-0">
          <h2 className="text-3xl font-semibold text-primary mb-4">Product Title</h2>
          <p className="text-lg text-secondary mb-4">Short product description or summary.</p>

          <div className="mb-4">
            <p className="text-xl font-semibold text-third">ARS 374,59</p>
            <p className="text-sm text-gray-400">Including bonuses and extra items</p>
          </div>

          <div className="space-y-4 mb-6">
            <TextInput
              name="serverId"
              label="Server ID"
              control={control}
              placeholder="Enter your Server ID"
            />
            
            <TextInput
              name="userId"
              label="User ID"
              control={control}
              placeholder="Enter your User ID"
            />

            <SelectInput
              name="userAccount"
              label="Select User Account"
              control={control}
            />
          </div>

          <div className="space-y-4">
            <ProductOption title="11 Diamonds + 1 Bonus" price="ARS 374,59" bgColor="bg-primary" />
            <ProductOption title="40 Diamonds + 4 Bonus" price="ARS 1.284,40" bgColor="bg-secondary" />
          </div>

          <div className="mt-6 text-center">
            <button className="bg-third text-white py-3 px-6 rounded-lg w-full sm:w-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
