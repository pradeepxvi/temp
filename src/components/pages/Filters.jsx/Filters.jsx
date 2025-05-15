import React, { useContext, useState } from "react";
import { CreateMainContext } from "../../../MainContext";
import GenereFilter from "./GenereFilter";
import LanguageFilter from "./LanguageFilter";
import FormFilter from "./FormFilter";

const Filters = () => {
  const {
    Books,
    filteredBooks,
    genres,
    languages,
    forms,
    HandleOnAdd,
    HandleOnRemove,
  } = useContext(CreateMainContext);
  return (
    <div>
      <div className="filters flex  flex-col   w-xs gap-3 p-2">
        {/* genera */}
        <GenereFilter
          genres={genres}
          HandleOnAdd={HandleOnAdd}
          HandleOnRemove={HandleOnRemove}
        />
        {/* language */}
        <LanguageFilter
          languages={languages}
          HandleOnAdd={HandleOnAdd}
          HandleOnRemove={HandleOnRemove}
        />
        {/* form */}
        <FormFilter
          forms={forms}
          HandleOnAdd={HandleOnAdd}
          HandleOnRemove={HandleOnRemove}
        />
      </div>
    </div>
  );
};

export default Filters;
