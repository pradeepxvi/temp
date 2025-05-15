import React, { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";

const FormFilter = ({ forms, HandleOnAdd, HandleOnRemove }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-lg">Forms</h3>
      <div className="flex flex-col gap-1">
        {forms.map((items, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              onClick={(event) => {
                if (event.target.checked) {
                  HandleOnAdd(items);
                } else {
                  HandleOnRemove(items);
                }
              }}
              className="cursor-pointer"
            />
            {items}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormFilter;
